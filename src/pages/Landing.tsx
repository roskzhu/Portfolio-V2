import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import About from './About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Landing: React.FC = () => {
  return (
    <LandingContainer>      
      {/* pink blue yellow */}
      <GradientCircle style={{ opacity: '70%', marginTop: '-100px', marginLeft: '25%', background: '#FFC7C7', animationDelay: '3s' }} />
      <GradientCircle style={{ marginTop: '-100px', marginLeft: '-10%', background: '#BBC6FF', height: '15%', animationDelay: '1s' }} />
      <GradientCircle style={{ marginTop: '-300px', marginLeft: '50%', animationDelay: '0.5s' }} />
      <Home/>    
      <About/>
      <Experience />
      <Projects />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  padding-left: 12vw;
  padding-right: 12vw;
`;

const GradientCircle = styled.div`
  width: 30%;
  height: 20%;
  transform: rotate(-0.167deg);
  flex-shrink: 0;
  border-radius: 316.616px;
  background: #FFE977;
  filter: blur(150px);
  margin-top: 25%;
  margin-left: 0%;
  margin-right: 0%;
  position: absolute;
  z-index: -1;
  animation: rotate 12s linear infinite;

  background-size: 200% 200%;
  transform-origin: 60% 80% 0;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);  
      opacity: 40%    
    }
    25% {
      opacity: 30%;
    }
    50% {
      opacity: 20%;
    }
    75% {
      opacity: 30%;
    }
    100% {
      transform: rotate(360deg);
      opacity: 40%
    }
  }
`;



export default Landing;
