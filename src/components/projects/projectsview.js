import React from "react";
import ProjectCard from "./project-card";
import "./styles.css";

const ProjectView = () => {
  const image = require("./IMG_0471.PNG");

  const item = {
    title: "Screenshot",
    disc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: require("./IMG_0471.PNG"),
  };

  return (
    <div className="row proj-box-con" id="projects">
      <h1 className="heading">PROJECTS</h1>
      <ProjectCard image={item.image} title={item.title} disc={item.disc} />
      <ProjectCard image={item.image} title={item.title} disc={item.disc} />
      <ProjectCard image={item.image} title={item.title} disc={item.disc} />
    </div>
  );
};

export default ProjectView;
