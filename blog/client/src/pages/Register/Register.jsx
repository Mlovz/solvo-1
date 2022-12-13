import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { Input } from "../../components/Forms";
import Heading from "../../components/Heading/Heading";
import "./register.scss";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const { username, password, confirm_password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              placeholder="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              name="confirm_password"
              placeholder="Confirm password"
              value={confirm_password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <Button type="submit">Регистрация</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
