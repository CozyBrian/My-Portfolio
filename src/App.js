import "./App.css";
import React from "react";
import NavBar from "./components/header/navbar";
import Carousel from "./components/codeCarousel/carousel";
import ProjectView from "./components/projects/projectsview";
import ContactMeView from "./components/contactMe/contact-me";
import SkillsView from "./components/my Skills/skills";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <section className="child" id="home">
        <NavBar />
        <Carousel />
      </section>
      <section className="child">
        <SkillsView />
      </section>
      <section className="child">
        <ProjectView />
      </section>
      <section className="child">
        <ContactMeView />
      </section>
      <Footer />
    </div>
  );
}

export default App;
