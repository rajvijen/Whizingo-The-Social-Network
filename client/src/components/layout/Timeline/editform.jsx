import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import MultilineTextFields from "./date";
import RadioButtonsGroup from "./radio";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#e9ebee",
    borderRadius: "2%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function EditForm() {
  const classes = useStyles();

  return (
    <div className="card">
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          {" "}
          <TextField
            id="outlined"
            label="First Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "25rem", margin: "2rem" }}
          />{" "}
          <TextField
            id="outlined"
            label="Last Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "25rem", margin: "2rem" }}
          />
        </div>
        <div>
          {" "}
          <TextField
            id="outlined"
            label="Email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "54rem", margin: "2rem" }}
          />{" "}
        </div>
        <div style={{ marginLeft: "2rem" }}>
          {" "}
          <MultilineTextFields />
        </div>
        <div>
          <RadioButtonsGroup />
        </div>
        <div>
          {" "}
          <TextField
            id="outlined"
            label="City"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "25rem", margin: "2rem" }}
          />
          <TextField
            id="outlined"
            label="Country"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ width: "25rem", margin: "2rem" }}
          />
        </div>
        <div style={{ marginLeft: "1rem" }}>
          {" "}
          <TextField
            id="outlined-textarea"
            label="About Me"
            placeholder="Write Something"
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
            style={{ marginLeft: "1rem", width: "54rem" }}
          />
        </div>
        <div style={{ width: "100%", marginTop: "3rem", marginBottom: "3rem" }}>
          <button className="btn btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
}
