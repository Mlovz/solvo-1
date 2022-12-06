import React from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const data = {
    username: "Lida",
    lastname: "Garbakova",
    age: 75,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (username === data.username) {
        dispatch({
          type: "AUTH",
          payload: {
            user: {
              ...data,
            },
            token: Math.random(),
          },
        });
        navigate("/");
        setLoading(false);
      } else {
        alert("Неправильный пароль или логин!");
      }
    }, 2000);
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1>Войти</h1>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChangePassword}
            />
          </div>

          <div className="login-forgot">
            <Link to="/forgot_password" className="fs-12 ">
              Забыли пароль?
            </Link>
          </div>

          <div className="form-group">
            <Button type="submit">{loading ? "Loading..." : "Войти"}</Button>
          </div>
        </form>
        <p className="fs-12 login-link">
          Нет аккаунта?
          <Link to="/register">Создать</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
