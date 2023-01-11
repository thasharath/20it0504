import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Error = () => (
  <>
    <NavBar></NavBar>
    <div className="errorPage">
      <h1
        className="text"
        style={{
          fontSize: "77px",
          color: "white",
        }}
      >
        Error!! Page Not Found
      </h1>
      <br></br>

      <Link style={{ textDecoration: "none" }} to="/">
        <h3
          className="text"
          style={{
            fontSize: "55px",
            textAlign: "center",
            color: "white",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          Return to Home
        </h3>
      </Link>
    </div>
  </>
);

export default Error;
