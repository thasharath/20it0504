import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
     <>
        <h1 style={{fontSize:"77px",
        backgroundColor:"rgba(168, 104, 104, 0.351)",
        borderRadius:"15px",
        padding:"20px"}}>Error!! Page Not Found</h1><br></br>

        <Link
            to="/"
                    // className="nav-link btn btn-secondary text-light"
        >
            <h3 style={{fontSize:"55px",
            textAlign:"center",
            color:"black",
            backgroundColor:"rgba(255, 255, 255, 0.351)",
            borderRadius:"15px",
            padding:"20px"}}>Return to Home</h3>
        </Link>
    </>)


export default Error;