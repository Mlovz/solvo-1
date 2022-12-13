import React from "react";
import "./button.css";

import { Link } from "react-router-dom";

const Button = ({ to, variant, type, children }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${variant || ""}`}>
          {children}
        </Link>
      ) : (
        <button type={type} className={`btn ${variant || ""}`}>
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
