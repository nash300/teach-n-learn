import "./index.css";
import Topbar from "./components/Topbar";
import DisplayChanger from "./hooks/displayChanger";

const App = () => {
  const { display, updateDisplay } = DisplayChanger();
  return (
    <div id="pageWrapper">
      <Topbar updateDisplay={updateDisplay}></Topbar>
      <div id="main-container">
        <span id="buttonSection"></span>
        <span id="displaySection">{display}</span>
      </div>
    </div>
  );
};

export default App;
