import React from "react";
import "./nav-auth.css";
import Button from "../../Button/Button";

const NavAuth = () => {
  return (
    <div className="nav-auth">
      <Button variant="solid">Регистрация</Button>
      <Button variant="outline">Войти</Button>
    </div>
  );
};

export default NavAuth;
