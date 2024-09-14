const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Import models
const {
  User,
  Quiz,
  QuizEvent,
  UserAnswer,
  Leaderboard,
} = require("./models/models");

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Socket.io setup
io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Basic route
app.get("/", (req, res) => {
  res.send("Quiztrix Backend");
});

// --- User Routes ---
app.post("/api/users", async (req, res) => {
  try {
    const { username, email, passwordHash, role } = req.body;
    // Default role is 'user', only allow 'admin' role if explicitly set
    const userRole = role && role === "admin" ? "admin" : "user";
    const user = new User({ username, email, passwordHash, role: userRole });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --- Quiz Routes ---
// Create a new quiz
app.post("/api/quizzes", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all quizzes
app.get("/api/quizzes", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single quiz by ID
app.get("/api/quizzes/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --- QuizEvent Routes ---
// Create a new quiz event
app.post("/api/quiz-events", async (req, res) => {
  try {
    const quizEvent = new QuizEvent(req.body);
    await quizEvent.save();
    res.status(201).json(quizEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all quiz events
app.get("/api/quiz-events", async (req, res) => {
  try {
    const quizEvents = await QuizEvent.find();
    res.status(200).json(quizEvents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single quiz event by ID
app.get("/api/quiz-events/:id", async (req, res) => {
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
// Submit user answers
app.post("/api/user-answers", async (req, res) => {
  try {
    const userAnswer = new UserAnswer(req.body);
    await userAnswer.save();
    res.status(201).json(userAnswer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all user answers for a specific quiz event
app.get("/api/user-answers/:eventId", async (req, res) => {
  try {
    const userAnswers = await UserAnswer.find({ eventId: req.params.eventId });
    res.status(200).json(userAnswers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// --- Leaderboard Routes ---
// Create or update leaderboard for a quiz event
app.post("/api/leaderboard", async (req, res) => {
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

// Get leaderboard for a specific quiz event
app.get("/api/leaderboard/:eventId", async (req, res) => {
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

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
