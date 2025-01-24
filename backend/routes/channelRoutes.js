


const express = require("express");
const Video = require("../models/Video"); 
const mongoose = require("mongoose");

const router = express.Router();

router.get("/:channelId", async (req, res) => {
  try {
    // Find all videos that belong to the channel using the channelId (from Video model)
    const videos = await Video.find({ channelId: req.params.channelId });

    if (videos.length === 0) {
      return res.status(404).json({ message: "No videos found for this channel" });
    }

    
    const channel = {
      channelId: req.params.channelId,
      channelName: "Channel Name", 
      description: "Channel Description", 
      videos: videos,
    };

    res.status(200).json(channel);
  } catch (error) {
    console.error("Error fetching channel:", error);
    res.status(500).json({ message: "Error fetching channel", error });
  }
});

module.exports = router;

