import "./index.css";
import Topbar from "./components/Topbar";
import DisplayChanger from "./hooks/displayChanger";
import ButtonChanger from "./hooks/buttonChanger";

const App = () => {
  const { display, updateDisplay } = DisplayChanger();
  const { showButtons } = ButtonChanger();
  return (
    <div id="pageWrapper">
      <Topbar updateDisplay={updateDisplay}></Topbar>
      <div id="main-container">
        <span id="buttonSection">{showButtons}</span>
        <span id="displaySection">{display}</span>
      </div>
    </div>
  );
};

export default App;
