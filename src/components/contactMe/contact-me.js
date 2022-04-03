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
            <p className="contact-info">Email@email.com</p>
          </div>
          <div className="clg-3 cmd-6 csm cont">
            <span className="icon">
              <i class="fa-solid fa-mobile-button" />
            </span>
            <p className="icon-label">PHONE</p>
            <p className="contact-info">+233 23 345 5325</p>
          </div>
          <div className="clg-3 cmd-6 csm cont">
            <span className="icon">
              <i class="fa-brands fa-github" />
            </span>
            <p className="icon-label">GITHUB</p>
            <p className="contact-info">CozyWho</p>
          </div>
          <div className="clg-3 cmd-6 csm cont">
            <span className="icon">
              <i class="fa-brands fa-linkedin" />
            </span>
            <p className="icon-label">LINKEDIN</p>
            <p className="contact-info">Kwabena Newton</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeView;
