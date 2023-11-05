import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import About from './About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <GradientCircle style={{ marginTop: '3%', background: '#BBC6FF'}}/>
      <GradientCircle style={{ marginTop: '7%',  marginLeft: '20%', background: '#FFBBF0'}}/>
      <GradientCircle style={{ marginTop: '-6%',  marginLeft: '45%'}}/>      
      <Home/>    
      <GradientCircle style={{ width: '10%', height: '10%', marginTop: '40%', marginLeft: '790px', background: '#FFB69E'}}/>        
      <About/>
      <Experience />
      <Projects />
      <GradientCircle style={{ width: '40%', height: '5%', marginTop: '190%', marginLeft: '25%', background: '#9EB4FF',  filter: 'blur(300px)'}}/>        
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

`;



export default Landing;
