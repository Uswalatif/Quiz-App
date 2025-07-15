import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import "../style/quizzes.css"; // 👈 CSS for this page

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/quizzes")
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error("Error fetching quizzes:", err));
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="section-title">All Featured Quizzes</h2>
        <p className="section-subtitle">
          Browse and take your favorite quizzes below:
        </p>

        <div className="quiz-grid">
          {quizzes.map((quiz, i) => (
            <div key={i} className="quiz-card">
              <div className="quiz-header">{quiz.icon}</div>
              <div className="quiz-content">
                <h3 className="quiz-title">{quiz.title}</h3>
                <p className="quiz-description">{quiz.desc}</p>
                <div className="quiz-stats">
                  <span>{quiz.stats.split(",")[0]}</span>
                  <span>⏱️ {quiz.stats.split(",")[1].trim()}</span>
                  <span>👥 {quiz.stats.split(",")[2].trim()}</span>
                </div>
                <div className="quiz-footer">
                  <span className={`difficulty ${quiz.difficulty}`}>
                    {quiz.difficulty.charAt(0).toUpperCase() +
                      quiz.difficulty.slice(1)}
                  </span>
                  <Link to={`/quiz/${quiz.id}`} className="play-btn">
                    Start Quiz
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Quizzes;
