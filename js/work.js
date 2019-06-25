import React from "react";
import WorkModal from './work-modal';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedWork': this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Functions
  openModal(evt, work) {
    this.setState({
      'modalOpen': true,
      'selectedWork': work
    });
  }

  closeModal(evt, work) {
    this.setState({
      'modalOpen': false,
      'selectedWork': work
    });
  }

  render() {
    return (
      <span>
        <section className="section section--alignCentered section--description">
          {this.props.work.map((work, idx) => {
            return <ExampleBubble work={work} key={idx} openModal={this.openModal} />;
          })}
        </section>

        <WorkModal work={this.state.selectedWork}
          open={this.state.modalOpen} closeModal={this.closeModal} />
      </span>
    );
  }
}

class ExampleBubble extends React.Component {
  render() {
    let work = this.props.work;
    return (
      <div className="section__wrapper"
        onClick={(evt) => this.props.openModal(evt, work)}>
        <div className="section__standout">
          <img
            alt={work.image.description}
            className="section__standoutImage"
            src={work.image.src}
          />
          <dl className="color--tan">
            <dt className="section__standoutTitle section__text--centered">
              {work.title}
            </dt>
            <dd />

          </dl>
        </div>
      </div>
    );
  }
}
export default Work;
export { ExampleBubble };
