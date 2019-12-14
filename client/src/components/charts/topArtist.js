import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";
import { classnames } from "classnames";
import Navbar from "../layout/Navbar";
import FolderList from "../layout/Timeline/lists";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

class TopArtist extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: true };
  }

  async getTopArtist() {
    // this.setState({ loading: true });
    const url =
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4bd1cce243708554bea3c36f4a43f88b&format=json";

    const res = await axios.get(url);

    const data = await res;
    // console.log("helloo ", res.data.artists.artist);
    return data.data.artists.artist;
  }

  componentDidMount() {
    Promise.resolve(this.getTopArtist()).then(data => {
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
          <div className="card" key={key}>
            <div className="card-header">
              <span style={{ fontFamily: "Sans-serif", fontSize: "25px" }}>
                {item.name}
              </span>{" "}
              <br></br>
            </div>
            <div className="card-header">
              <span
                style={{
                  marginLeft: "3rem",
                  float: "left",
                  fontFamily: "sans",
                  fontSize: "20px"
                }}
              >
                Playcount : {item.playcount}
              </span>{" "}
              <br></br>
            </div>
            <div className="card-header">
              <span
                style={{
                  marginLeft: "3rem",
                  float: "left",
                  fontFamily: "sans",
                  fontSize: "20px"
                }}
              >
                Viewers Count : {item.listeners}
              </span>{" "}
              <br></br>
            </div>
            <span style={{ marginTop: "2rem" }}>
              <ListItemIcon>
                <LibraryMusicIcon />
              </ListItemIcon>
              <a
                href={item.url}
                style={{
                  color: "#116466",
                  fontFamily: "sans",
                  fontSize: "20px"
                }}
              >
                Play Songs of {item.name}
              </a>
            </span>
            <hr></hr>
          </div>
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
          <div className="col-5">{displayElement}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default TopArtist;
