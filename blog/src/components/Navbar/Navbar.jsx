import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_wrap">
          <div className="logo"></div>

          <div className="navbar-btns">
            <Button to="/login">Войти</Button>
            <Button to="/register" variant="outline">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
