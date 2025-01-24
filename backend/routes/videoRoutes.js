// backend/routes/videoRoutes.js
const express = require("express");
const Video = require("../models/Video");

const router = express.Router();

// Fetch all videos
router.get("/", async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

// Fetch single video by ID
router.get("/:id", async (req, res) => {
  const video = await Video.findById(req.params.id);
  res.json(video);
});

router.post("/:id/comments", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Create a new comment object
    const newComment = {
      commentId: Math.random().toString(36).substring(2, 15),  // Generate unique comment ID
      userId: req.body.userId || "guest", // Use a default for guest users
      text: req.body.text,
      timestamp: new Date().toISOString(),
    };

    // Push the new comment to the video comments array
    video.comments.push(newComment);

    // Save the video with the new comment
    await video.save();

    // Return the updated video data (including new comment)
    res.status(200).json(video);
  } catch (error) {
    console.error("Error adding comment:", error);  // Log the error for debugging
    res.status(500).json({ message: "Error adding comment", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const { action } = req.body;  // action can be 'like' or 'dislike'
    // console.log("work");
    if (action === "like") {
      video.likes += 1;
      // console.log("like happen");
    } else if (action === "dislike") {
      video.dislikes += 1;
      // console.log("dislike happen");
    }

    await video.save();
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: "Error updating like/dislike", error });
  }
});


module.exports = router;
