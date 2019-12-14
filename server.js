const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const socketio = require("socket.io");
const http = require("http");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const sendrequest = require("./routes/api/friend_request");
const chatroom = require('./socket/chatroom');
const getRecommendations = require("./routes/api/recommendations");
const notification = require('./routes/api/notification');
const message = require('./routes/api/message');

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//databse configuration
const db = require("./config/keys").mongoURI;

//connect to mongo db

mongoose
  .connect(db)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch(err => console.log(err));

//passw=port middle ware

app.use(passport.initialize());

//passport config

require("./config/passport")(passport);

//use routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/friends", sendrequest);
app.use("/api/recommendations", getRecommendations);
app.use("/api/notification",notification);
app.use("/api/message",message);

const port = 5000 || process.env.PORT;
const server = app.listen(port, () =>
  console.log(`server is running on port ${port}`)
);

const io = socketio(server);

chatroom(io);
