import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from "./pages/home";
import CreateQuiz from "./pages/CreateQuiz";
import Leaderboard from "./pages/leaderboard";
import About from "./pages/about";
import Categories from "./pages/categories";
import Profile from "./pages/profile";
import Quizzes from "./pages/Quizzes";
import CategoryDetails from "./pages/CategoryDetails";
import QuizAttempt from "./pages/QuizAttempt";
import Auth from "./pages/Auth";
import Logout from "./pages/logout";
// import "./index.css";
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: 50 }}>Loading...</div>;
  }

  return (
    <>
      <div className="container-fluid">
        <Routes>
          {!user ? (
            // Routes when not logged in
            <>
              <Route path="/auth" element={<Auth />} />
              {/* Redirect all other paths to /auth */}
              <Route path="*" element={<Navigate to="/auth" replace />} />
            </>
          ) : (
            // Routes when logged in
            <>
              <Route path="/" element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route
                path="/categories/:categoryName"
                element={<CategoryDetails />}
              />
              <Route path="/quiz/:quizId" element={<QuizAttempt />} />
              <Route path="/logout" element={<Logout />} />
              {/* Redirect all other paths to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
