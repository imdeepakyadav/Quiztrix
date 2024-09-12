import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import Leaderboard from "./components/Pages/Leaderboard";
import Login from "./components/Pages/Login";
import Quizzes from "./components/Pages/Quizzes";
import Register from "./components/Pages/Register";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
