import React from "react";
import "./styles.css";

const Footer = () => {
  const cpt = "© 2022 Copyright: ";
  return (
    <footer class="bg-dark text-center text-lg-start">
      <div class="text-center p-3 foot">
        {cpt}
        <a class="text-light foot" href="https://briannewton.tech/">
          BrianNewton.tech
        </a>
      </div>
    </footer>
  );
};

export default Footer;
