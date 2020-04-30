import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";

import Navbar from "../layout/Navbar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import FolderList from "./../layout/Timeline/lists";

class TopAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: "true" };
  }

  async getTopAlbum() {
    // this.setState({ loading: true });
    const url =
      "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rap&api_key=4bd1cce243708554bea3c36f4a43f88b&format=json";

    const res = await axios.get(url);

    const data = await res;
    console.log("helloo ", res.data.albums.album);
    return data.data.albums.album;
  }

  componentDidMount() {
    Promise.resolve(this.getTopAlbum()).then(data => {
      this.setState({ data: data, loading: false });
    });
  }
  componentWillReceiveProps(nextprops) {
    console.log(nextprops);
  }
  render() {
    const { loading, data } = this.state;
    let displayElement;
    if (loading) {
      displayElement = <Spinner></Spinner>;
    } else {
      console.log("inside render ", data);
      displayElement = data.map((item, key) => (
        <React.Fragment>
          <br />
          <br />
          <div key={key}>
            <div className="card" style={{ float: "left", width: "40%" }}>
              <img src={item.image[3]["#text"]}></img>
            </div>
            <div className="card-header">
              <span
                style={{
                  marginLeft: "3rem",
                  textDecoration: "underline",
                  fontFamily: "sans",
                  fontSize: "20px"
                }}
              >
                {item.name}
              </span>{" "}
              <br></br>
            </div>

            <div className="card-header">
              <span
                style={{
                  marginLeft: "2rem",
                  float: "left",
                  fontFamily: "sans",
                  fontSize: "20px"
                }}
              >
                Artist Name : {item.artist.name}
              </span>{" "}
              <br></br>
            </div>

            <span style={{ marginTop: "2rem", float: "left" }}>
              <ListItemIcon>
                <LibraryMusicIcon />
              </ListItemIcon>
              <a
                href={item.url}
                style={{
                  color: "#116466",
                  float: "left",
                  fontFamily: "sans",
                  fontSize: "20px",
                  marginLeft: "2rem"
                }}
              >
                Play {item.name}
              </a>
            </span>
            <hr></hr>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </React.Fragment>
      ));
    }
    // console.log(loading);
    return (
      <React.Fragment>
        <Navbar />
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
          <div className="col-6">{displayElement}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default TopAlbum;
