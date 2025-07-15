import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../style/categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="section-title">All Quiz Categories</h2>
        <p>Here are all available quiz categories:</p>

        <div className="categories-grid">
          {categories.map((cat) => (
            <Link
              to={`/categories/${cat.name.toLowerCase()}`}
              key={cat.id}
              className="category-card"
            >
              <span className="category-icon">{cat.icon}</span>
              <div className="category-name">{cat.name}</div>
              <div className="category-count">{cat.count} quizzes</div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Categories;
