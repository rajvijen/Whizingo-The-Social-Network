import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { ThemeProvider } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: "#e0e0e0"
    }
  }
});

const styles = theme => ({
  title: {
    color: "#d7ccc8",
    fontSize: 24
  },
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    color: "#d7ccc8",
    flex: 1
  },
  leftLinkActive: {
    color: "#ffffff"
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: "#ffffff",
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: "#fce4ec"
  },
  body: { backgroundColor: "transparent" }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          color="primary"
          style={{
            background: useScrollTrigger() ? "#616161" : "transparent"
          }}
          // className={classes.body}
        >
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link
              variant="h4"
              underline="none"
              className={classes.title}
              to="null"
              style={{ color: "#ffffff" }}
            >
              {"Whizingo"}
            </Link>
            <div className={classes.right}>
              <Link
                variant="h6"
                underline="none"
                color="textPrimary"
                className={classes.rightLink}
                href="/login"
              >
                {"Sign In"}
              </Link>
              <Link
                variant="h6"
                color="textPrimary"
                underline="none"
                className={clsx(classes.rightLink)}
                href="/register"
              >
                {"Sign Up"}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </ThemeProvider>
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
