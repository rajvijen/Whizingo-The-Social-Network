import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import pic from "./pic.jpg";
import Avatar from "@material-ui/core/Avatar";
import Moment from "react-moment";

import { deletePost, addLike, removeLike } from "../../actions/postActions";
const bigAvatar = {
  margin: 10,
  width: 60,
  height: 60
};
const style = {
  height: "auto",
  width: "80%",
  border: "1px solid white",
  margin: "1rem",
  overflow: "auto",
  borderRadius: "5%"
  // padding: "4rem"
};

class PostItem extends Component {
  onDeleteClick(id) {
    console.log(id);
    this.props.deletePost(id);
  }
  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;

    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    // console.log(this.props);
    const { post, auth, showActions } = this.props;

    return (
      <React.Fragment>
        <div style={style}>
          <div className="card text-left">
            <div className="card-header">
              <a href="profile.html">
                <img
                  src={post.avatar}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    height: "3rem",
                    width: "3rem",
                    marginRight: "2rem"
                  }}
                />
              </a>
              {post.name}
              {post.user === auth.userData.id ? (
                <div style={{ float: "right" }}>
                  <button
                    className="btn btn-secondary"
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                  >
                    delete post
                  </button>
                </div>
              ) : null}
            </div>{" "}
            <div className="card-footer text-muted">
              <Moment format="YYYY/MM/DD">{post.date}</Moment>
            </div>
            <p className="lead" style={{ margin: "1rem" }}>
              {post.text}
            </p>
            <img src={`/${post.img}`} style={{ height: "100%" }}></img>
            {showActions ? (
              <span>
                <button
                  className="btn btn-danger"
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  style={{ margin: "1rem" }}
                >
                  <i
                    class="fa fa-heart"
                    aria-hidden="true"
                    style={{ marginRight: "1px" }}
                  />{" "}
                  like
                  <span style={{ marginLeft: "1rem" }}>
                    {post.likes.length}
                  </span>
                </button>
                <a href={`/post/${post._id}`} style={{ color: "white" }}>
                  <button
                    className="btn btn-danger"
                    style={{ marginRight: "1rem" }}
                  >
                    comments
                  </button>
                </a>
              </span>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
