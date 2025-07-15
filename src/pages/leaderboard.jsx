import React from "react";
import Header from "../components/Header";
import "../style/leaderboard.css";

const Leaderboard = () => {
  return (
    <>
      <Header />

      <main>
        <section className="content-section container">
          <div className="section-header">
            <h2 className="section-title">Leaderboard</h2>
            <a href="#" className="view-all-btn">
              View Full Rankings
            </a>
          </div>

          <div className="leaderboard">
            <div className="leaderboard-header">
              <h3>Top Performers This Week</h3>
            </div>

            <div className="leaderboard-item">
              <div className="rank gold">1</div>
              <div className="user-info">
                <div className="username">Alex Johnson</div>
                <div className="user-stats">
                  🏆 Champion • 45 quizzes completed
                </div>
              </div>
              <div className="score">2,847</div>
            </div>

            <div className="leaderboard-item">
              <div className="rank silver">2</div>
              <div className="user-info">
                <div className="username">Sarah Chen</div>
                <div className="user-stats">
                  🥈 Master • 38 quizzes completed
                </div>
              </div>
              <div className="score">2,634</div>
            </div>

            <div className="leaderboard-item">
              <div className="rank bronze">3</div>
              <div className="user-info">
                <div className="username">Mike Rodriguez</div>
                <div className="user-stats">
                  🥉 Expert • 42 quizzes completed
                </div>
              </div>
              <div className="score">2,521</div>
            </div>

            <div className="leaderboard-item">
              <div className="rank">4</div>
              <div className="user-info">
                <div className="username">Emma Watson</div>
                <div className="user-stats">
                  ⭐ Advanced • 31 quizzes completed
                </div>
              </div>
              <div className="score">2,398</div>
            </div>

            <div className="leaderboard-item">
              <div className="rank">5</div>
              <div className="user-info">
                <div className="username">David Kim</div>
                <div className="user-stats">
                  📚 Scholar • 29 quizzes completed
                </div>
              </div>
              <div className="score">2,267</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Leaderboard;
