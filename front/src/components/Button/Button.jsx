import React from "react";
import "./button.css";

const Button = ({ variant, children }) => {
  return <button className={`btn ${variant || ""}`}>{children}</button>;
};

export default Button;
