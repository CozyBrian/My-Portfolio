import "./App.css";
import NavBar from "./components/header/navbar";
import Carousel from "./components/codeCarousel/carousel";
import ProjectView from "./components/projects/projectsview";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ProjectView />
    </div>
  );
}

export default App;
