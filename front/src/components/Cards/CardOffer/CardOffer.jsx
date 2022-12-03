import React from "react";
<<<<<<< HEAD
import Button from "../../Button/Button";
import FollowBtn from "../../FollowBtn/FollowBtn";
=======
import Button from "../../Buttons/Button";
import FollowBtn from "../../Buttons/FollowBtn/FollowBtn";
>>>>>>> 707862bbdae9de39258e1edede8d00e344a7939a
import UserCard from "../UserCard/UserCard";
import "./card-offer.css";

const CardOffer = ({ data, text }) => {
  return (
    <div className="card-offer">
      <h6>{text}</h6>

      <div className="card-offer-users">
        {data?.map((user, index) => (
<<<<<<< HEAD
          <UserCard key={index} tag={user.tag} avatar={user.avatar}>
=======
          <UserCard
            key={index}
            username={user.name}
            tag={user.tag}
            avatar={user.avatar}
            size={40}
          >
>>>>>>> 707862bbdae9de39258e1edede8d00e344a7939a
            <FollowBtn />
          </UserCard>
        ))}
      </div>
    </div>
  );
};

export default CardOffer;
