import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const NavBar = () => (
  <>
    <div className="topnav">
      <Link to="/" className="active">
        <HomeOutlined />
      </Link>
      <Link to="/login" className="text">
        Login
      </Link>
      <Link to="/register" className="text">
        Register
      </Link>
    </div>
  </>
);
export default NavBar;
