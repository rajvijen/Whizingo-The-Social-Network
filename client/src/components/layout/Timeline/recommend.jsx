import React, { Component, Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { connect } from 'react-redux';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import { sendRequest } from "../../../actions/friendrequestActions";

import { Link } from "react-router-dom";

const useStyles = {
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    backgroundImage:
      "linear-gradient(to left, #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)"
  },
  inline: {
    display: "inline"
  }
};



class AlignItemsList1 extends Component {

  state ={
    but1:false,
    but2:false,
    but3:false,
    but4:false
  }



  send_request = (id, index) => {
    console.log("in send request")
    this.props.sendRequest({"senderid":this.props.user.id, "recieverid":id});

    if(index==1){
    this.setState({
      "but1":true
    })
  }
    else if(index==2){
      this.setState({
        "but2":true
      })
    }

    else if(index==3){
      this.setState({
        "but3":true
      })
    }

    else if(index==4){
      this.setState({
        "but4":true
      })
    }

  }

  render() {

    console.log(this.props)
    const classes = this.props;
    const people = [{ "user": "Wilson", "id": "5dbf12db8fa39857ca022123","status":this.state.but1}, { "user": "Bittu", "id": "5dbbb26c04d090318d20e13e","status":this.state.but2 }, { "user": "Aaquib", "id": "5dbf143f8fa39857ca022124", "status":this.state.but3 }, { "user": "Rahul", "id": "5dbf34592cc30b1a421e69e7", "status":this.state.but4 }];
    return (
      <List className={classes.root}>
        <h5
          style={{
            paddingTop: "10px",
            float: "left",
            fontFamily: "serif",
            fontWeight: "bold",
            marginLeft: "1rem"
          }}
        >
          {" "}
          Wanna Follow ?
      </h5>
        <Link
          to="/recommendations"
          style={{
            paddingTop: "10px",
            paddingLeft: "2.3rem",
            float: "left",
            fontSize: "17px",
            color: "#DC3545",
            fontWeight: "bold"
          }}
        >
          See All
      </Link>
        {people.map((friend1, index) => (
          <React.Fragment>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/random"
              />
            </ListItemAvatar>
            <ListItemText
              primary={friend1.user}
              secondary={
                <React.Fragment>
                  <br />
                  {friend1.status ? <button disabled className="btn btn-sm btn-danger" onClick={() => this.send_request(friend1.id, index+1)}>
                    Sent
              </button>:<button className="btn btn-sm btn-danger" onClick={() => this.send_request(friend1.id, index+1)}>
                    Add Friend
              </button>}
              {" "}
                </React.Fragment>
              }
              key={index}
            />
          </ListItem>
            
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    );
  }
};



const mapStateToProps = state => {
  return {
    response: state.request.response,
    user:state.registration.userData
  };
};

export default connect(mapStateToProps, { sendRequest })(
  withStyles(useStyles)(AlignItemsList1)
);