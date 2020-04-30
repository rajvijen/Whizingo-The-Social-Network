import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { makeStyles } from "@material-ui/core/styles";
import InputGroup from "../common/InputGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
// import createProfile from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import TextField from "@material-ui/core/TextField";
import MultilineTextFields from "../layout/Timeline/date";
import RadioButtonsGroup from "../layout/Timeline/radio";
import CenteredTabs from "./../layout/Timeline/tabs";
import FolderList1 from "../layout/Timeline/editProfileSideBar";
import NavBar1 from "../layout/Timeline/nav";
import Navbar from "../layout/Navbar";
// createProfile;
const container = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#eeeeee",
  borderRadius: "2%"
};
const textField = {
  width: 200
};
class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;
      // Bring skills array back to CSV

      const skillsCSV = profile.skills;
      let skills_ = []; //= skillsCSV;
      for (var i in skillsCSV) {
        console.log(skillsCSV[i]);
        skills_.push(skillsCSV[i].join(" "));
      }
      skills_ = skills_.join(",");

      // If profile field doesnt exist, make empty string
      profile.company = !isEmpty(profile.company) ? profile.company : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : "";
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";

      // Set component fields state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skills_,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;
    console.log(displaySocialInputs);
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <TextField
            style={{ margin: "1rem" }}
            id="outlined-textarea"
            margin="normal"
            variant="outlined"
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fa fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <TextField
            style={{ margin: "1rem" }}
            id="outlined-textarea"
            margin="normal"
            variant="outlined"
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fa fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <TextField
            style={{ margin: "1rem" }}
            id="outlined-textarea"
            margin="normal"
            variant="outlined"
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fa fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <TextField
            style={{ margin: "1rem" }}
            id="outlined-textarea"
            margin="normal"
            variant="outlined"
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fa fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <TextField
            style={{ margin: "1rem" }}
            id="outlined-textarea"
            margin="normal"
            variant="outlined"
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fa fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];

    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-2">
            {" "}
            <div
              style={{
                width: "14%",
                marginTop: "3rem",
                marginLeft: "1rem",
                position: "fixed",
                backgroundColor: "transparent"
              }}
            >
              <FolderList1 />
            </div>
          </div>

          <div className="col-8">
            <img
              src="https://source.unsplash.com/collection/190727/470x300"
              alt=""
              style={{
                height: "14rem",
                width: "14rem",
                color: "white",
                marginTop: "22rem",
                marginLeft: "2rem",
                position: "absolute",
                left: 0,
                borderRadius: "50%",
                border: "8px solid #fff"
              }}
            />
            <img
              src="https://source.unsplash.com/random"
              alt=".."
              style={{
                zIndex: "-1",
                left: 0,
                height: "500px",
                width: "100%",
                position: "absolute"
              }}
            />

            <div style={{ marginTop: "25rem", color: "transparent " }}>
              <CenteredTabs />
            </div>

            <h1
              style={{
                left: 0,
                textAlign: "left",
                marginTop: "9rem",
                marginLeft: "1rem",
                fontFamily: "Times, Times New Roman, serif"
              }}
            >
              {this.props.auth.userData.name}
            </h1>
            <div>
              <h2
                style={{
                  textDecorationLine: "underline",
                  fontFamily: "roboto",
                  marginBottom: "2rem",
                  color: "#626262"
                }}
              >
                Edit Basic Info
              </h2>
            </div>
            <div className="card">
              <form
                onSubmit={this.onSubmit}
                style={container}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined"
                    placeholder="* Profile Handle"
                    name="handle"
                    margin="normal"
                    variant="outlined"
                    style={{ width: "30rem", margin: "2rem" }}
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                  />
                </div>
                <div>
                  <div>
                    {" "}
                    <TextField
                      id="outlined"
                      label="Email"
                      // className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      style={{ width: "30rem", margin: "2rem" }}
                    />{" "}
                  </div>
                </div>
                <div style={{ marginLeft: "2rem" }}>
                  {" "}
                  <MultilineTextFields />
                </div>
                <div style={{ width: "30rem" }}>
                  <RadioButtonsGroup />
                </div>
                <div>
                  <TextField
                    id="outlined"
                    margin="normal"
                    variant="outlined"
                    style={{ width: "20rem", margin: "2rem" }}
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                    info="Could be your own company or one you work for"
                  />

                  <TextField
                    margin="normal"
                    variant="outlined"
                    id="outlined"
                    style={{ width: "20rem", margin: "2rem" }}
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChange}
                    error={errors.website}
                    info="Could be your own website or a company one"
                  />
                </div>
                <hr />

                <TextField
                  id="outlined"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "25rem", margin: "2rem" }}
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <hr />

                <TextField
                  placeholder="* Skills"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "25rem", margin: "2rem" }}
                  id="outlined"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <hr />

                <TextField
                  margin="normal"
                  variant="outlined"
                  style={{ width: "25rem", margin: "2rem" }}
                  id="outlined"
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <hr />

                <TextField
                  id="outlined-textarea"
                  margin="normal"
                  variant="outlined"
                  style={{ width: "90rem", margin: "2rem" }}
                  id="outlined"
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />

                <div style={{ float: "left", margin: "3rem" }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                  >
                    Add Social Network Links
                  </button>
                  <span>Optional</span>
                </div>
                {socialInputs}
                <div style={{ width: "70rem", marginBottom: "2rem" }}>
                  {" "}
                  <button
                    className="btn btn-danger"
                    type="submit"
                    value="Submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.object.isRequired,

  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.registration,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
