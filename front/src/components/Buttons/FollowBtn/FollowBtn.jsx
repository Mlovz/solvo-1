import React, { useState } from "react";
import "./follow-btn.css";

const FollowBtn = () => {
  const [follow, setFollow] = useState(false);

  const onFollow = () => {
    setFollow(true);
  };

  const onUnFollow = () => {
    setFollow(false);
  };

  return (
    <>
      {follow ? (
        <button
          className={`follow-btn  ${follow ? "unfollow" : ""}`}
          onClick={onUnFollow}
        >
          Отписаться
        </button>
      ) : (
        <button className="follow-btn" onClick={onFollow}>
          Подписаться
        </button>
      )}
    </>
  );
};

export default FollowBtn;
