// server/models/models.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// Create User model
const User = mongoose.model("User", userSchema);

// Quiz Schema
const questionSchema = new Schema({
  questionText: { type: String, required: true },
  options: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

const quizSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  creatorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);

// QuizEvent Schema
const participantSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  score: { type: Number, default: 0 },
});

const quizEventSchema = new Schema({
  quizId: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
  title: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  participants: [participantSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const QuizEvent = mongoose.model("QuizEvent", quizEventSchema);

// UserAnswer Schema
const answerSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: "Quiz.questions",
    required: true,
  },
  selectedOption: { type: String, required: true },
});

const userAnswerSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: "QuizEvent", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  answers: [answerSchema],
  submittedAt: { type: Date, default: Date.now },
});

const UserAnswer = mongoose.model("UserAnswer", userAnswerSchema);

// Leaderboard Schema
const rankingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  username: { type: String, required: true },
  score: { type: Number, required: true },
});

const leaderboardSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: "QuizEvent", required: true },
  rankings: [rankingSchema],
  createdAt: { type: Date, default: Date.now },
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

// Export all models
module.exports = {
  User,
  Quiz,
  QuizEvent,
  UserAnswer,
  Leaderboard,
};
