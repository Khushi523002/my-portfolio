import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import MoreAboutMe from "./components/MoreAboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CoCurricular from "./components/CoCurricular";
import Courses from "./components/Courses";
import ContactMe from "./components/ContactMe";
import SocialLinks from "./components/SocialLinks";
import ResumeDownload from "./components/ResumeDownload";
import ScrollIndicator from "./components/ScrollIndicator";
import "./App.css";



// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollIndicator />
      <Introduction />
      <MoreAboutMe />
      <Education />
      <Projects />
      <Skills />
      <CoCurricular />
      <Courses />
      <ContactMe />
      <SocialLinks />
      <ResumeDownload />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
