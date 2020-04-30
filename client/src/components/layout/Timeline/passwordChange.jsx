import React, { Component } from "react";
import NavBar1 from "./nav";

import CenteredTabs from "./tabs";
import FolderList1 from "./editProfileSideBar";
import EditForm1 from "./passwordChangeForm";
import Navbar from "../Navbar";

class ChangePassword extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-2">
            {" "}
            <div
              style={{
                width: "14%",
                marginTop: "3rem",
                marginLeft: "1rem",
                position: "fixed",
                backgroundColor: "transparent"
              }}
            >
              <FolderList1 />
            </div>
          </div>

          <div className="col-8">
            <img
              src="https://source.unsplash.com/collection/190727/470x300"
              alt=""
              style={{
                height: "14rem",
                width: "14rem",
                color: "white",
                marginTop: "22rem",
                marginLeft: "2rem",
                position: "absolute",
                left: 0,
                borderRadius: "50%",
                border: "8px solid #fff"
              }}
            />
            <img
              src="https://source.unsplash.com/random"
              alt=".."
              style={{
                zIndex: "-1",
                left: 0,
                height: "500px",
                width: "100%",
                position: "absolute",
                borderRadius: "40px"
              }}
            />

            <div style={{ marginTop: "25rem", color: "transparent " }}>
              <CenteredTabs />
            </div>

            <h1
              style={{
                left: 0,
                textAlign: "left",
                marginTop: "9rem",
                marginLeft: "1rem"
              }}
            >
              Wilson Patro
            </h1>
            <div>
              <h2
                style={{
                  textDecorationLine: "underline",
                  fontFamily: "roboto",
                  marginBottom: "2rem",
                  color: "#626262"
                }}
              >
                Change Password
              </h2>
            </div>
            <div>
              <EditForm1 />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChangePassword;
