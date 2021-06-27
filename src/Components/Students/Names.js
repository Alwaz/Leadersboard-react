import React from "react";
import "../Students/Names.css";
import Scores from "./Scores";

const Names = ({ name, university }) => {
  return (
    <>
      <div className="names__main">
        <div className="students">
          <h3>{name}</h3>
          <p>{university}</p>
        </div>

        <div className="score">
          <Scores score={349} />
        </div>
      </div>
    </>
  );
};

export default Names;
