import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import About from './About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <GradientCircle style={{ marginTop: '95px', background: '#BBC6FF', width: '20%', animationDelay: '1s' }} />
      <GradientCircle style={{ marginTop: '110px', marginLeft: '250px', background: '#FFBBF0', animationDelay: '3s' }} />
      <GradientCircle style={{ marginTop: '-30px', marginLeft: '700px', animationDelay: '0.5s' }} />
      <Home/>    
      <GradientCircle style={{ width: '10%', height: '10%', marginTop: '600px', marginLeft: '790px', background: '#FFB69E', animationDelay: '0.25s' }}/>        
      <About/>
      <Experience />
      <Projects />
      <GradientCircle style={{ width: '40%', height: '5%', marginTop: '2300px', marginLeft: '25%', background: '#9EB4FF',  filter: 'blur(300px)', animationDelay: '1.25s' }}/>        
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
  filter: blur(200px);
  margin-top: 25%;
  margin-left: 0%;
  margin-right: 0%;
  position: absolute;
  z-index: -1;
  animation: rotate 6s linear infinite;

  background-size: 200% 200%;
  transform-origin: 60% 80% 0;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulsate {
    0% {
      transform: scale(0.95); /* Set the initial scale of the circle */
      filter: blur(225px); /* Apply the blur effect */
    }
    50% {
      transform: scale(1); /* Set the scale to 1 in the middle of the animation */
      filter: blur(150px); /* Decrease the blur effect */
      opacity: 100%;
    }
    100% {
      transform: scale(0.95); /* Return to the initial scale at the end of the animation */
      filter: blur(225px); /* Apply the blur effect again */
    }
  }
`;



export default Landing;
