import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../style/quiz-attempt.css";

const QuizAttempt = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/quizzes/${quizId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Quiz not found!");
        return res.json();
      })
      .then((data) => {
        setQuiz(data);
      })
      .catch((err) => {
        console.error("Error loading quiz:", err);
      });
  }, [quizId]);

  useEffect(() => {
    setSelectedOption(userAnswers[currentQIndex] || null);
  }, [currentQIndex, userAnswers]);

  const handleNext = () => {
    const currentQ = quiz.questions[currentQIndex];

    setUserAnswers((prev) => ({ ...prev, [currentQIndex]: selectedOption }));

    if (selectedOption === currentQ.correct) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQIndex + 1 < quiz.questions.length) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const selectedOptionForQuestion = (index, question) => {
    const userChoice = userAnswers[index];
    return userChoice ? question.options[userChoice] : "No answer";
  };

  if (!quiz) return <p>Loading quiz...</p>;

  const currentQ = quiz.questions[currentQIndex];

  return (
    <>
      <Header />
      <main className="quiz-attempt-container">
        <h2>{quiz.title}</h2>

        {showResult ? (
          <div className="result-box">
            <h3>Quiz Complete!</h3>
            <p>
              You scored {score} out of {quiz.questions.length}
            </p>

            <div className="review-answers">
              {quiz.questions.map((q, index) => (
                <div key={index} className="review-question">
                  <h4>
                    Question {index + 1}: {q.question}
                  </h4>
                  <p>
                    Your answer:{" "}
                    <strong>{selectedOptionForQuestion(index, q)}</strong>
                  </p>
                  <p>
                    Correct answer: <strong>{q.options[q.correct]}</strong>
                  </p>
                  <p className="explanation">Explanation: {q.explanation}</p>
                </div>
              ))}
            </div>

            {/* Back Button */}
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>
        ) : (
          <div className="question-box">
            <h4>
              Question {currentQIndex + 1}: {currentQ.question}
            </h4>

            <div className="options">
              {Object.entries(currentQ.options).map(([key, value]) => (
                <label
                  key={key}
                  className={`option ${
                    selectedOption === key ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={key}
                    checked={selectedOption === key}
                    onChange={() => setSelectedOption(key)}
                  />
                  {key.toUpperCase()}. {value}
                </label>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className="next-btn"
            >
              {currentQIndex + 1 === quiz.questions.length ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default QuizAttempt;
