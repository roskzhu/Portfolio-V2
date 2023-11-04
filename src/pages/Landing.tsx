import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import About from './About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      {/* fix */}
      {/* <GradientCircle/>  */}
      <Home />
      <About/>
      <Experience />
      <Projects />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GradientCircle = styled.div`
  width: 310.98px;
  height: 316.616px;
  transform: rotate(-0.167deg);
  flex-shrink: 0;
  border-radius: 316.616px;
  border: 1px solid #000;
  background: #FFE977;
  filter: blur(225px);
  margin-top: 25%;
  margin-left: 75%;
  margin-right: 10%;
  z-index: -1;
  animation: pulsate 5s infinite; /* Add an animation with a name of 'pulsate', 2-second duration, and it will repeat infinitely */
  
  @keyframes pulsate {
    0% {
      transform: scale(0.95); /* Set the initial scale of the circle */
      filter: blur(225px); /* Apply the blur effect */
    }
    50% {
      transform: scale(1); /* Set the scale to 1 in the middle of the animation */
      filter: blur(150px); /* Decrease the blur effect */
      opacity: 0%;
    }
    100% {
      transform: scale(0.95); /* Return to the initial scale at the end of the animation */
      filter: blur(225px); /* Apply the blur effect again */
    }
  }
`;


export default Landing;
