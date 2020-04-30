import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostFrom from "./PostForm";
import { getPosts } from "../../actions/postActions";
import Spinner from "../common/Spinner";
import PostFeed from "./PostFeed";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner></Spinner>;
    } else {
      postContent = <PostFeed posts={posts}></PostFeed>;
    }
    return <div>{postContent}</div>;
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
