import React from "react";
import "../LeaderBoard/LeadersBoard.css";
import Names from "../Students/Names";
import Scores from "../Students/Scores";

const LeadersBoard = () => {
  return (
    <div className="leaderBoard">
      <div className="leaderBoard__heading">
        <h1>Leaders Board</h1>
      </div>

      <div className="leaderBoard__names__scores">
        <p>Name</p>
        <p>Score</p>
      </div>

      <div className="student">
        <Names />
        <Scores />
      </div>
    </div>
  );
};

export default LeadersBoard;
