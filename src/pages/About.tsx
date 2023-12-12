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
      <h1>Inspired by {" "}
        <span style={{fontStyle: 'italic', fontWeight: '600'}}>tech for social good</span>, 
        driven by <span style={{fontStyle: 'italic', fontWeight: '600'}}>continuous learning</span>, 
        drawn to <span style={{fontStyle: 'italic', fontWeight: '600'}}>creative work</span>.</h1>
    );
    const two = (
      <h2>
        Recently, I've been exploring the field of machine-learning, and learning about systems design architecture. 
        Always growing and reflecting, I'm currently really interested in the intersection between mathematics and code,
        as well as the potential artificial intelligence has to enrich our everyday lives. 
        <br/>
        Creating impactful software for social good is what truly excites me!
      </h2>
    );

    return (
      <div id="about">
        <FadeIn delay={`0ms`}>
          <div className="section-header">
          <span className="section-title-before">What do I do?</span>
            <span className="section-title">About Me</span>
          </div>
          <div className="about-content">
            {[one]}       
            <div className="about-container">
            <div className="about-description">              
            <div className="vertical-line"></div>
              {[two]}
            </div>
            </div>
            {/* <div className="about-image">
              <img src={"/assets/me6.png"} alt="me" style={{ marginBottom: "20px" }}/>
            </div> */}
          </div>
        </FadeIn>
        {/* <TechStack/> */}
      </div>
    );
  }
}

export default About;
