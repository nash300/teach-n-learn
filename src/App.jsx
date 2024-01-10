import React from "react";
import "./index.css";
import Topbar from "./components/Topbar";
import { useDisplaySection } from "./hooks/useMyHooks";

const App = () => {
  const [display, updateDisplay] = useDisplaySection();

  return (
    <div id="pageWrapper">
      <Topbar updateDisplayComponent={updateDisplay} />
      <div id="main-container">
        <span id="buttonSection">
          <span>
            <button>eee</button>
            <button>eee</button>
            <button>eee</button>
            <button>eee</button>
            <button>eee</button>
          </span>
        </span>
        <span id="displaySection">{display}</span>
      </div>
    </div>
  );
};

export default App;
