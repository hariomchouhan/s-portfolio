import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Competency from "./components/Competency";
import Interest from "./components/Interest";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
    <div className="w-11/12 mx-auto max-w-[1280px]">
      <HeroSection />
      <ProfessionalExperience />
      <Achievements />
      <Education />
      <Competency />
      <Interest />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
