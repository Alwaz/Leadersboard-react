import React from "react";
import "../Students/Names.css";
import Scores from "./Scores";

const Names = ({ name, university, score }) => {
  return (
    <>
      <div className="names__main">
        <div className="students">
          <h3>{name}</h3>
          <p>{university}</p>
        </div>

        <div className="score">
          <h3 style={{ color: "#1c6f33" }}>{score}</h3>
        </div>
      </div>
    </>
  );
};

export default Names;
