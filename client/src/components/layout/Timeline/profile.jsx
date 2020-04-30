import React, { Component } from "react";

import CenteredTabs from "./tabs";
import AddAPhotoTwoToneIcon from "@material-ui/icons/AddAPhotoTwoTone";
import BasicTextField from "./../../common/textField";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { Timeline, Event } from "react-timeline-scribble";
import VirtualizedList from "./../../common/friendList";
import NavBar1 from "./nav";
import FolderList from "./lists";
import Navbar from "../Navbar";
import Post from "../../post/Post";
import Posts from "./../../posts/Posts";

const style = {
  height: "585px",
  width: "90%",
  border: "1px solid white",
  margin: "2rem",
  overflow: "auto",
  borderRadius: "5%"
  // padding: "4rem"
};
const style2 = {
  height: "100%",
  width: "100%",
  border: "1px solid white",
  overflow: "auto",
  paddingTop: "10px",
  position: "fixed"
};
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  // state = { items: Array.from({ length: 20 }) };
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="row" style={{ backgroundColor: "#e9ebee" }}>
          <div className="col-2">
            {" "}
            <div
              style={{
                width: "14%",
                marginTop: "3rem",

                position: "fixed"
              }}
            >
              <FolderList />
            </div>
          </div>

          <div
            className="col-8"
            style={{
              borderRadius: "40px",

              zIndex: "+2"
            }}
          >
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
                position: "absolute"
              }}
            />

            <div style={{ marginTop: "25rem", color: "transparent " }}>
              <CenteredTabs />
            </div>

            <div
              style={{
                marginTop: "5rem",
                marginLeft: "40rem"
              }}
            >
              <button
                className="btn btn-danger"
                style={{
                  MarginTop: "10rem",
                  marginRight: "1rem"
                }}
              >
                Add Friend
              </button>
              <button className="btn btn-danger">Follow</button>
            </div>
            <h1
              style={{
                left: 0,
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "2rem"
              }}
            >
              {this.props.auth.userData.name}
            </h1>

            <div
              style={{
                marginLeft: "17rem",
                float: "left"
              }}
            >
              <BasicTextField placeholder="" label="Write Something" />
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <AddAPhotoTwoToneIcon
                style={{ marginTop: "16px", marginLeft: "7px", float: "left" }}
              />
              <GroupAddTwoToneIcon
                style={{ marginTop: "16px", marginLeft: "7px", float: "left" }}
              />
              <LocationOnTwoToneIcon
                style={{ marginTop: "16px", marginLeft: "7px", float: "left" }}
              />

              <button
                style={{ marginLeft: "15px", marginTop: "10px", float: "left" }}
                className="btn btn-danger"
              >
                Post
              </button>
            </div>
            <div
              style={{
                zIndex: "-1",
                position: "absolute",
                float: "left",
                marginTop: "5rem"
              }}
            >
              <Timeline>
                <Event interval={"2019"}></Event>
                <br style={{ marginTop: "50rem" }} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Event interval={"2018"}></Event>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Event interval={"2017"}></Event>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Timeline>
            </div>
            <div
              style={{
                float: "left",
                marginLeft: "10rem",
                width: "60%"
              }}
            >
              <Posts />
            </div>
          </div>

          <div className="col-2">
            <div style={style2}>
              <VirtualizedList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.registration,
  errors: state.errors
});
export default connect(mapStateToProps)(Profile);
