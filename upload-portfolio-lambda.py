import json
import boto3
import io
import zipfile
import mimetypes


def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:622479507228:deployPortfolio')
    try:
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
        print('job done')
        topic.publish(Subject="Portfolio build", Message="Portfolio deployed")
    except:
        topic.publish(Subject="Portfolio Build",
                      Message="Portfolio deploy failed")
        raise

    return 'Hello from Lambda'
