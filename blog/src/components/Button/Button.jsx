import React from "react";
import "./button.css";

const Button = ({ to, variant, children }) => {
  return (
    <>
      {to ? (
        <a href={to} className={`btn ${variant || ""}`}>
          {children}
        </a>
      ) : (
        <button className={`btn ${variant || ""}`}>{children}</button>
      )}
    </>
  );
};
export default Button;
