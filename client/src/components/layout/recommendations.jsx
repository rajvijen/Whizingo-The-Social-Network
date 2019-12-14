import React, { Component } from "react";
import NavBar1 from "./Timeline/nav";
import FolderList1 from "./Timeline/editProfileSideBar";
import RecommendedPersonList from "../recommendations/Recommendations";
const Recommendations = () => {
  return (
    <React.Fragment>
      <NavBar1 />
      <div className="row">
        <div className="col-lg-2">
          <div className="position-fixed">
            <div
              style={{
                width: "14%",
                marginTop: "10rem",

                position: "fixed",
                backgroundColor: "transparent"
              }}
            >
              <FolderList1 />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div style={{ marginTop: "10rem" }}>
            <RecommendedPersonList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recommendations;
