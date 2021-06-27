import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h4 className="logo__heading">Interns</h4>
        <img src="https://interns.pk/img/icons/flag-400.png" />
      </div>

      <div className="header__options">
        <h4>Dashboard</h4>
        <h4>Profile</h4>
        <button className="login_btn">Login</button>
      </div>
    </div>
  );
};

export default Header;
