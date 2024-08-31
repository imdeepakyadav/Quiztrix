const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Quiz = require("../models/Quiz");
const QuizEvent = require("../models/QuizEvent");
const UserAnswer = require("../models/UserAnswer");
const Leaderboard = require("../models/Leaderboard");

const router = express.Router();

// --- User Routes ---
// Register User
router.post("/register", async (req, res) => {
  try {
    const { username, email, passwordHash, role } = req.body;
    const hashedPassword = await bcrypt.hash(passwordHash, 10);
    const userRole = role && role === "admin" ? "admin" : "normaluser";
    const user = new User({
      username,
      email,
      passwordHash: hashedPassword,
      role: userRole,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login User
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

// Edit Profile
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

// --- User Routes ---
// Create User
router.post("/users", async (req, res) => {
  try {
    const { username, email, passwordHash, role } = req.body;
    const userRole = role && role === "admin" ? "admin" : "normaluser";
    const user = new User({ username, email, passwordHash, role: userRole });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single User by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --- Quiz Routes ---
// Create a new Quiz
router.post("/quizzes", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Quizzes
router.get("/quizzes", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single Quiz by ID
router.get("/quizzes/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --- QuizEvent Routes ---
// Create a new Quiz Event
router.post("/quiz-events", async (req, res) => {
  try {
    const quizEvent = new QuizEvent(req.body);
    await quizEvent.save();
    res.status(201).json(quizEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Quiz Events
router.get("/quiz-events", async (req, res) => {
  try {
    const quizEvents = await QuizEvent.find();
    res.status(200).json(quizEvents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single Quiz Event by ID
router.get("/quiz-events/:id", async (req, res) => {
  try {
    const quizEvent = await QuizEvent.findById(req.params.id);
    if (!quizEvent)
      return res.status(404).json({ error: "Quiz event not found" });
    res.status(200).json(quizEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --- UserAnswer Routes ---
// Submit User Answers
router.post("/user-answers", async (req, res) => {
  try {
    const userAnswer = new UserAnswer(req.body);
    await userAnswer.save();
    res.status(201).json(userAnswer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all User Answers for a specific Quiz Event
router.get("/user-answers/:eventId", async (req, res) => {
  try {
    const userAnswers = await UserAnswer.find({ eventId: req.params.eventId });
    res.status(200).json(userAnswers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --- Leaderboard Routes ---
// Create or Update Leaderboard for a Quiz Event
router.post("/leaderboard", async (req, res) => {
  try {
    const { eventId, rankings } = req.body;
    const leaderboard = await Leaderboard.findOneAndUpdate(
      { eventId },
      { rankings },
      { new: true, upsert: true }
    );
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Leaderboard for a specific Quiz Event
router.get("/leaderboard/:eventId", async (req, res) => {
  try {
    const leaderboard = await Leaderboard.findOne({
      eventId: req.params.eventId,
    });
    if (!leaderboard)
      return res.status(404).json({ error: "Leaderboard not found" });
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
