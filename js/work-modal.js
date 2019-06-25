import React from 'react';

class WorkModal extends React.Component {
    render() {
        let work = this.props.work;
        let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

        return (
            <div className={modalClass} >
                <img alt={work.image.description} src={work.image.src} className="modal__image" />
                <div className="color--tan modal__text">
                    <span className="color--tan modal__closeButton"
                        onClick={(evt) => this.props.closeModal(evt, work)}>
                        <i className="fa fa-window-close-o"></i>
                    </span>
                    <h2 className="modal__title">
                        {work.title}
                    </h2>
                    <a className="color--blue modal__link" href={work.code}>
                        See the code
                    </a>
                    <p className="modal__description">
                        Tech: {work.long_dsc.tech} <br /><br />
                        {work.long_dsc.dsc}
                    </p>
                </div>
            </div >

        )
    }
}
export default WorkModal