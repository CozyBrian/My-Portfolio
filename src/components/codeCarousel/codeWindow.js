import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import WindowNav from "./window-nav";
import "./styles.css";

const CodeWindow = () => {
  return (
    <div className="code-window-box">
      <WindowNav />
      <div className="code-text-box">
        <TypeWriterEffect
          textStyle={{ fontSize: "80px" }}
          startDelay={100}
          cursorColor="white"
          text="Hello, I'm Brian Newton"
          typeSpeed={100}
        />
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
