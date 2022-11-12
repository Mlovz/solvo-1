import React from "react";
import "./card.css"

function Card({el}) {
    return (
        <div className="card">
        <img src={el.img} />
        <div>
          <span>{el.price}</span>
          <strong>{el.oldPrice}</strong>
        </div>
        <p>{el.desc}</p>
      </div>
    )
}

export default Card