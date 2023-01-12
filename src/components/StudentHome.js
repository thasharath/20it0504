import React from "react";
import NavProfile from "./NavProfile";
import NavBar from "./NavBar";
// import NavBarHome from "./NavBarHome";

const StudentHome = () => (
  <>
    {/* <NavBar></NavBar> */}
    <NavProfile></NavProfile>
    <h1 className="text" style={{ fontSize: "52px", color: "white" }}>
      Student Home
    </h1>
  </>
);
export default StudentHome;
