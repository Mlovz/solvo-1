import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { Input } from "../../components/Forms";
import Heading from "../../components/Heading/Heading";
import "./register.scss";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password, confirm_password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value.toLowerCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      return setErr("Пароли не совпадают");
    }
    setErr("");

    dispatch(register(userData, navigate));
  };

  return (
    <div className="register">
      <div className="register-box">
        <Heading>Регистрация</Heading>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              name="username"
              placeholder="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              name="confirm_password"
              type="password"
              placeholder="Confirm password"
              value={confirm_password}
              onChange={handleChange}
            />
          </div>
          <span>{err}</span>

          <div className="form-group">
            <Button type="submit">Регистрация</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
