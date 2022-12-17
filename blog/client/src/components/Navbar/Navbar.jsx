import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import "./navbar.css";
import { logout } from "../../redux/actions/authActions";

const Navbar = () => {
  const { user, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_wrap">
          <Link to="/" className="logo"></Link>

          <div className="navbar-btns">
            {isAuth ? (
              <>
                <Button to="/add_post">Добавить пост</Button>

                <div className="user-card">
                  <img src={user.avatar} alt="" />
                  <Button variant="outline" onClick={handleLogout}>
                    Выйти
                  </Button>
                </div>
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
