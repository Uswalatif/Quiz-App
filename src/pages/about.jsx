import React from "react";
import Header from "../components/Header";
import "../style/about.css";

const About = () => {
  return (
    <>
      <Header />

      <main className="about-main">
        <div className="about-container container">
          <div className="about-image">
            <img src="/images/quiz.png" alt="QuizMaster" />
          </div>

          <section className="content-section">
            <h2 className="section-title"> QuizMaster</h2>

            <p>
              QuizMaster is a modern quiz platform designed to make learning
              fun, interactive, and competitive. Whether you're a curious
              learner or a passionate quizzer, our platform helps you grow your
              knowledge across topics like Science, Technology, History, and
              more.
            </p>

            <p>
              Create your own quizzes, explore community-made challenges, and
              test yourself with detailed questions and instant feedback. Each
              quiz is crafted to help you learn, revise, and enjoy the process
              along the way.
            </p>

            <p>
              Join our growing community today and discover a smarter, more
              enjoyable way to learn—one question at a time.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
