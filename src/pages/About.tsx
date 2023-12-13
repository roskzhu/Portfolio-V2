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
      <h1>My Expertises.</h1>
    );
    const two = (
      <h2>
        I'm exploring the intersection between mathematics and code, currently focusing the field of machine-learning.
        I'm very interested in the potential artificial intelligence has to enrich our everyday lives! 
      </h2>
    );
    const three = (
      <h1>My Digital Tool Box.</h1>
    );
    const four = (
      <h2>These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons.</h2>
    );
    const five = (
      <h3>Backend <br/>
      Full-stack <br/>
      Machine Learning <br/>
      UI/UX Design <br/>
      Branding
      </h3>
    );
    const six = (
      <h3>Python <br/>
      Java <br/>
      C / C + + <br/>
      Typescript/ <br/>
      Javascript 
      </h3>
    );

    return (
      <div id="about">
        <FadeIn delay={`0ms`}>
          <div className="section-header">
          <span className="section-title-before">What do I do?</span>
            <span className="section-title">About Me</span>
          </div>
          <div className="grid">
              <div className="about-container">
                  {[one]}
                  {[two]}
                  <div className="about-content">
                    {[three]}
                    {[four]}
                  </div>
              </div>
              <div className="about-container">
                  {[five]}
                  <div className="about-content">
                    {[six]}
                  </div>
              </div>
          </div>

        </FadeIn>
        {/* <TechStack/> */}
      </div>
    );
  }
}

export default About;
