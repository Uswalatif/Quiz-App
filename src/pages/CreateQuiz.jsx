import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "../style/create-quiz.css";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [quizCategory, setQuizCategory] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [quizTags, setQuizTags] = useState("");
  const [questions, setQuestions] = useState([
    {
      question: "",
      options: { a: "", b: "", c: "", d: "" },
      correct: "a",
      explanation: "",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuiz = {
      id: uuidv4().slice(0, 4),
      icon: "❓",
      title: quizTitle,
      desc: quizDescription,
      stats: `${questions.length} Questions, ${timeLimit} mins, 0 taken`,
      difficulty: quizDifficulty,
      category: quizCategory,
      questions,
    };

    try {
      await axios.post("http://localhost:4000/quizzes", newQuiz);

      // Check and update category count or add new
      const res = await axios.get("http://localhost:4000/categories");
      const categoryList = res.data;
      const existing = categoryList.find(
        (cat) => cat.name.toLowerCase() === quizCategory.toLowerCase()
      );

      if (existing) {
        await axios.patch(`http://localhost:4000/categories/${existing.id}`, {
          count: existing.count + 1,
        });
      } else {
        await axios.post("http://localhost:4000/categories", {
          id: uuidv4(),
          icon: "❓",
          name: quizCategory,
          count: 1,
        });
      }

      alert("Quiz created successfully!");
    } catch (err) {
      console.error("Error creating quiz:", err);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="content-section container">
          <div className="section-header">
            <h2 className="section-title">Create Your Own Quiz</h2>
          </div>

          <div className="create-quiz-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="quiz-title">Quiz Title</label>
                <input
                  type="text"
                  id="quiz-title"
                  placeholder="Enter an engaging quiz title"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="quiz-description">Description</label>
                <textarea
                  id="quiz-description"
                  rows="3"
                  placeholder="Describe what your quiz covers and what participants will learn"
                  value={quizDescription}
                  onChange={(e) => setQuizDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quiz-category">Category</label>
                  <select
                    id="quiz-category"
                    value={quizCategory}
                    onChange={(e) => setQuizCategory(e.target.value)}
                  >
                    <option value="">Select a category</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Technology">Technology</option>
                    <option value="Literature">Literature</option>
                    <option value="Sports">Sports</option>
                    <option value="Arts">Arts</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quiz-difficulty">Difficulty Level</label>
                  <select
                    id="quiz-difficulty"
                    value={quizDifficulty}
                    onChange={(e) => setQuizDifficulty(e.target.value)}
                  >
                    <option value="">Select difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="time-limit">Time Limit (minutes)</label>
                  <input
                    type="number"
                    id="time-limit"
                    min="1"
                    max="180"
                    placeholder="30"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quiz-tags">Tags (comma-separated)</label>
                  <input
                    type="text"
                    id="quiz-tags"
                    placeholder="education, learning, fun"
                    value={quizTags}
                    onChange={(e) => setQuizTags(e.target.value)}
                  />
                </div>
              </div>

              <div className="questions-section">
                <h3>Questions</h3>
                <button
                  type="button"
                  className="add-question-btn"
                  onClick={() =>
                    setQuestions([
                      ...questions,
                      {
                        question: "",
                        options: { a: "", b: "", c: "", d: "" },
                        correct: "a",
                        explanation: "",
                      },
                    ])
                  }
                >
                  + Add Question
                </button>

                <div id="questions-container">
                  {questions.map((q, index) => (
                    <div key={index} className="question-item">
                      <div className="form-group">
                        <label>{`Question ${index + 1}`}</label>
                        <input
                          type="text"
                          placeholder="Enter your question"
                          value={q.question}
                          onChange={(e) => {
                            const updated = [...questions];
                            updated[index].question = e.target.value;
                            setQuestions(updated);
                          }}
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Option A</label>
                          <input
                            type="text"
                            placeholder="Option A"
                            value={q.options.a}
                            onChange={(e) => {
                              const updated = [...questions];
                              updated[index].options.a = e.target.value;
                              setQuestions(updated);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>Option B</label>
                          <input
                            type="text"
                            placeholder="Option B"
                            value={q.options.b}
                            onChange={(e) => {
                              const updated = [...questions];
                              updated[index].options.b = e.target.value;
                              setQuestions(updated);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Option C</label>
                          <input
                            type="text"
                            placeholder="Option C"
                            value={q.options.c}
                            onChange={(e) => {
                              const updated = [...questions];
                              updated[index].options.c = e.target.value;
                              setQuestions(updated);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>Option D</label>
                          <input
                            type="text"
                            placeholder="Option D"
                            value={q.options.d}
                            onChange={(e) => {
                              const updated = [...questions];
                              updated[index].options.d = e.target.value;
                              setQuestions(updated);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Correct Answer</label>
                        <select
                          value={q.correct}
                          onChange={(e) => {
                            const updated = [...questions];
                            updated[index].correct = e.target.value;
                            setQuestions(updated);
                          }}
                        >
                          <option value="a">Option A</option>
                          <option value="b">Option B</option>
                          <option value="c">Option C</option>
                          <option value="d">Option D</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Explanation (optional)</label>
                        <textarea
                          rows="2"
                          placeholder="Explain why this is the correct answer"
                          value={q.explanation}
                          onChange={(e) => {
                            const updated = [...questions];
                            updated[index].explanation = e.target.value;
                            setQuestions(updated);
                          }}
                        ></textarea>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Create Quiz
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default CreateQuiz;
