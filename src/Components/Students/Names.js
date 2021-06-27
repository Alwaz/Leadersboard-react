import React from "react";
import "../Students/Names.css";
import Scores from "./Scores";

const Names = () => {
  return (
    <>
      <div className="names__main">
        <div className="students">
          <h3>Alwaz Qazi</h3>
          <p>Mehran University of Engineering and Technology</p>
        </div>

        <div className="score">
          <Scores />
        </div>
      </div>
    </>
  );
};

export default Names;
