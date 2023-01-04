import React from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NaviContent from "./NaviContent";

const Navigation = () => {
   <>
   <BrowserRouter>
      header
        <Routes>
          header
          <Route path="/" element={<NaviContent />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          
          
         
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
}

export default Navigation;