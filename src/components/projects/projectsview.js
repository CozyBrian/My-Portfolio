import React, { useContext } from "react";
import { ApiContext } from "../../services/api.context";
import ProjectCard from "./project-card";
import "./styles.css";

const ProjectView = () => {
  const { isLoaded, projects } = useContext(ApiContext);

  return (
    <div className="row proj-box-con" id="projects">
      <h1 className="heading">PROJECTS</h1>
      {projects.map((item) => (
        <ProjectCard image={item.image} title={item.title} disc={item.disc} />
      ))}
    </div>
  );
};

export default ProjectView;
