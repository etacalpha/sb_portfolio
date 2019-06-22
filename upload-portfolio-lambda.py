import boto3
import io
import zipfile
import mimetypes

s3 = boto3.resource('s3')

pb = s3.Bucket('steven-beard.io')
bb = s3.Bucket('steven-beard.io-build')

pz = io.BytesIO()
bb.download_fileobj('portfolio_build.zip', pz)

with zipfile.ZipFile(pz) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        pb.upload_fileobj(obj, nm, ExtraArgs={
                          'ContentType': mimetypes.guess_type(nm)[0]})
        pb.Object(nm).Acl().put(ACL='public-read')
