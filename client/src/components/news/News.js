import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";
import { classnames } from "classnames";
import Navbar from "../layout/Navbar";
import FolderList from "../layout/Timeline/lists";
import Divider from "@material-ui/core/Divider";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: "true" };
    this.getCategory = this.getCategory.bind(this);
  }

  getCategory(category) {
    console.log("hello");
    Promise.resolve(this.getNews(category)).then(data => {
      this.setState({ data: data, loading: false });
    });
  }

  async getNews(value) {
    // this.setState({ loading: true });
    console.log(value);
    const url = "https://newsapi.org/v2/top-headlines?";

    let category = "country=in&category=";
    const source = "sources=bbc-news";
    let endpoint = "";
    // if (value === "health") {
    category = category + value;
    // } else {
    //   endpoint = url + source;
    // }
    endpoint = url + category;
    const res = await axios.get(endpoint, {
      headers: { "x-api-key": "f60f409e37364b1ab7f990a73fea2c2e" }
    });

    const data = await res;
    return data.data.articles;
  }

  componentDidMount() {
    Promise.resolve(this.getNews("general")).then(data => {
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
      console.log(data);
      const articleData = data.map((item, key) => (
        <React.Fragment key={key}>
          <div className="card-header">
            {" "}
            <a href={item.url}>
              <h6
                style={{
                  fontSize: "25px",
                  color: "#00695c"
                }}
              >
                {item.title}
              </h6>
            </a>
          </div>
          <div
            className="card-footer text-muted"
            style={{ boxShadow: "3px 3px 3px 3px #e0e0e0" }}
          >
            <img
              src={item.urlToImage}
              style={{ width: "100%", height: "40%" }}
            ></img>
          </div>
          <div
            className="card"
            style={{ boxShadow: "3px 3px 3px 3px #e0e0e0" }}
          >
            <div>{item.content}</div>
            <hr></hr>
          </div>

          <br />
          <br />
        </React.Fragment>
      ));
      displayElement = (
        <div
          style={{
            fontFamily: "sans",
            float: "left",
            marginBottom: "2rem",
            marginTop: "3rem"
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "3rem",
              textDecoration: "underline"
            }}
          >
            News
          </h1>
          {articleData}
        </div>
      );
    }
    // console.log(loading);
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />

        <div className="row" style={{ backgroundColor: "#e9ebee" }}>
          <div className="col-lg-3">
            <div className="position-fixed">
              <div
                style={{
                  width: "14%",
                  marginTop: "3rem",
                  marginTop: "4rem",
                  position: "fixed",
                  backgroundColor: "transparent"
                }}
              >
                <FolderList />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            {/* <button onClick={this.getCategory()}>Health</button> */}
            <div>{displayElement}</div>
          </div>
          <div className="col-lg-3">
            <div
              className="card"
              style={{
                marginLeft: "2rem",
                marginTop: "2rem",
                backgroundColor: "#e9ebee",
                width: "100%"
              }}
            >
              <div
                className="card-body"
                style={{ boxShadow: "5px 5px 5px 5px #e0e0e0" }}
              >
                {" "}
                <h3
                  style={{
                    marginTop: "2rem",
                    marginLeft: "3rem",
                    marginRight: "40rem",
                    fontSize: "35px",
                    float: "left",
                    textDecoration: "underline",
                    fontFamily: "sans "
                  }}
                >
                  Categories
                </h3>
                <button
                  style={{ margin: "1rem", float: "left" }}
                  className="btn btn-info"
                  onClick={() => {
                    this.getCategory("entertainment");
                  }}
                >
                  Entertainment
                </button>
                <button
                  style={{ margin: "1rem", float: "left" }}
                  className="btn btn-info"
                  onClick={() => {
                    this.getCategory("health");
                  }}
                >
                  Health
                </button>
                <button
                  style={{ margin: "1rem", float: "left" }}
                  className="btn btn-info"
                  onClick={() => {
                    this.getCategory("sports");
                  }}
                >
                  Sports
                </button>
                <button
                  style={{ margin: "1rem", float: "left" }}
                  className="btn btn-info"
                  onClick={() => {
                    this.getCategory("technology");
                  }}
                >
                  Technology
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default News;
