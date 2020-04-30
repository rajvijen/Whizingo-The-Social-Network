import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "white"
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="transparent"
        textColor="#626262"
        backgroundColor="transparent"
        centered
      >
        <Link to="/about" style={{ color: "#fff" }}>
          <Tab label="About" />
        </Link>
        <Link to="/friends" style={{ color: "white" }}>
          <Tab label="friends" />
        </Link>
        <Link to="/posts" style={{ color: "white" }}>
          <Tab label="Album" />
        </Link>
      </Tabs>
    </Paper>
  );
}
