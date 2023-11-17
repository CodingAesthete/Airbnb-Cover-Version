import React from "react";
import RedStar from "../img/red-star.png";

function Card({ key, item }) {
  let badge;
  if (item.openSpots == 0) {
    badge = "SOLD OUT";
  } else if (item.place == "Varna") {
    badge = "LIVE"
  }

  return (
    <div className="card">
      {badge && <div className="badge">{badge}</div>}
      <div>
        <img src={item.img} />
      </div>
      <div className="card-details">
        <img className="red-star" src={RedStar} />
        <span>{item.stats.rating}</span>
        <span>({item.stats.votes})</span>
        {item.place && <span>Place: {item.place}</span>}
      </div>
      <div className="card-description">{item.desc}</div>
      <div className="card-price">{item.price}</div>
    </div>
  )
}

export default Card;