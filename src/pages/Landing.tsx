import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import About from './About';
import Experience from '../components/Experience';
import Projects from '../components/ProjectCard';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <Home />
      <About/>
      {/* <Experience /> */}
      <Projects />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Landing;
