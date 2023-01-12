import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Error from "./Error";
import StudentHome from "./StudentHome";
import TeacherHome from "./TeacherHome";

const Nav = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="student" element={<StudentHome />} />
          <Route path="teacher" element={<TeacherHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Nav;
