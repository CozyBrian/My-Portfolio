import React from "react";
import CodeWindow from "./codeWindow";
import "./styles.css";

const Carousel = () => {
  const profile =
    "https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/profilepic.jpg?alt=media&token=bf734f1e-96de-4610-ab49-7d64a15ed653";

  return (
    <div className="carousel row" id="home">
      <div className="col-lg-8 ">
        <CodeWindow />
      </div>
      <div className="image-view-side col-md">
        <div className="image-view-box">
          <img
            src={profile}
            className="profile-image"
            alt="a handsome face"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
