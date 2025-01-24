const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "https://example.com/default-avatar.png" },
  channels: [{ type: String }],
});

module.exports = mongoose.model("User", UserSchema);