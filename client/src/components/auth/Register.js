import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, withStyles } from "@material-ui/styles";

import { RegisterUser } from "../../actions/authAction";
import * as EmailValidator from "email-validator";

import { blue } from "@material-ui/core/colors";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import NavBar1 from "../layout/Timeline/nav";
import Navbar from "../layout/Navbar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Whizingo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const useStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "55vh"
  },
  margin: {
    margin: theme.spacing(1)
  },
  margin1: { margin: theme.spacing(0.5) },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },

  input: {
    height: "45px",
    width: "100%"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/8706966)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
};

class RegistrationForm extends Component {
  componentDidMount() {
    console.log("hello");
    console.log(this.props.auth);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/success");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmitRegistration = e => {
    if (this.state.username.length < 5) {
      this.setState({ username_error: true });
    } else if (this.state.password !== this.state.confirm_password) {
      this.setState({
        error_msg_passwd: true
      });
    } else {
      // else if (this.state.password === this.state.confirm_password) {
      //   this.setState ({
      //     error_msg_passwd: false,
      //   });
      // }
      let userData = {
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.confirm_password
      };

      this.props.RegisterUser(userData);
    }
  };

  state = {
    username: "",
    password: "",
    confirm_password: "",
    email: "",
    error_msg_passwd: false,
    emailIsValid: true,
    username_error: false
  };

  onChange_username = e => {
    if (e.target.value.length < 5) {
      this.setState({
        username_error: true
      });
    } else if (e.target.value.length >= 5 || e.target.value === "") {
      this.setState({
        username_error: false
      });
    }

    this.setState({
      username: e.target.value
    });
  };

  onChange_email = e => {
    this.setState({
      email: e.target.value
    });

    if (EmailValidator.validate(e.target.value) || e.target.value === "") {
      this.setState({ emailIsValid: true });
    } else {
      this.setState({ emailIsValid: false });
    }
  };

  onChange_password = e => {
    this.setState({
      password: e.target.value
    });
  };

  onChange_confirmpassword = e => {
    this.setState({
      confirm_password: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    if (this.props.isRegistered) {
      console.log("User is registered successfully!!");
    } else {
      console.log("Registration failed!!", this.props);
    }

    const redirectToReferrer = this.props.isRegistered;
    if (redirectToReferrer === true) {
      return <Redirect to="/login" />;
    }

    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <Grid container component="main" className={classes.image}>
          {/* <CssBaseline /> */}
          {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h6"
                className={classes.margin}
              >
                Sign Up
              </Typography>
              <form className={classes.root} noValidate>
                <ThemeProvider theme={theme}>
                  <TextField
                    className={classes.margin1}
                    label="Name"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    InputProps={{
                      className: classes.input
                    }}
                    onChange={this.onChange_username}
                    value={this.state.username}
                    error={this.state.username_error}
                    helperText={
                      this.state.username_error === true
                        ? "at least five characters required "
                        : null
                    }
                  />
                  <TextField
                    className={classes.margin1}
                    label="Email"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    InputProps={{
                      className: classes.input
                    }}
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange_email}
                    error={!this.state.emailIsValid}
                    helperText={
                      this.state.emailIsValid === false
                        ? "Enter a valid email"
                        : null
                    }
                  />
                  <TextField
                    className={classes.margin1}
                    label="Password"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="password"
                    InputProps={{
                      className: classes.input
                    }}
                    value={this.state.password}
                    onChange={this.onChange_password}
                  />
                  <TextField
                    className={classes.margin1}
                    label="Confirm Password"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="password"
                    InputProps={{
                      className: classes.input
                    }}
                    value={this.state.confirm_password}
                    onChange={this.onChange_confirmpassword}
                    error={this.state.error_msg_passwd}
                    helperText={
                      this.state.error_msg_passwd === true
                        ? "Both passwords are not same"
                        : null
                    }
                  />
                  {/* <Link href="/login"> */}
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    className={classes.submit}
                    onClick={this.onSubmitRegistration}
                  >
                    Submit
                  </Button>
                  {/* </Link> */}
                  <Grid container spacing={4}>
                    <Grid item xs>
                      <div href="#" variant="body2">
                        Already have an account ?
                      </div>
                    </Grid>
                    <Grid item>
                      <Link href="/login" variant="body2">
                        {"Sign In"}
                      </Link>
                    </Grid>
                  </Grid>
                </ThemeProvider>
              </form>

              <Box mt={5}>
                <Copyright />
              </Box>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

RegistrationForm.propTypes = {
  RegisterUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.registration,
    errors: state.errors,
    // isAuthenticated: state.registration.isAuthenticated,
    isRegistered: state.registration.isRegistered,
    userData: state.registration.userData
  };
};

export default connect(mapStateToProps, { RegisterUser })(
  withStyles(useStyles)(RegistrationForm)
);
