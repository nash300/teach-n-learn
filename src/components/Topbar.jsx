import React from "react";
import "../styles/Topbar.css";
import Home from "../pages/Home";
import About from "./../pages/About";
import DataPolicy from "./../pages/DataPolicy";
import Features from "./../pages/Features";

const Topbar = ({ updatePage }) => {
  return (
    <div id="topBar">
      <div id="logoBar">
        <img src="./src/images/logo.png" alt="the logo" id="logo" />
      </div>
      <nav id="navBar" className="navBarClass">
        <ul>
          <li>
            <a href="#" onClick={() => updatePage(Home)}>
              Home
            </a>
          </li>

          <li>
            <a href="#" onClick={() => updatePage(Features)}>
              Features
            </a>
          </li>
          <li>
            <a href="#" onClick={() => updatePage(DataPolicy)}>
              Data policy
            </a>
          </li>
          <li>
            <a href="#" onClick={() => updatePage(About)}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
