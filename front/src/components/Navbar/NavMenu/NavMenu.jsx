import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../utils";
import { NotifyIcon, UserIcon } from "../../../utils";
import NotifyList from "../NotifyList/NotifyList";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  const notifyDropDown = () => {
    setOpen(!open);
  };

  return (
    <ul className="header-menu">
      {navLinks.map((item, index) => (
        <li key={index}>
          <Link to={item.to} className="link">
            <img src={item.icon} alt="" />
          </Link>
        </li>
      ))}
      <li>
        <div className="link" onClick={notifyDropDown}>
          <img src={NotifyIcon} alt="" />
        </div>

        {open && <NotifyList />}

        {/* <div className={`notify-list ${open ? 'active' : ''}`}>
                  <h3>Уведомлений нет</h3>
                </div> */}
      </li>
      <li>
        <div className="link">
          <img src={UserIcon} alt="" />
        </div>
      </li>
    </ul>
  );
};

export default NavMenu;
