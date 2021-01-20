import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Monitor Your Current Location from Flood Disaster: </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpg"
              text="Jalan Bagan Lalang"
              label="Seberang Perai, Penang"
              path="/monitor"
            />
            <CardItem
              src="images/img-11.jpg"
              text="Kampung Sungai Dara"
              label="Tanjong Malim, Perak"
              path="/monitor2"
            />
            <CardItem
              src="images/img-15.jpg"
              text="Sungai Setiu, Kampung Besut"
              label="Setiu, Terrenganu"
              path="/monitor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-12.jpg"
              text="Kampung Permatang Rawa"
              label="Seberang Perai, Penang"
              path="/monitor"
            />
            <CardItem
              src="images/img-13.jpg"
              text="Jalan Taman Setiawangsa"
              label="Kuala Lumpur"
              path="/monitor"
            />
            <CardItem
              src="images/img-14.jpg"
              text="Sungai Jempol"
              label="Maran, Pahang"
              path="/monitor"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
