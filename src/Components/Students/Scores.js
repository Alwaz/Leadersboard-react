import React from "react";

const Scores = ({ score }) => {
  return (
    <div className="scores__score">
      <h3 style={{ color: "#1c6f33" }}>{score}</h3>
    </div>
  );
};

export default Scores;
