import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import About from './About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <GradientCircle style={{ marginTop: '3%', background: '#BBC6FF', animationDelay: '1s' }} />
      <GradientCircle style={{ marginTop: '7%', marginLeft: '20%', background: '#FFBBF0', animationDelay: '0.75s' }} />
      <GradientCircle style={{ marginTop: '-6%', marginLeft: '45%', animationDelay: '0.5s' }} />
      <Home/>    
      <GradientCircle style={{ width: '10%', height: '10%', marginTop: '40%', marginLeft: '790px', background: '#FFB69E', animationDelay: '0.25s' }}/>        
      <About/>
      <Experience />
      <Projects />
      <GradientCircle style={{ width: '40%', height: '5%', marginTop: '190%', marginLeft: '25%', background: '#9EB4FF',  filter: 'blur(300px)', animationDelay: '1.25s' }}/>        
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const GradientCircle = styled.div`
  width: 15%;
  height: 15%;
  transform: rotate(-0.167deg);
  flex-shrink: 0;
  border-radius: 316.616px;
  border: 1px solid #000;
  background: #FFE977;
  filter: blur(225px);
  margin-top: 25%;
  margin-left: 0%;
  margin-right: 0%;
  position: absolute;
  z-index: -1;
  animation: pulsate 8s infinite; /* Add an animation with a name of 'pulsate', 2-second duration, and it will repeat infinitely */
  
  @keyframes pulsate {
    0% {
      transform: scale(0.95); /* Set the initial scale of the circle */
      filter: blur(225px); /* Apply the blur effect */
    }
    50% {
      transform: scale(1); /* Set the scale to 1 in the middle of the animation */
      filter: blur(150px); /* Decrease the blur effect */
      opacity: 80%;
    }
    100% {
      transform: scale(0.95); /* Return to the initial scale at the end of the animation */
      filter: blur(225px); /* Apply the blur effect again */
    }
  }
`;



export default Landing;
