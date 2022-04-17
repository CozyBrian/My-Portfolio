import React from "react";
import WindowNav from "./window-nav";
import "./styles.css";

const CodeWindow = () => {
  return (
    <div className="code-window-box">
      <WindowNav />
      <div className="code-text-box">
        <h1 className="code-text-header">Hello, I'm Brian Newton</h1>
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
