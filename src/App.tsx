import "./App.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Statistics from "./Components/Statistics/Statistics";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
import MuLoader from "./Components/Home/Loader";
function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading (true);
      setTimeout(() => {
        setLoading(false);
      },4000)
  
    }, []);
  
    return (
    <div>
        {
        loading ?
        <div style={{minHeight:"100vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <MuLoader/>
        </div>
        :      
        <>
        <Navbar />
        <Home />
        <About />
        <Events />
        <Gallery />
        <Statistics />
        <ExploreLC />
        <Team />
        <Connect />
        <Footer />
        </>     
        }
        </div>
    );
}

export default App;
