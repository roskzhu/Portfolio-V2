import React from "react";
import "../styles/Experience.css";
import FadeIn from "./FadeIn";
import "../styles/Timeline.css";

interface ExperienceState {
  expanded: boolean;
  activeKey: string;
}

class WorkTimeline extends React.Component<{}, ExperienceState> {
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
            <span className="section-title-before">{"// "}What have I done?</span>
            <span className="section-title">Experience</span>
          </div>
          <div className="timeline-container">
          <div className="vertical-line-timeline"></div>
          <div className="work-card">
            <h1>Software Engineering Intern <br/>@ BMO Financial Group</h1>
            <h3>SEPT 2023 - PRESENT</h3>
            <ul>
                <li>
                  Currently working on the Digital Core AI team, helping with document verification to automate mortgage loans.
                </li>
              </ul>
              <div className="card-tech" style={{width: '50%'}}>
                Python // AWS // SQL // Flask // React.js // TypeScript
              </div>
          </div>
          </div>
        </FadeIn>
        </div>
      </div>
    );
  }
}

export default WorkTimeline;
