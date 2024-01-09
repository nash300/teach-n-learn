import About from "../components/displaySection/About";
import { useState } from "react";
import Home from "../components/displaySection/Home";
import DataPolicy from "../components/displaySection/DataPolicy";
import Features from "../components/displaySection/Features";

const displayChanger = () => {
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

export default displayChanger;
