import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const NavBar = () => (
  <>
    <div className="topnav">
      <Link to="/" className="active">
        <HomeOutlined />
      </Link>
    </div>
  </>
);
export default NavBar;
