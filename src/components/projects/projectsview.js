import React, { useContext, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { ApiContext } from "../../services/api.context";
import ProjectCard from "./project-card";
import "./styles.css";

const ProjectView = () => {
  const { projects, isLoaded } = useContext(ApiContext);

  useEffect(() => {
    const wtabp = document.getElementById(
      "uncontrolled-tab-example-tabpane-web"
    );

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

  const item = {
    disc: "MealsToGo is a restauant and food look-up app.You can find restaurants and check their menu and opening hours. Uses and api to fetch restaurants.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/projects-screenshots%2Fmealstogo1.PNG?alt=media&token=ce25fe08-06da-40bb-906a-f1f2e9534dbe",
    title: "MealsToGo",
    link: "https://github.com/CozyBrian/MealsToGo",
  };

  return (
    <div className="row proj-box-con" id="projects">
      <h1 className="heading">PROJECTS</h1>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="mobile" title="Mobile">
          {isLoaded ? (
            projects.map((item, i) => (
              <ProjectCard
                key={i}
                image={item.image}
                title={item.title}
                disc={item.disc}
                link={item.link}
              />
            ))
          ) : (
            <h3>Error loading Projects.</h3>
          )}
        </Tab>
        <Tab eventKey="web" title="Web">
          <ProjectCard
            image={item.image}
            title={item.title}
            disc={item.disc}
            link={item.link}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProjectView;
