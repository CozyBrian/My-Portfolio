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
          textStyle={{ fontSize: "70px" }}
          startDelay={100}
          cursorColor="white"
          text="Hello, I'm Brian Newton"
          typeSpeed={100}
        />
        <p className="code-text-subheader">
          I’m a Full-stack software developer based in Ghana. I love to build
          mobile and web applications that improve the lives of people all
          around the world and I’m very passionate about connecting the dots
          between ideas and reality with code.
        </p>
      </div>
    </div>
  );
};

export default CodeWindow;
