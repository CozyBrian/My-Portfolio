import "./App.css";
import React, { useRef } from "react";
import NavBar from "./components/header/navbar";
import Carousel from "./components/codeCarousel/carousel";
import ProjectView from "./components/projects/projectsview";
import ContactMeView from "./components/contactMe/contact-me";
import SkillsView from "./components/my Skills/skills";
import Footer from "./components/footer/footer";

function App() {
  const homeref = useRef();
  const skillref = useRef();
  const projectref = useRef();
  const contactref = useRef();

  const pagerefs = [homeref, skillref, projectref, contactref];

  return (
    <div className="App">
      <section ref={homeref} className="child" id="home">
        <NavBar pagerefs={pagerefs} />
        <Carousel />
      </section>
      <section ref={skillref} className="child">
        <SkillsView />
      </section>
      <section ref={projectref} className="child">
        <ProjectView />
      </section>
      <section ref={contactref} className="child">
        <ContactMeView />
      </section>
      <Footer />
    </div>
  );
}

export default App;
