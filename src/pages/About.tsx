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
      <h1 style={{paddingTop:'15px'}}>Driven by tech for social good, I'm drawn to impactful and collaborative work.</h1>
    );
    const two = (
      <h2 style={{marginLeft:'-10px', marginTop:'40px'}}>
        Currently, I have great interest in <mark>full-stack</mark> development, <mark>machine learning</mark>, and research.
      </h2>
    );
    const three = (
      <p style={{marginLeft: '-10px', fontSize: '15px'}}> <span style={{ fontFamily: 'Karla, sans-serif', color: '#3D4340' }}>Recently, I've been working with ... </span><br/>
        <mark>Python</mark> {" "}
        <mark>Tensorflow</mark> {" "}
        <mark>OpenCV</mark> {" "}
        <mark>Keras</mark> {" "}
        <mark>Node.js</mark> {" "}
        <mark>React.js</mark> {" "}
        <mark>Java</mark> {" "}
        <mark>AWS</mark> {" "}
        <mark>GCD</mark>
      </p>
    );

    return (
      <div id="about" className="about-container">
        <FadeIn delay={`200ms`}>
          <div className="section-header">
          <span className="section-title-before">// Who am I?</span>
            <span className="section-title">About Me</span>
          </div>
          <div className="about-content">
            <div className = "vertical-line" style={{marginLeft:'110px',marginTop:'20px'}}></div>
            <div className="about-description">
              {[one]}
              {[two]}
              {/* {[three]} */}
            </div>
            <div className="about-image">
              <img src={"/assets/me6.png"} alt="me" style={{ maxWidth: "300px" }}/>
            </div>
          </div>
        </FadeIn>
        <TechStack/>
      </div>
    );
  }
}

export default About;
