// import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
// import Loading from "./pages/Loading";
import Footer from './components/Footer';
import './App.css';

function App() {
  // const [isLoading, setLoading] = useState(true);

  //   useEffect(() => {
  //       // Simulate a delay (e.g., 3 seconds) before redirecting
  //       const delay = setTimeout(() => {
  //           setLoading(false);
  //       }, 5000);

  //       // Clear the timeout to avoid issues if the user navigates before the delay is complete
  //       return () => clearTimeout(delay);
  //   }, []);


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
          <Footer />
        {/* </>
      )} */}
    </BrowserRouter>
  );
}

export default App;
