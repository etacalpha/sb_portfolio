import React from "react";

class Work extends React.Component {
  render() {
    return (
      <section className="section section--alignCentered section--description">
        {this.props.work.map((work, idx) => {
          return <ExampleBubble work={work} key={idx} />;
        })}
      </section>
    );
  }
}

class ExampleBubble extends React.Component {
  render() {
    let work = this.props.work;
    return (
      <div className="section__wrapper">
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
