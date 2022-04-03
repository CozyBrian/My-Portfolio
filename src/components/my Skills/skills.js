import React from "react";
import "./styles.css";

const SkillsView = () => {
  return (
    <div className="skills-view d-flex justify-content-center" id="skills">
      <div className="container-lg skill-con ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-12 py-3">
            <div className="skill-info">
              <span className="icon">
                <i class="fa-regular fa-window-maximize" />
              </span>
              <div className="py-3">
                <h4 className="skill-title-text">Front-end Developer</h4>
                <p className="skill-desc-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Languages I speak</h5>
                <p className="skill-desc-text">sdfsdf,dsfsdf,sdfsdf,sdfsdf</p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Dev Tools</h5>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10 py-3">
            <div className="skill-info">
              <span className="icon">
                <i class="fa-solid fa-server" />
              </span>
              <div className="py-3">
                <h4 className="skill-title-text">Back-end Developer</h4>
                <p className="skill-desc-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Languages I speak</h5>
                <p className="skill-desc-text">sdfsdf,dsfsdf,sdfsdf,sdfsdf</p>
              </div>
              <div className="py-3">
                <h5 className="skill-subtitle-text">Dev Tools</h5>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
                <p className="skill-desc-text">asdasd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
