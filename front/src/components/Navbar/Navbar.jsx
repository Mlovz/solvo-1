import React from "react";
import "./navbar.css";

import Logo from "../../assets/brand/logo.png";
import { SearchIcon } from "../../utils";
import { NavAuth, NavMenu } from "./index";

const Navbar = () => {
  const isAuth = true;

  return (
    <div className="header">
      <div className="container">
        <div className="header-wrap">
          <img src={Logo} alt="" />

          <form className="header-form">
            <input type="text" />
            <button type="submit">
              <img src={SearchIcon} alt="" />
            </button>
          </form>

          {isAuth ? <NavMenu /> : <NavAuth />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
