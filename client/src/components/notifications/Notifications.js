import React, { Component } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import FolderList from "../layout/Timeline/lists";
// import Spinner from "../common/Spinner";

class Notifications extends Component {
  state = {
    notifications: []
  };

  componentDidMount() {
    console.log("Getting notifications");

    axios.get(`/api/notification/all`).then(res => {
      console.log("Working", res.data);
      const notifications = res.data;
      this.setState({ notifications: notifications });
    });
  }

  render() {
    const count = "";

    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="row" style={{ backgroundColor: "#e9ebee" }}>
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
          <div className="col-5">
            <div>
              {this.state.notifications.map((notification, key) => (
                <React.Fragment>
                  <div
                    className="card"
                    key={key}
                    style={{ boxShadow: "3px 3px 3px #fff" }}
                  >
                    <a href={`/post/${notification.post}`}>
                      {notification.type_of_notification === "like" ? (
                        <p style={{ fontFamily: "sans", fontSize: "30px" }}>
                          {notification.who_did_name} liked your post
                        </p>
                      ) : (
                        count
                      )}
                    </a>

                    <a href={`/post/${notification.post}`}>
                      {notification.type_of_notification === "comment" ? (
                        <p style={{ fontFamily: "sans", fontSize: "30px" }}>
                          {notification.who_did_name} commented your post
                        </p>
                      ) : (
                        count
                      )}
                    </a>
                  </div>
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
      // <h1>hello</h1>
    );
  }
}

export default Notifications;
