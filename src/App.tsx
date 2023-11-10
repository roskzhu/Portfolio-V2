import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const handleSave = (values: any) => {
    console.log({ values });
  };

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
      {/* <GradientCircle style={{ marginTop: '-100px', marginLeft: '-10%', background: '#BBC6FF', height: '15%', animationDelay: '1s' }} />
      <GradientCircle style={{ marginTop: '-100px', marginLeft: '25%', background: '#FFBBF0', animationDelay: '3s' }} />
      <GradientCircle style={{ marginTop: '-300px', marginLeft: '50%', animationDelay: '0.5s' }} /> */}
    <Footer onSave={handleSave} />
    </BrowserRouter>
  );
}

const GradientCircle = styled.div`
  width: 30%;
  height: 20%;
  transform: rotate(-0.167deg);
  flex-shrink: 0;
  border-radius: 316.616px;
  background: #FFE977;
  filter: blur(300px);
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
      opacity: 110%    
    }
    25% {
      opacity: 90%;
    }
    50% {
      opacity: 40%;
    }
    75% {
      opacity: 90%;
    }
    100% {
      transform: rotate(360deg);
      opacity: 120%
    }
  }
`;

export default App;
