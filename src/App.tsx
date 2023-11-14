import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay (e.g., 3 seconds) before redirecting
        const delay = setTimeout(() => {
            setLoading(false);
        }, 5000);

        // Clear the timeout to avoid issues if the user navigates before the delay is complete
        return () => clearTimeout(delay);
    }, []);

  const handleSave = (values: any) => {
    console.log({ values });
  };

  return (
    <BrowserRouter>
      {/* {isLoading ? (
        <Loading />
      ) : (
        <> */}
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <Footer onSave={handleSave} />
        {/* </>
      )} */}
    </BrowserRouter>
  );
}

export default App;
