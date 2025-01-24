const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },  // Unique video identifier
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },  // URL to the video file
  thumbnailUrl: { type: String, required: true },  // URL to the video thumbnail
  description: { type: String, required: true },
  channelId: { type: String, required: true },  // ID of the channel that uploaded the video
  uploader: { type: String, required: true },  // User ID of the uploader
  views: { type: Number, default: 0 },  // Video view count
  likes: { type: Number, default: 0 },  // Video likes count
  dislikes: { type: Number, default: 0 },  // Video dislikes count
  uploadDate: { type: Date, default: Date.now },  // Date when the video was uploaded
  comments: [
    {
      commentId: { type: String, required: true },  // Unique comment ID
      userId: { type: String, required: true },  // ID of the user who commented
      text: { type: String, required: true },  // Comment text
      timestamp: { type: Date, required: true },  // Timestamp of when the comment was made
    }
  ]
});

module.exports = mongoose.model("Video", VideoSchema);
