import React from "react";
import CardItem2 from "../components/CardItem2";
import "./MonitorCard.css";

function MonitorCard2() {
  return (
    <>
      <div className="cards__monitor">
        <h1>Product Location: Kampung Sungai Dara, Tanjong Malim, Perak</h1>
        <div className="cards__container__monitor">
          <div className="cards__wrapper__monitor">
            <ul className="cards__items__monitor">
              <CardItem2
                src="https://thingspeak.com/channels/1254135/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=++&type=line"
                text="Humidity Analytic"
                path="/monitor"
              />
              <CardItem2
                src="https://thingspeak.com/channels/1254135/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=++&type=line"
                text="Temperature Analytic"
                path="/monitor"
              />
              <CardItem2
                src="https://thingspeak.com/channels/1254135/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
                text="Water Level Analytic"
                path="/monitor"
              />
            </ul>
            <ul className="cards__items__monitor">
              <CardItem2
                src="https://thingspeak.com/channels/1254135/widgets/249231"
                text="Current Humidity ( > 90% Raining )"
                path="/monitor"
              />
              <CardItem2
                src="https://thingspeak.com/channels/1254135/widgets/249230"
                text="Current Temperature"
                path="/monitor"
              />
              <CardItem2
                src="https://thingspeak.com/channels/1254135/widgets/253562"
                text="Current Water Level ( 8m : Orange, 11m : Red ) "
                path="/monitor"
              />
            </ul>
            <img
              className="waterlevel_legend"
              src={"../images/water_level_legend2.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MonitorCard2;
