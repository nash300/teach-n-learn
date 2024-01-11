import { useState } from "react";
import Home from "./../pages/Home";

/*
---------------------------------------------------------------------
This hook keeps track of the user type (ex: "Student" or "Teacher")
--------------------------------------------------------------------
*/
const useUserType = () => {
  const [userType, setUserType] = useState("");

  const setUserTypeToStudent = () => {
    setUserType("Student");
  };
  const setUserTypeToTeacher = () => {
    setUserType("Teacher");
  };

  return [userType, setUserTypeToStudent, setUserTypeToTeacher];
};

/*
------------------------------------------------------------------------------------
This hook keeps track of the element which is being displayed in the displaySection
------------------------------------------------------------------------------------
*/
const useDisplayPage = () => {
  const [displayPage, setDisplayPage] = useState(Home);

  const updatePage = (newPage) => {
    setDisplayPage(newPage);
  };

  return [displayPage, updatePage];
};

/*------------------------------------------------------------------------------------------------*/

/*
.
.
.
.
-------------------------------------------------------------------------------------------------------------------------
*/
export { useDisplayPage, useUserType };
