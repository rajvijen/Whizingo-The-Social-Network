import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/postActions";
import Navbar from "../layout/Navbar";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submit");

    const { userData } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: userData.firstName,
      avatar: userData.avatar
    };
    this.props.addComment(postId, newComment);
    this.setState({ text: " " });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <Navbar />

        <div className="row" style={{ backgroundColor: "#e9ebee" }}>
          <div className="col-3"></div>
          <div className="col-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <textarea
                  placeholder="replyy to post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                />
              </div>
              {errors.text}
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration,
  errors: state.errors
});

export default connect(mapStateToProps, { addComment })(CommentForm);
