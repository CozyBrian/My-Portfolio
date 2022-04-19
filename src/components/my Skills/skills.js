import React from "react";
import "./styles.css";

const SkillsView = () => {
  return (
    <div className="skills-view d-flex justify-content-center" id="skills">
      <div className="container-lg skill-con ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10 py-3 mx-4">
            <div className="skill-info">
              <span className="icon">
                <i className="fa-regular fa-window-maximize" />
              </span>
              <div className="py-3">
                <h4 className="skill-title-text">Front-end Developer</h4>
                <p className="skill-desc-text">
                  The technologies I use to make elegant simple user interfaces
                  and user experiences
                </p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Languages I speak</h5>
                <p className="skill-desc-text">
                  HTML, Scss, javascript, typescript
                </p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Dev Tools</h5>
                <p className="skill-desc-text">React.js</p>
                <p className="skill-desc-text">Next.js</p>
                <p className="skill-desc-text">React Native</p>
                <p className="skill-desc-text">Bootstrap</p>
                <p className="skill-desc-text">Adobe Illustrator</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10 py-3 mx-4">
            <div className="skill-info">
              <span className="icon">
                <i className="fa-solid fa-server" />
              </span>
              <div className="py-3">
                <h4 className="skill-title-text">Back-end Developer</h4>
                <p className="skill-desc-text">
                  Technologies I use to bring functionality to these beautiful
                  applications.
                </p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Languages I speak</h5>
                <p className="skill-desc-text">python, javascript, java, c++</p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Dev Tools</h5>
                <p className="skill-desc-text">Node.js</p>
                <p className="skill-desc-text">Firebase</p>
                <p className="skill-desc-text">Express.js</p>
                <p className="skill-desc-text">mongoDB</p>
                <p className="skill-desc-text">git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
