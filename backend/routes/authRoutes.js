const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();



const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Uploads stored in the 'uploads' folder

// Register
router.post("/register", upload.single("avatar"), async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();
    const avatar = req.file ? req.file.path : "https://example.com/default-avatar.png";

    const user = new User({ userId, username, email, password: hashedPassword, avatar, channels: [] });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id, username: user.username, avatar: user.avatar }, "secret", { expiresIn: "1d" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;