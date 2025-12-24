import React from "react";

const End = ({ setScore, setMode, score, totalQuestions }) => {
  const restartQuiz = () => {
    setScore(0);
    setMode("menu");
  };

  return (
    <div className="EndScreen">
      <h2>Quiz Finished!</h2>
      <h3>
        Your Score: {score} / {totalQuestions}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default End;
