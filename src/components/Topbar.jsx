import React from "react";
import "../styles/Topbar.css";

import Home from "./displaySectionComponents/HomeDisplay";
import Features from "./displaySectionComponents/FeaturesDisplay";
import DataPolicy from "./displaySectionComponents/DataPolicyDisplay";
import About from "./displaySectionComponents/AboutDisplay";

const Topbar = ({ updateDisplayComponent }) => {
  return (
    <div id="topBar">
      <div id="logoBar">
        <img src="./src/images/logo.png" alt="the logo" id="logo" />
      </div>
      <nav id="navBar" className="navBarClass">
        <ul>
          <li>
            <a href="#" onClick={() => updateDisplayComponent(<Home />)}>
              Home
            </a>
          </li>

          <li>
            <a href="#" onClick={() => updateDisplayComponent(<Features />)}>
              Features
            </a>
          </li>
          <li>
            <a href="#" onClick={() => updateDisplayComponent(<DataPolicy />)}>
              Data policy
            </a>
          </li>
          <li>
            <a href="#" onClick={() => updateDisplayComponent(<About />)}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
