const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  const { username, email, passwordHash } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(passwordHash, 10);
    const newUser = new User({ username, email, passwordHash: hashedPassword });

    await newUser.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Edit Profile Route
router.put("/editprofile", async (req, res) => {
  const { userId, username, email, passwordHash } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (username) user.username = username;
    if (email) user.email = email;
    if (passwordHash) user.passwordHash = await bcrypt.hash(passwordHash, 10);

    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
