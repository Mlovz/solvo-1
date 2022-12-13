import React from "react";
import "./login.scss";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { Input } from "../../components/Forms";
import { api } from "../../api";
import { login } from "../../redux/actions/authActions";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUserName(e.target.value.toLowerCase());
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(login({ username, password }));
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1>Войти</h1>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <Input
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChangePassword}
              required
            />
          </div>

          <div className="login-forgot">
            <Link to="/forgot_password" className="fs-12 ">
              Забыли пароль?
            </Link>
          </div>

          <div className="form-group">
            <Button type="submit">Войти</Button>
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
