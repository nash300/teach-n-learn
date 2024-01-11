import React from "react";
import "./index.css";
import Topbar from "./components/Topbar";
import { useDisplayPage } from "./hooks/useMyHooks";

const App = () => {
  const [displayPage, updatePage] = useDisplayPage();

  return (
    <div id="pageWrapper">
      <Topbar updatePage={updatePage} />
      <div id="main-container">{displayPage}</div>
    </div>
  );
};

export default App;
