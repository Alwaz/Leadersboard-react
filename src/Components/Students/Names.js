import React, { useState } from "react";
import "../Students/Names.css";

const Names = ({ name, university }) => {
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="names__main">
        <div className="students">
          <div className="student__details">
            <h3>{name}</h3>
            <p>{university}</p>
          </div>

          <div className="add__score">
            <button onClick={() => setScore(score + 1)}>
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>

        <div className="score">
          <h3 style={{ color: "#1c6f33" }}>{score}</h3>
        </div>
      </div>
    </>
  );
};

export default Names;
