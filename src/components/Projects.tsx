import { Component } from "react";
import "../styles/Projects.css";
import FadeIn from "./FadeIn";
import ExternalLinks from "./ExternalLinks";

interface ProjectsState {
  expanded: boolean;
  activeKey: string;
}

class Projects extends Component<{}, ProjectsState> {
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
    const projects: any = {
      "iSpy": {
        desc:
          "A facial recognition web application that recognizes and remembers the faces of different individuals in real-time footage.",
        techStack: "Python, Tensorflow, OpenCV, Javascript",
        link: "https://github.com/roskzhu/iSpy",
        open: "",
        image: "/assets/ispy.png" // Add image path here
      },
      "CollaboraCart": {
        desc:
          "A supply ordering platform that cuts costs for small businesses by consolidating orders for bulk orders.",
        techStack: "Python (Flask), SQLite, React, Tailwind CSS",
        link: "https://github.com/roskzhu/CollaboraCart", 
        open: "",
        image: "/assets/collaboracart.png" // Add image path here
      },
      "FridgeSmart": {
        desc:
          "A  full-stack computer-vision web application that scans your fridge for ingredients and recommends recipes.",
        techStack: "Javascript, YOLOv8, Roboflow",
        link:
          "https://github.com/roskzhu/FridgeSmart",
        image: "/assets/fridgesmart.png" 
      },
      "Tetris": {
        desc:
          "A two player variation of Tetris - made with random block generation, adjustable difficulty levels, and other bonus features.",
        techStack: "C++, XWindows",
        link: "https://github.com/roskzhu/Biquadris",
        open: "",
        image: "/assets/tetris.png" 
        }
        };

    return (
      <div id="projects" >
        <FadeIn>
      <div className="section-header">
        <span className="section-title">./ software-creations</span>
      </div>
      </FadeIn>
      <div>
        <div className="project-container" style={{ width: "850px", paddingTop:'10px' }}>
        <FadeIn>
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeIn delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                <img src={projects[key]["image"]} alt={key} style={{ maxWidth: "400px", height: "240px" }}/> {/* Add image here */}
                  <div className="card-header">
                    <div className="folder-icon">
                    <div className="card-title">{key}</div>
                    </div>
                    <ExternalLinks 
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">
                    {projects[key]["techStack"].split(", ").map((item: string, index: number) => (
                      <span key={index}>
                        {index > 0 ? " " : ""}
                        <mark>{item}</mark>
                      </span>
                    ))}
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
          </FadeIn>
        </div>
      </div>
      </div>
    );
  }
}

export default Projects;
