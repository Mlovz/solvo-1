import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import "./navbar.css";

const Navbar = () => {
  const { user } = useSelector((state) => state.authReducer);
  const state = useSelector((state) => state);
  const token = localStorage.getItem("token");

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_wrap">
          <div className="logo"></div>

          <div className="navbar-btns">
            {token ? (
              <>
                <Button>Добавить пост</Button>
                <h3>{user.username}</h3>
                <h3>{user.lastname}</h3>
              </>
            ) : (
              <>
                <Button to="/login">Войти</Button>
                <Button to="/register" variant="outline">
                  Регистрация
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
