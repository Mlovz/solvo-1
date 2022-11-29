import React from "react";
import Button from "../../Button/Button";
import UserCard from "../UserCard/UserCard";
import "./card-offer.css";

const CardOffer = ({ data, text }) => {
  return (
    <div className="card-offer">
      <h6>{text}</h6>

      <div className="card-offer-users">
        {data?.map((user, index) => (
          <UserCard key={index} tag={user.tag} avatar={user.avatar}>
            <Button>Подписаться</Button>
          </UserCard>
        ))}
      </div>
    </div>
  );
};

export default CardOffer;
