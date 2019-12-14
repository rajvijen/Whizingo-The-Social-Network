const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema(
{
    from: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    from_name: String,
    to: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    to_name: String,
    from_seen: Boolean,
    to_seen: Boolean,
    content: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Message", messageSchema);