const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");
const channelRoutes = require("./routes/channelRoutes");
const videos = require("./videos");
const Video = require("./models/Video");  
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/channels", channelRoutes);

// Database Connection

  mongoose
  .connect("mongodb://localhost:27017/youtube_clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Insert videos into the database
    Video.insertMany(videos)
      .then(() => {
        console.log("Videos inserted successfully!");
      })
      .catch((err) => {
        console.error("Error inserting videos:", err);
      });

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });