import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../style/category-details.css";

const CategoryDetails = () => {
  const { categoryName } = useParams();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/quizzes")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (quiz) => quiz.category?.toLowerCase() === categoryName.toLowerCase()
        );
        setQuizzes(filtered);
      })
      .catch(console.error);
  }, [categoryName]);

  return (
    <>
      <Header />
      <main className="category-details-container">
        <h2 className="category-details-title">Quizzes in {categoryName}</h2>
        <p className="category-details-subtext">
          Explore all quizzes under this category.
        </p>

        {quizzes.length === 0 ? (
          <p className="no-quizzes">No quizzes found in this category.</p>
        ) : (
          <div className="quiz-card-list">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="quiz-card">
                <h3>{quiz.title}</h3>
                <p>{quiz.desc}</p>
                <p className="badge">Difficulty: {quiz.difficulty}</p>
                <div className="quiz-card-buttons">
                  <Link to={`/quiz/${quiz.id}`} className="start-btn">
                    Start
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default CategoryDetails;
