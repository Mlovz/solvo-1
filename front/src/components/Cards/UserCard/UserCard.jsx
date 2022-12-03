import React from "react";
import "./user-card.css";

const UserCard = ({ username, size, avatar, tag, children }) => {
  return (
    <div className="user-card">
      <div className="user-card-block">
        <img
          style={{ width: size, height: size }}
          src={
            avatar
              ? avatar
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt=""
        />
        <div className="user-card-info">
          <h4>{username}</h4>
          <span>{tag}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default UserCard;
