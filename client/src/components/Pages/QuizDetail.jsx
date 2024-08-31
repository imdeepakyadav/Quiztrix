import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuizDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`/api/quizzes/${id}`);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [id]);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="quiz-detail-container">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
      {/* Implement quiz questions and answer submission */}
    </div>
  );
};

export default QuizDetail;
