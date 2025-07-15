import React, { useState } from "react";
import "../style/auth.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isLogin && pass !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, pass);
        navigate("/"); // Redirect to home on successful login
      } else {
        await createUserWithEmailAndPassword(auth, email, pass);
        setIsLogin(true); // Switch to login form
        setSuccess("Account created successfully. Please sign in.");
        setEmail("");
        setPass("");
        setConfirm("");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-body">
      <div className="bg-shape" />
      <div className="bg-shape" />
      <div className="bg-shape" />
      <div className="quiz-icon">🧠</div>
      <div className="quiz-icon">❓</div>

      <div className="login-container">
        <div className="logo">
          <h1>QuizMaster</h1>
          <p>Challenge Your Mind</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
            </div>
          )}

          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}
          {success && (
            <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>
          )}

          <button type="submit" className="login-btn">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="signup-link">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a href="#" onClick={toggleMode}>
            {isLogin ? "Sign Up" : "Login"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
