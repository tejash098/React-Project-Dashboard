import React from "react";

const Menu = ({ setMode }) => {
  return (
    <>
      <div className="Menu">
        <h2>Welcome to the Quiz</h2>
        <button onClick={() => setMode("quiz")}>Start Quiz</button>
      </div>
    </>
  );
};

export default Menu;
