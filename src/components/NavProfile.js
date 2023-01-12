import React from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./Register.css";

const NavProfile = () => (
  <>
    <div className="topnav">
      <Link className="active">
        <MenuOutlined />
      </Link>
      <Link className="text">Profile</Link>
      <Link className="text">Settings</Link>
      <Link to="/" className="logout">LogOut</Link>
    </div>
  </>
);
export default NavProfile;
