import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#e9ebee",
    borderRadius: "20px"
  }
}));

export default function FolderList1() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DynamicFeedIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/profile" style={{ color: "#DC3545" }}>
          <ListItemText primary="Timeline" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DynamicFeedIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/create-profile" style={{ color: "#DC3545" }}>
          <ListItemText primary="Create Profile" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/edit-profile">
          <ListItemText
            primary="Edit Basic Info"
            style={{ color: "#DC3545" }}
          />
        </Link>
      </ListItem>{" "}
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>{" "}
        <Link to="/add-education" style={{ color: "#DC3545" }}>
          <ListItemText primary="Education and Work" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>{" "}
        <Link to="/add-experience" style={{ color: "#DC3545" }}>
          <ListItemText primary="Add Experience" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>{" "}
        <Link to="/profile/settings" style={{ color: "#DC3545" }}>
          <ListItemText primary="Account Settings" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>{" "}
        <Link to="/profile/passwordChange" style={{ color: "#DC3545" }}>
          <ListItemText primary="Change Password" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
