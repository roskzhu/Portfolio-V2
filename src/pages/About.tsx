import React from "react";
import "../styles/About.css";
import FadeIn from "../components/FadeIn";
import TechStack from "../components/TechStack";

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
        Currently, I have great interest in <mark>full-stack</mark> development, <mark>machine learning</mark>, and research.
      </h2>
    );

    return (
      <div id="about">
        <FadeIn delay={`0ms`}>
          <div className="section-header">
          <span className="section-title-before">{"// "}README.md</span>
            <span className="section-title">About Me</span>
          </div>
          <div className="about-content">
            {/* <div className="about-container"> */}
            <div className="vertical-line"></div>
            <div className="about-description">
              {[one]}
              {[two]}
              {/* {[three]} */}
            </div>
            {/* </div> */}
            <div className="about-image">
              <img src={"/assets/me6.png"} alt="me" style={{ marginBottom: "20px" }}/>
            </div>
          </div>
        </FadeIn>
        <TechStack/>
      </div>
    );
  }
}

export default About;
