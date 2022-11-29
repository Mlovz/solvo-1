import React from "react";
import "./home.css";
import CardOffer from "../../components/Cards/CardOffer/CardOffer";

const Home = (props) => {
  const data = [
    {
      name: "Abu",
      tag: "@abu",
      avatar: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    },
    {
      name: "Zeinap",
      tag: "@zeinap",
      avatar: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    },
    {
      name: "Abu",
      tag: "@abu",
      avatar: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    },
    {
      name: "Abu",
      tag: "@abu",
      avatar: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    },
  ];

  return (
    <div className="home">
      <div className="home-left">as</div>
      <div className="home-right">
        <div className="home-offers">
          <CardOffer data={data} text="Предложения"></CardOffer>

          <CardOffer data={data} text="Популярное"></CardOffer>
        </div>
      </div>
    </div>
  );
};

export default Home;
