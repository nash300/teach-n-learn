import "./App.css";
import HomePage from "./components/HomePage";
import NavigationMenu from "./components/NavigationMenu";

const App = () => {
  return (
    <div>
      <NavigationMenu />
      <div id="main-wrapper-div" className="mask">
        {/*Everything appears within the area of this div*/}

        <HomePage />
      </div>
    </div>
  );
};

export default App;
