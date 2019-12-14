import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#e9ebee"
  }
}));

export default function PaperSheet() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography
        variant="h5"
        component="h3"
        style={{ textAlign: "left", marginTop: "3rem" }}
      >
        Enable Follow Me
      </Typography>
      <Typography
        component="p"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        Enable this if you want people to follow you
        <div style={{ float: "right" }}>
          <Switch
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </Typography>
      <br />
      <Divider />
      <Typography
        variant="h5"
        component="h3"
        style={{ textAlign: "left", marginTop: "3rem" }}
      >
        Send me notifications
      </Typography>{" "}
      <Typography
        component="p"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        Send me notification emails my friends like, share or message me
        <div style={{ float: "right" }}>
          <Switch
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      </Typography>{" "}
      <br />
      <Divider />
      <Typography
        variant="h5"
        component="h3"
        style={{ textAlign: "left", marginTop: "3rem" }}
      >
        Text messages
      </Typography>
      <Typography
        component="p"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        Send me messages to my cell phone
        <div style={{ float: "right" }}>
          <Switch
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      </Typography>{" "}
      <br />
      <Divider />
      <Typography
        variant="h5"
        component="h3"
        style={{ textAlign: "left", marginTop: "3rem" }}
      >
        Enable tagging
      </Typography>
      <Typography
        component="p"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        Enable my friends to tag me on their posts
        <div style={{ float: "right" }}>
          <Switch
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      </Typography>{" "}
      <br />
      <Divider />
      <Typography
        variant="h5"
        component="h3"
        style={{ textAlign: "left", marginTop: "3rem" }}
      >
        Enable sound
      </Typography>
      <Typography
        component="p"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        You'll hear notification sound when someone sends you a private message
        <div style={{ float: "right", marginBottom: "10rem" }}>
          <Switch
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      </Typography>{" "}
      <br />
      <Divider />
    </Paper>
  );
}
