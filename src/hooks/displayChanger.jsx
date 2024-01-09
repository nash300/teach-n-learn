import About from "./../components/About";
import { useState } from "react";
import Home from "./../components/Home";
import DataPolicy from "./../components/DataPolicy";
import Features from "./../components/Features";

const DisplayChanger = () => {
  const [display, setDisplay] = useState(<Home />);

  const updateDisplay = (element) => {
    if (element === "Home") {
      setDisplay(<Home />);
    } else if (element === "Features") {
      setDisplay(<Features />);
    } else if (element === "DataPolicy") {
      setDisplay(<DataPolicy />);
    } else if (element === "About") {
      setDisplay(<About />);
    }
  };

  return { display, updateDisplay };
};

export default DisplayChanger;
