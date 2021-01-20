import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

function CardItem2(props) {
  return (
    <>
      <li className="cards__item__monitor">
        <Link className="cards__item__monitor__link" to={props.path}>
          <div className="cards__item__monitor__info">
            <h5 className="cards__item__monitor__text">{props.text}</h5>
          </div>
          <figure className="cards__item__monitor__pic-wrap">
            <Iframe className="thingspeakAPI" src={props.src} />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem2;
