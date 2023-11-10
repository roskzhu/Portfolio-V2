import React from 'react';
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

export default App;
