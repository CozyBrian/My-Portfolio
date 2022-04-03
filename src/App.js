import "./App.css";
import NavBar from "./components/header/navbar";
import Carousel from "./components/codeCarousel/carousel";
import ProjectView from "./components/projects/projectsview";
import ContactMeView from "./components/contactMe/contact-me";
import SkillsView from "./components/my Skills/skills";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <SkillsView />
      <ProjectView />
      <ContactMeView />
      <Footer />
    </div>
  );
}

export default App;
