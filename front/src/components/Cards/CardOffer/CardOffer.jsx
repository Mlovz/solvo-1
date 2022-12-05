import React from "react";
import FollowBtn from "../../Buttons/FollowBtn/FollowBtn";
import UserCard from "../UserCard/UserCard";
import "./card-offer.css";

const CardOffer = ({ data, text }) => {
  return (
    <div className="card-offer">
      <h6>{text}</h6>

      <div className="card-offer-users">
        {data?.map((user, index) => (
          <UserCard
            key={index}
            username={user.name}
            tag={user.tag}
            avatar={user.avatar}
            size={40}
          >
            <FollowBtn />
          </UserCard>
        ))}
      </div>
    </div>
  );
};

export default CardOffer;
