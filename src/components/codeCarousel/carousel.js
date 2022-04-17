import React from "react";
import CodeWindow from "./codeWindow";
import "./styles.css";

const Carousel = () => {
  return (
    <div className="carousel row" id="home">
      <div className="col-lg-8 ">
        <CodeWindow />
      </div>
      <div className="image-view-side col-md">
        <div className="image-view-box">
          <div className="imagee"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
