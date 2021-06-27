import React from "react";
import "../LeaderBoard/LeadersBoard.css";
import Names from "../Students/Names";

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
        <Names
          name="Alwaz Qazi"
          university="Mehran University of Engineering and Technology"
        />
        <Names name="Muhammad Rizzan Imran" university="SZABIST" />
        <Names name="Amnah Siddiqua" university="NUST CEME" />
        <Names name="Farhan Ullah" university="University of Malakand" />
        <Names name="Zakir Hussain" university="VU (BSCS 7th Semester)" />
        <Names name="Adnan Merchant" university="SZABIST" />
        <Names
          name="Huzaifa Shahid"
          university="Bahria University Karachi Campus"
        />
        <Names name="Ahmed ullah Sidiqui" university="SZABIST" />
      </div>
    </div>
  );
};

export default LeadersBoard;
