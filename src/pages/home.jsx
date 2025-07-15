import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

import Header from "../components/Header";
import "../style/home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  // Fisher-Yates shuffle function to randomize quizzes
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    // Fetch categories
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);

    // Fetch quizzes and show a random mix of featured quizzes (up to 8)
    fetch("http://localhost:4000/quizzes")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter((quiz) => quiz.featured);
        const shuffled = shuffleArray(featured);
        const featuredQuizzes = shuffled.slice(0, 8); // Show up to 8 quizzes
        setQuizzes(featuredQuizzes);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>Elevate Your Knowledge</h1>
            <p>
              Challenge yourself with thousands of quizzes across multiple
              categories. Learn, compete, and grow!
            </p>
            <div className="cta-buttons">
              <a href="#categories" className="btn btn-primary">
                Start Quiz
              </a>
              <a href="/create-quiz" className="btn btn-secondary">
                Create Quiz
              </a>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Categories Section */}
          <section className="content-section" id="categories">
            <div className="section-header">
              <h2 className="section-title">Browse Categories</h2>
              <a href="/categories" className="view-all-btn">
                View All
              </a>
            </div>

            <div className="categories-grid">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="category-card"
                  onClick={() =>
                    (window.location.href = "/categories#" + cat.name)
                  }
                >
                  <span className="category-icon">{cat.icon}</span>
                  <div className="category-name">{cat.name}</div>
                  <div className="category-count">{cat.count} quizzes</div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Quizzes Section */}
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">Featured Quizzes</h2>
              <a href="/quizzes" className="view-all-btn">
                View All
              </a>
            </div>

            <div className="quiz-grid">
              {quizzes.length === 0 ? (
                <p>No featured quizzes available.</p>
              ) : (
                quizzes.map((quiz) => (
                  <div key={quiz.id} className="quiz-card">
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
                ))
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
