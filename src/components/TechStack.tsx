import React from "react";
import "../styles/Tech.css";
import FadeIn from "./FadeIn";

interface TechStackState {
  expanded: boolean;
  activeKey: string;
}

class TechStack extends React.Component<{}, TechStackState> {
  render() {
    return (
        <div className="tech-container">          
            {/* <div className="section-header" style={{ paddingBottom: '0px', paddingTop:'25px' }}>
              <span className="tech-title">
                <FadeIn>My tech stack</FadeIn>
              </span>
            </div> */}
            <div className="tech-row">
            <div className="subtitle">
            <FadeIn delay={`100ms`}>            
              <h1>
              Programming Languages
              </h1>              
              </FadeIn>
            </div>
            <div className="vertical-line-tech"></div>
            {/* <FadeIn delay={`300ms`}> */}
            <div className="item-card-container">
              <div className="item-card">
                <img src="/assets/python.svg" alt="python" className="item-image" />
                Python
              </div>
              <div className="item-card">
                <img src="/assets/c++.png" alt="c++" className="item-image" />
                C++
              </div>
              <div className="item-card">
                <img src="/assets/c.png" alt="c" className="item-image" />
                C
              </div>
              <div className="item-card">
                <img src="/assets/java.png" alt="java" className="item-image" />
                Java
              </div>
              <div className="item-card">
                <img src="/assets/js.png" alt="js" className="item-image" />
                Javascript
              </div>
              <div className="item-card">
                <img src="/assets/ts.png" alt="ts" className="item-image" />
                Typescript
              </div>
              <div className="item-card">
                <img src="/assets/html.png" alt="html" className="item-image" />
                HTML
              </div>
              <div className="item-card">
                <img src="/assets/css.png" alt="css" className="item-image" />
                CSS
              </div>
              <div className="item-card">
                <img src="/assets/sql.png" alt="sql" className="item-image" />
                SQL
              </div>
              <div className="item-card">
                <img src="/assets/bash.png" alt="bash" className="item-image" />
                Bash
              </div>
            </div>
            {/* </FadeIn> */}
            </div>
            
            <div className="horizontal-divider-tech"></div>

            <div className="tech-row">
            <div className="subtitle">
            <FadeIn delay={`100ms`}>
              <h1>
              Frameworks & Libraries
              </h1>
              </FadeIn>      
            </div>  
            {/* <FadeIn delay={`300ms`}> */}
            <div className="item-card-container">
              <div className="item-card">
                <img src="/assets/flask.png" alt="flask" className="item-image" />
                Flask
              </div>              
              <div className="item-card">
                <img src="/assets/express.png" alt="express" className="item-image" />
                Express.js
              </div>
              <div className="item-card">
                <img src="/assets/reactjs.png" alt="reactjs" className="item-image" />
                React.js
              </div>
              <div className="item-card">
                <img src="/assets/nodejs.png" alt="nodejs" className="item-image" />
                Node.js
              </div>
              <div className="item-card">
                <img src="/assets/nextjs.png" alt="nextjs" className="item-image" />
                Next.js
              </div>
              <div className="item-card">
                <img src="/assets/tensorflow.png" alt="tensorflow" className="item-image" />
                Tensorflow
              </div>
              <div className="item-card">
                <img src="/assets/pytorch.png" alt="pytorch" className="item-image" />
                PyTorch 
              </div>
              <div className="item-card">
                <img src="/assets/opencv.png" alt="opencv" className="item-image" />
                OpenCV 
              </div>
              <div className="item-card">
                <img src="/assets/springboot.png" alt="springboot" className="item-image" />
                Spring Boot
              </div>
            </div>
            {/* </FadeIn>     */}
            </div>

            <div className="horizontal-divider-tech"></div>

            <div className="tech-row">
            <div className="subtitle">
            <FadeIn delay={`100ms`}>
              <h1>
              Tools & Infra
              </h1>
            </FadeIn>
            </div>
            
            {/* <FadeIn delay={`300ms`}> */}
            <div className="item-card-container">
              <div className="item-card">
                <img src="/assets/aws.png" alt="aws" className="item-image" />
                AWS
              </div>
              <div className="item-card">
                <img src="/assets/googlecloud.png" alt="googlecloud" className="item-image" />
                Google Cloud
              </div>
              <div className="item-card">
                <img src="/assets/sqlite.png" alt="sqlite" className="item-image" />
                SQLite
              </div>
              <div className="item-card">
                <img src="/assets/postgresql.png" alt="postgresql" className="item-image" />
                PostgreSQL
              </div>
              <div className="item-card">
                <img src="/assets/mongodb.svg" alt="mongodb" className="item-image" />
                MongoDB
              </div>
              <div className="item-card">
                <img src="/assets/linux.png" alt="linux" className="item-image" />
                Linux
              </div>
              <div className="item-card">
                <img src="/assets/git.png" alt="git" className="item-image" />
                Git
              </div>
              <div className="item-card">
                <img src="/assets/docker.png" alt="docker" className="item-image" />
                Docker
              </div>
              <div className="item-card">
                <img src="/assets/jira.png" alt="jira" className="item-image" />
                Jira
              </div>
            </div>
            {/* </FadeIn>    */}
            </div> 
          {/* </FadeIn> */}
        </div>
    );
  }
}

export default TechStack;
