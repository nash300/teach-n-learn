import React from "react";
import "./index.css";

const App = () => {
  return (
    <div id="pageWrapper">
      <div id="topBar">
        <div id="logoBar">
          <img src="./src/images/logo.png" alt="the logo" id="logo" />
        </div>
        <nav id="navBar" className="navBarClass">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Data policy</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="main-container">
        <span id="main-container-left">
          {/*Everything appears within the area of this div*/}
        </span>

        <span id="main-container-right"></span>
      </div>
    </div>
  );
};
export default App;
