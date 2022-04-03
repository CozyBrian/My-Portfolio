import React from "react";
import "./styles.css";

const Carousel = () => {
  return (
    <div className="carousel row" id="home">
      <div className="code-text-container col-lg-7 ">
        <p className="caro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="image-view-side col-md"></div>
    </div>
  );
};

export default Carousel;
