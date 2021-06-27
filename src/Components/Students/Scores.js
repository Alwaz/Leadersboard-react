import React from "react";

const Scores = ({ score }) => {
  return (
    <div className="scores__score">
      <h3>{score}</h3>
    </div>
  );
};

export default Scores;
