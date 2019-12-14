import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import AlbumIcon from "@material-ui/icons/Album";
import StarBorder from "@material-ui/icons/StarBorder";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Link } from "react-router-dom";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#e9ebee"
  }
}));

export default function FolderList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/edit-profile" style={{ color: "#DC3545" }}>
          <ListItemText primary="Profile" />
        </Link>
      </ListItem>{" "}
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FeaturedPlayListIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/news" style={{ color: "#DC3545" }}>
          <ListItemText primary="News" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Avatar>
            <InboxIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Charts" style={{ color: "#DC3545" }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AlbumIcon />
            </ListItemIcon>
            <Link to="/charts/top-artist">
              <ListItemText
                primary="Top Artists"
                style={{ color: "#DC3545" }}
              />
            </Link>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LibraryMusicIcon />
            </ListItemIcon>
            <Link to="/charts/top-album">
              {" "}
              <ListItemText primary="Top Albums" style={{ color: "#DC3545" }} />
            </Link>
          </ListItem>
        </List>
      </Collapse>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ListAltRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/recommendations" style={{ color: "#DC3545" }}>
          <ListItemText primary="Recommendations" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/friends" style={{ color: "#DC3545" }}>
          <ListItemText primary="Friends" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ChatRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/chatroom" style={{ color: "#DC3545" }}>
          <ListItemText primary="ChatRoom" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoCallIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/videos" style={{ color: "#DC3545" }}>
          <ListItemText primary="Videos" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
