const mongoose = require("mongoose");

const chatroomUsersSchema = new mongoose.Schema(
{
    id: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("ChatroomUsers", chatroomUsersSchema);