import React from "react";
import "../styles/Topbar.css";

const Topbar = ({ updateDisplay }) => {
  return (
    <div id="topBar">
      <div id="logoBar">
        <img src="./src/images/logo.png" alt="the logo" id="logo" />
      </div>
      <nav id="navBar" className="navBarClass">
        <ul>
          <li>
            <a href="#" onClick={() => updateDisplay("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => updateDisplay("Features")}>
              Features
            </a>
          </li>
          <li>
            <a href="#" onClick={() => updateDisplay("DataPolicy")}>
              Data policy
            </a>
          </li>
          <li>
            <a href="#" onClick={() => updateDisplay("About")}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
