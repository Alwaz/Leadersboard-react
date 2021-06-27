import React from "react";
import "../LeaderBoard/LeadersBoard.css";

const LeadersBoard = () => {
  return (
    <div className="leaderBoard">
      <div className="leaderBoard__heading">
        <h1>Leaders Board</h1>
      </div>

      <div className="leaderBoard__names__scores">
        <p>Names</p>
        <p>scores</p>
      </div>
    </div>
  );
};

export default LeadersBoard;
