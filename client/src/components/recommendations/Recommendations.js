import React, { Component } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import FolderList from "../layout/Timeline/lists";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

class RecommendedPersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    console.log("working");

    axios.get("/api/recommendations/").then(res => {
      console.log("Working-------", res);
      const persons = res.data;
      this.setState({ persons: persons });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <div>
          <h1
            style={{
              fontFamily: "sans",
              marginTop: "2rem",

              textDecoration: "underline"
            }}
          >
            Recommendations
          </h1>
          <div className="row">
            <div className="col-lg-2">
              <div className="position-fixed">
                <div
                  style={{
                    width: "14%",
                    marginTop: "3rem",
                    position: "fixed",
                    backgroundColor: "transparent"
                  }}
                >
                  <FolderList />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div>
                {this.state.persons.map((person, key) => (
                  <React.Fragment>
                    <div
                      className="card"
                      key={key}
                      style={{
                        margin: "3rem",
                        boxShadow: "3px 3px 3px #fff",
                        width: "40%",
                        float: "left",
                        backgroundColor: "#e9ebee"
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://source.unsplash.com/random"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={person.name}
                          secondary={
                            <React.Fragment>
                              <br />
                              <button
                                className="btn btn-sm btn-info"
                                style={{ alignContent: "center" }}
                              >
                                Add Friend
                              </button>{" "}
                            </React.Fragment>
                          }
                        />
                      </ListItem>

                      {/* {person.avator} */}
                    </div>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecommendedPersonList;
