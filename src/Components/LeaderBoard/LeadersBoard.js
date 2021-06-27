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
          score={500}
        />
        <Names name="Muhammad Rizzan Imran" university="SZABIST" score={449} />
        <Names name="Amnah Siddiqua" university="NUST CEME" score={446} />
        <Names
          name="Farhan Ullah"
          university="University of Malakand"
          score={443}
        />
        <Names
          name="Zakir Hussain"
          university="VU (BSCS 7th Semester)"
          score={436}
        />
        <Names name="Adnan Merchant" university="SZABIST" score={420} />
        <Names
          name="Huzaifa Shahid"
          university="Bahria University Karachi Campus"
          score={414}
        />
        <Names name="Ahmed ullah Sidiqui" university="SZABIST" score={413} />
      </div>
    </div>
  );
};

export default LeadersBoard;
