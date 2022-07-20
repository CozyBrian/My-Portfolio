import React from "react";
import "./styles.css";

const ContactMeView = () => {
  return (
    <div className="contact-con py-5" id="contact">
      <div className="title-view">
        <h1 className="title">CONTACT ME</h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="clg-3 cmd-6 csm cont">
            <span className="icon">
              <i className="fa-solid fa-envelope" />
            </span>
            <p className="icon-label">EMAIL</p>
            <a href="mailto:kwabenanewton02@gmail.com" className="contact-info">
              Kwabenanewton02@gmail.com
            </a>
          </div>
          <div className="clg-3 cmd-6 csm cont">
            <span className="icon">
              <i className="fa-brands fa-github" />
            </span>
            <p className="icon-label">GITHUB</p>
            <a href="https://github.com/CozyBrian" className="contact-info">
              CozyBrian
            </a>
          </div>
          <div className="clg-3 cmd-6 csm cont">
            <span className="icon">
              <i className="fa-brands fa-linkedin" />
            </span>
            <p className="icon-label">LINKEDIN</p>
            <a
              href="https://www.linkedin.com/in/brian-newton-b6b8231b8/"
              className="contact-info"
            >
              Kwabena Newton
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeView;
