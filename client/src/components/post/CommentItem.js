import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";
import Navbar from "../layout/Navbar";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <div></div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-5">
            <div
              className="card-header"
              style={{
                boxShadow: "4px 4px 4px #fff",

                width: "30%",
                height: "15%"
              }}
            >
              {" "}
              <span className="text-center">{comment.name}</span>
            </div>
            <div
              className="card"
              style={{
                boxShadow: "1px 1px 1px #fff",

                width: "30%",
                height: "40%"
              }}
            >
              <a href="profile.html">
                <img
                  src={comment.avatar}
                  alt=""
                  style={{ width: "50%", height: "70%" }}
                />{" "}
              </a>

              <div className="card">
                <p
                  className="lead"
                  style={{ fontfamily: "sans", fontSize: "20px" }}
                >
                  {comment.text}
                </p>
                {comment.user === auth.userData.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                    className="btn btn-secondary"
                  >
                    delete
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
