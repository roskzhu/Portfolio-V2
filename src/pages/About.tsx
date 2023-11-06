import React from "react";
import "../styles/About.css";
import FadeIn from "../components/FadeIn";

interface AboutState {
  expanded: boolean;
  activeKey: string;
}

class About extends React.Component<{}, AboutState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <h1>Driven by tech for social good, I'm drawn to impactful and collaborative work.</h1>
    );
    const two = (
      <h2>
        Currently, I have great interest in <span style={{ fontWeight: 'bold', color: 'blue' }}>full-stack</span> development, <span style={{ fontWeight: 'bold', color: 'blue' }}>machine learning</span>, and research.
      </h2>
    );
    const three = (
      <p> <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '18px' }}>Recently, I've been working with ... </span><br/>
      <mark>Python</mark> {" "}
      <mark>Tensorflow</mark> {" "}
      <mark>OpenCV</mark> {" "}
      <mark>Keras</mark> {" "}
      <mark>Node.js</mark> {" "}
      <mark>React.js</mark> {" "}
      <mark>Java</mark> {" "}
      <mark>AWS</mark> {" "}
      <mark>GCS</mark>
      </p>
    );

    return (
      <div id="about" className="about-container">
        <FadeIn>
          <div className="section-header">
            <span className="section-title">./ about</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {[two]}
              {[three]}
            </div>
            <div className="about-image">
              <img src={"/assets/me6.png"} alt="me" style={{ maxWidth: "340px" }}/>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default About;
