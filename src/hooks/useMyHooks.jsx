import { useState } from "react";
import Home from "../components/displaySectionComponents/HomeDisplay";

/*
------------------------------------------------------------------------------------
This hook keeps track of the element which is being displayed in the displaySection
------------------------------------------------------------------------------------
*/
const useDisplaySection = () => {
  const [display, setDisplay] = useState(<Home />);

  const updateDisplay = (newComponent) => {
    setDisplay(newComponent);
  };

  return [display, updateDisplay];
};

/*
---------------------------------------------------------------------------
This hook keeps track of the button that are shown in the "Button Section" 
--------------------------------------------------------------------------
*/
const useButtonSection = () => {
  const [buttonSection, setButtonSection] = useState();

  const updateButtonSection = (newComponent) => {
    setButtonSection(newComponent);
  };

  return [buttonSection, updateButtonSection];
};

/*
---------------------------------------------------------------------
This hook keeps track of the user type (ex: "Student" or "Teacher")
--------------------------------------------------------------------
*/
const useUserType = () => {
  const [userType, setUserType] = useState("Student");

  const setUserTypeToStudent = () => {
    setUserType("Student");
  };
  const setUserTypeToTeacher = () => {
    setUserType("Teacher");
  };

  return [userType, setUserTypeToStudent, setUserTypeToTeacher];
};

/*
.
.
.
.
-------------------------------------------------------------------------------------------------------------------------
*/
export { useDisplaySection, useButtonSection, useUserType };
