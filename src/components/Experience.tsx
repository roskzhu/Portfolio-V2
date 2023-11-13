import React from "react";
import "../styles/Experience.css";
import FadeIn from "./FadeIn";
import Work from "./Work";

interface ExperienceState {
  expanded: boolean;
  activeKey: string;
}

class Experience extends React.Component<{}, ExperienceState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="experience" >
        <div className="experience-container">
        <FadeIn>
          <div className="section-header" style={{ paddingBottom: '20px'}}>
            <span className="section-title-before">//  Real impact made for real people.</span>
            <span className="section-title">Experience</span>
          </div>
          <Work></Work>
        </FadeIn>
        </div>
      </div>
    );
  }
}

export default Experience;
