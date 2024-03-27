import "./App.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
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
      <MuLoader />
      </div>
       :
          <div>
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
        </div>
            }
        </div>
    );
        
        }
export default App;
