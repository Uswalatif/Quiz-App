import React from "react";
import Header from "../components/Header";
import "../style/profile.css";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-content">
          <div className="profile-top">
            <div className="avatar-container">
              <div className="avatar">AJ</div>
              <div className="status-badge"></div>
            </div>
            <div className="profile-info">
              <h1 className="username">Alex Johnson</h1>
              <p className="title">Quiz Master Extraordinaire</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-value">1,247</span>
                  <span className="stat-label">Points</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">23</span>
                  <span className="stat-label">Quizzes</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">89%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Level</span>
                </div>
              </div>
              <div className="level-progress">
                <div className="level-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="card">
          <h2 className="card-title">
            <div className="card-icon">🏆</div>
            Achievements
          </h2>
          <div className="achievement-grid">
            <div className="achievement-item">
              <div className="achievement-icon">🎯</div>
              <div className="achievement-name">Perfect Score</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">⚡</div>
              <div className="achievement-name">Speed Demon</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🔥</div>
              <div className="achievement-name">Hot Streak</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🧠</div>
              <div className="achievement-name">Brain Box</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">📚</div>
              <div className="achievement-name">Scholar</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">👑</div>
              <div className="achievement-name">Quiz King</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">
            <div className="card-icon">⏰</div>
            Recent Activity
          </h2>
          <ul className="recent-activity">
            <li className="activity-item">
              <div className="activity-icon">🎯</div>
              <div className="activity-content">
                <div className="activity-text">
                  Completed "Science Quiz" with 95% accuracy
                </div>
                <div className="activity-time">2 hours ago</div>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon">🏆</div>
              <div className="activity-content">
                <div className="activity-text">
                  Earned "Perfect Score" achievement
                </div>
                <div className="activity-time">1 day ago</div>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon">⚡</div>
              <div className="activity-content">
                <div className="activity-text">
                  Set new personal best in "History Quiz"
                </div>
                <div className="activity-time">3 days ago</div>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon">📈</div>
              <div className="activity-content">
                <div className="activity-text">Reached Level 12</div>
                <div className="activity-time">1 week ago</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title">
            <div className="card-icon">📈</div>
            Performance Stats
          </h2>
          <div className="performance-grid">
            <div className="performance-box purple">
              <div className="stat-number">156</div>
              <div className="stat-label">Total Quizzes</div>
            </div>
            <div className="performance-box pink">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Avg. Rating</div>
            </div>
            <div className="performance-box blue">
              <div className="stat-number">42</div>
              <div className="stat-label">Win Streak</div>
            </div>
            <div className="performance-box green">
              <div className="stat-number">18s</div>
              <div className="stat-label">Avg. Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
