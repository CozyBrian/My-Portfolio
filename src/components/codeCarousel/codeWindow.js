import React from "react";
import TypeAnimation from "react-type-animation";
import WindowNav from "./window-nav";
import "./styles.css";

const CodeWindow = () => {
  return (
    <div className="code-window-box">
      <WindowNav />
      <div className="code-text-box">
        <h1 className="code-text-header">
          <TypeAnimation
            className="code-text-header"
            cursor={true}
            sequence={["Hello, I'm Brian Newton", 10000, ""]}
            wrapper="h1"
            repeat={Infinity}
          />
        </h1>
        <p className="code-text-subheader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default CodeWindow;
