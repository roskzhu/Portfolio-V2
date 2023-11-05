import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
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
    <Footer onSave={handleSave} />
    {/* <Socials/> */}
    </BrowserRouter>
  );
}

export default App;
