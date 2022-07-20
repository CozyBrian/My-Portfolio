import React, { useContext, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { ApiContext } from "../../services/api.context";
import ProjectCard from "./project-card";
import "./styles.css";

const ProjectView = () => {
  const { projects, isLoaded } = useContext(ApiContext);

  const mobileProj = projects.filter((proj) => {
    return proj.type.includes("mobile");
  });

  const webProj = projects.filter((proj) => {
    return proj.type.includes("web");
  });

  useEffect(() => {
    const wtab = document.getElementById("uncontrolled-tab-example-tab-web");

    wtab.addEventListener("click", () => {
      mtabp.classList.remove("active");
      mtabp.classList.remove("show");
      mtab.classList.remove("active");
    });

    const mtab = document.getElementById("uncontrolled-tab-example-tab-mobile");
    mtab.classList.add("active");

    const mtabp = document.getElementById(
      "uncontrolled-tab-example-tabpane-mobile"
    );
    mtabp.classList.add("active");
    mtabp.classList.add("show");
  }, []);

  return (
    <div className="row proj-box-con" id="projects">
      <h1 className="heading">PROJECTS</h1>
      <div className="projectsContainer">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="mobile" title="Mobile">
            {isLoaded ? (
              mobileProj.map((item, i) => (
                <ProjectCard
                  key={i}
                  image={item.image}
                  title={item.title}
                  disc={item.disc}
                  link={item.link}
                  type={item.type}
                />
              ))
            ) : (
              <h3>Looks Like we had a problem. Try Refreshing the page</h3>
            )}
          </Tab>
          <Tab eventKey="web" title="Web">
            {isLoaded ? (
              webProj.map((item, i) => (
                <ProjectCard
                  key={i}
                  image={item.image}
                  title={item.title}
                  disc={item.disc}
                  link={item.link}
                  type={item.type}
                />
              ))
            ) : (
              <h3>Looks Like we had a problem. Try Refreshing the page</h3>
            )}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectView;
