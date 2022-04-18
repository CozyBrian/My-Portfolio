import React from "react";
import "./styles.css";

const Footer = () => {
  const cpt = "© 2022 Copyright: ";
  return (
    <footer className="bg-dark text-center text-lg-start">
      <div className="text-center p-3 foot">
        {cpt}
        <a className="text-light foot" href="https://briannewton.tech/">
          BrianNewton.tech
        </a>
      </div>
    </footer>
  );
};

export default Footer;
