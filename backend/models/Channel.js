const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({
  channelId: { type: String, required: true, unique: true },  // channelId is a string
  channelName: String,
  description: String,
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
});

module.exports = mongoose.model("Channel", ChannelSchema);