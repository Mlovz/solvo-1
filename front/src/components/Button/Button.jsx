import React from "react";
import "./button.css";

const Button = (props) => {
  const { variant, children } = props;

  return <button className={`btn  ${variant || ""}`}>{children}</button>;
};

export default Button;
