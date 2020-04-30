import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import BasicTextFields from "./../common/textField";
import { AddAPhotoTwoToneIcon } from "@material-ui/icons/AddAPhotoTwoTone";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      file: null,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onUpload = this.onUpload.bind(this);
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
    console.log(userData);
    // const newPost = {
    //   text: this.state.text,
    //   name: userData.name,
    //   avatar: userData.avatar
    // };
    // console.log(newPost);

    const newPost = new FormData();
    newPost.append("postImage", this.state.file);
    newPost.append("text", this.state.text);
    newPost.append("name", userData.name);
    newPost.append("avatar", userData.avatar);
    console.log("helooooo");
    this.props.addPost(newPost);
    this.setState({ text: " " });
  }

  onChange(e) {
    console.log(e.target.name, "asdfads");
    this.setState({ [e.target.name]: e.target.value });
  }
  onUpload(e) {
    this.setState({ file: e.target.files[0] });
  }
  render() {
    const { errors } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <form onSubmit={this.onSubmit} enctype="multipart/form-data">
          <div className="form-group">
            <BasicTextFields
              placeholder="Create a post"
              name="text"
              label="Write Something"
              value={this.state.text}
              onChange={this.onChange}
              // error={errors.text}
            />
          </div>

          <input
            type="file"
            name="postImage"
            onChange={this.onUpload}
            style={{ marginRight: "7rem", marginLeft: "1rem" }}
          />

          <button
            type="submit"
            className="btn btn-info btn-lg"
            style={{ marginTop: "1rem" }}
          >
            <i class="fa fa-upload"> Post</i>
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
