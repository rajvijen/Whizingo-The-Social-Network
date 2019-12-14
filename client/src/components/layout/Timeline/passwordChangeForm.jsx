import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import MultilineTextFields from "./date";
import RadioButtonsGroup from "./radio";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#e9ebee"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function EditForm1() {
  const classes = useStyles();

  return (
    <div className="card">
      <form className={classes.container} noValidate autoComplete="off">
        <h3
          style={{
            marginTop: "2rem",
            marginLeft: "2rem",
            float: "left",
            fontFamily: "serif",
            textDecorationLine: "underline"
          }}
        >
          Old Password
        </h3>{" "}
        <div>
          <TextField
            id="outlined"
            label="Old Password"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "60rem", margin: "2rem" }}
          />{" "}
        </div>
        <div>
          {" "}
          <h3
            style={{
              marginTop: "2rem",
              marginLeft: "2rem",
              marginRight: "2.5rem",
              float: "left",
              fontFamily: "serif",
              textDecorationLine: "underline"
            }}
          >
            New Password
          </h3>{" "}
          <TextField
            id="outlined"
            label="New Password"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "25rem", margin: "2rem" }}
          />
        </div>
        <div>
          <h3
            style={{
              marginTop: "2rem",
              marginLeft: "2rem",
              float: "left",
              fontFamily: "serif",
              textDecorationLine: "underline"
            }}
          >
            Confirm Password
          </h3>{" "}
          <TextField
            id="outlined"
            label="Confirm Password"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "25rem", margin: "2rem" }}
          />
        </div>
        <div style={{ width: "40%", float: "left", fontFamily: "serif" }}>
          <Link
            to="/profile/forgetpassword"
            style={{ fontSize: "25px", float: "left", margin: "2rem" }}
          >
            Forgot password ?
          </Link>
        </div>
        <div style={{ width: "80%", marginBottom: "2rem" }}>
          <button className="btn btn-secondary">Submit</button>
        </div>
      </form>
    </div>
  );
}
