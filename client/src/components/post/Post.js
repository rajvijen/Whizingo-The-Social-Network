import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes, { object } from "prop-types";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/postActions";
import PostItem from "../posts/PostItem";
import { Link } from "@material-ui/core";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  render() {
    const { post, loading } = this.props.post;

    let postContent;
    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner></Spinner>;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false}></PostItem>
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }
    return (
      <div>
        <Link to="/feed">back to posts</Link>
        {postContent}
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
