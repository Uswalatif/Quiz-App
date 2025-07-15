import React from "react";
import { Link } from "react-router-dom"; // 👈 Import Link
import "./header.css";

const Header = () => {
  return (
    // <header>
    <nav className=" headerx container-fluid">
      <div className="logo">QuizMaster</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/create-quiz">Create Quiz</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Profile and Logout Buttons */}
      <div className="user-actions">
        <Link to="/profile" className="profile-btn">
          My Profile
        </Link>
        <Link to="/logout" className="profile-btn">
          Logout
        </Link>
      </div>
    </nav>
    // </header>
  );
};

export default Header;
