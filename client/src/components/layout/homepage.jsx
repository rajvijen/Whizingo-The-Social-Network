import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles } from "@material-ui/styles";
import NavBar from "./Navbar";
import Divider from "@material-ui/core/Divider";
import BasicTextField from "./../common/textField";
import ResponsiveDialog from "../common/dialog";
import VirtualizedList from "./../common/friendList";
import AlignItemsList from "./../common/people";
import PostForm from "../posts/PostForm";
import Posts from "../posts/Posts";

import FolderList from "./Timeline/lists";
const style = {
  height: "584px",
  width: "70%",
  border: "1px solid white",
  margin: "1rem",
  overflow: "auto",
  borderRadius: "5%"
  // padding: "4rem"
};

const style1 = {
  backgroundColor: "#f5f5f5",

  height: "200px",
  width: "70%",
  borderRadius: "15px",
  margin: "3rem",
  overflow: "auto"
};
const style2 = {
  backgroundImage:
    "linear-gradient(to left  , #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)",

  backgroundColor: "#e9ebee",
  height: "100%",
  width: "90%",
  marginTop: "2rem",
  overflow: "auto",
  position: "fixed"
};

const useStyles = {
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
};
class Homepage extends Component {
  state = {
    people1: ["Aaquib Niaz", "Bittu Kumar Ray", "Ankur", "Rahul"],
    people3: ["BBC", "CCN", "BBC"],
    items: Array.from({ length: 20 })
  };
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
        <NavBar />
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
          <div
            className="col-5"
            style={{ height: "30%", width: "50%", float: "left" }}
          >
            <div style={style1}>
              <PostForm />
            </div>
            <Posts />
          </div>
          <div className="col-sm-3" style={{ float: "left" }}>
            <div style={{ borderRadius: "4rem" }}>
              <AlignItemsList
                title="people you may know"
                addFriend="Add Friend"
                remove="Remove"
                people1={this.state.people1}
              />
            </div>

            <div style={{ borderRadius: "4rem" }}>
              <AlignItemsList
                title="Subscriptions"
                addFriend="Subscribe"
                remove="remove"
                people1={this.state.people3}
              />
            </div>
          </div>
          <div>
            <Divider
              orientation="vertical"
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="col-sm-1">
            <div style={style2}>
              <VirtualizedList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Homepage);
