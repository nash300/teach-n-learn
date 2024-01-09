import { useState } from "react";
import HomeButtons from "../components/buttonSection/HomeButtons";

const ButtonChanger = () => {
  const [showButtons, setShowButtons] = useState(HomeButtons);

  return { showButtons, setShowButtons };
};

export default ButtonChanger;
