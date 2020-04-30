import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import logo from "./productCurvyLines.png";
import productValues1 from "./productValues1.svg";
import productValues2 from "./productValues2.svg";
import productValues3 from "./productValues3.svg";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff5f8"
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={logo} className={classes.curvyLines} alt="curvy lines" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Connect with people
              </Typography>
              <Typography variant="h5">
                {
                  "We help you connect with your friends or complete strangers based on your interests."
                }
                {" Become friends with them and make friends for life."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                ChatRoom
              </Typography>
              <Typography variant="h5">
                {
                  "Go in our Chatroom, add your interests and find someone just like you with the similar interests "
                }
                {" and talk to them as much as you like."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Recommendations
              </Typography>
              <Typography variant="h5">
                {
                  "Based on your interests, our recommendations system will suggest you suitable groups, pages and other people. "
                }
                {
                  "This will make it easy for you to find new people and make friends."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
