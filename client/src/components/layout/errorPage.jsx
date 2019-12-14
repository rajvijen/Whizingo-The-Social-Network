import React from "react";
import logo from "./404.jpg";
import NavBar1 from "./Timeline/nav";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Navbar from "./Navbar";
const ErrorPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <br />
      <br />
      <br />
      <div style={{ marginTop: "1%", marginBottom: "2rem" }}>
        <img src={logo} />
      </div>
      <h1
        style={{ fontFamily: "Agency FB", fontSize: "80px", color: "#6d6e71" }}
      >
        Whoops !!!
      </h1>
      <h3
        style={{ fontFamily: "Agency FB", fontSize: "30px", color: "#6d6e71" }}
      >
        Looks like you are lost. Lets go back.
      </h3>
      <Link to="/success">
        <button className="btn btn-secondary">
          <ArrowBackIcon />
          Go Back
        </button>
      </Link>
    </React.Fragment>
  );
};

export default ErrorPage;
