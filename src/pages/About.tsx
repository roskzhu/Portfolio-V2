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
      <h1>I'm a software engineer developing
      innovative solutions for complex problems.</h1>
    );
    const two = (
      <h2 style={{ fontFamily: 'Rubik, sans-serif' }}>
        Currently, I have great interest in full-stack development, machine learning, and research.
      </h2>
    );
    const three = (
      <p> Recently, I've been working with ... <br/>
      <mark>Python</mark> {" "}
      <mark>HTML & CSS</mark> {" "}
      <mark>Node.js</mark> {" "}
      <mark>React.js</mark> {" "}
      <mark>Java</mark> {" "}
      <mark>AWS</mark>
      </p>
    );

    return (
      <div id="about">
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
              <img src={"/assets/me6.png"} alt="me" style={{ maxWidth: "370px" }}/>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default About;
