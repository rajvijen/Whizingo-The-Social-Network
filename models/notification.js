const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new mongoose.Schema(
{
    type_of_notification: String,
    seen: Boolean,
    post: {
        type: Schema.Types.ObjectId,
        ref: "post",
        required: false
    },
    who_did: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    who_did_name: String,
    to_whom: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    friend: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Notification", notificationSchema);