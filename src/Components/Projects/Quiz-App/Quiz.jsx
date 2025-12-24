import React, { useState, useEffect } from "react";
import { QuizData } from "./QuizData";

const Quiz = ({ setMode, setScore, score }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          nextQuestion();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currQuestion]);

  const nextQuestion = () => {
    if (QuizData[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setOptionChosen("");
    setTimeLeft(10);

    if (currQuestion === QuizData.length - 1) {
      setMode("end");
    } else {
      setCurrQuestion(currQuestion + 1);
    }
  };

  return (
    <div className="Quiz">
      <div className="timer">time left : {timeLeft}s</div>
      <h3>{QuizData[currQuestion].prompt}</h3>
      <div className="options">
        <button
          className={optionChosen === "A" ? "selected" : ""}
          onClick={() => setOptionChosen("A")}
        >
          {QuizData[currQuestion].optionA}
        </button>
        <button
          className={optionChosen === "B" ? "selected" : ""}
          onClick={() => setOptionChosen("B")}
        >
          {QuizData[currQuestion].optionB}
        </button>
        <button
          className={optionChosen === "C" ? "selected" : ""}
          onClick={() => setOptionChosen("C")}
        >
          {QuizData[currQuestion].optionC}
        </button>
        <button
          className={optionChosen === "D" ? "selected" : ""}
          onClick={() => setOptionChosen("D")}
        >
          {QuizData[currQuestion].optionD}
        </button>
      </div>
      <button className="next-btn" onClick={nextQuestion}>
        {currQuestion === QuizData.length - 1 ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
};

export default Quiz;
