import axios from "axios";
import React, { useEffect, useState } from "react";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quizzes data from backend
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("/api/quizzes");
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes data:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="quizzes">
      <h2>Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quizzes;
