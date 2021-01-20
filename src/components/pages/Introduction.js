import React from "react";
import "../../App.css";

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="intro_container">
        {/* <img className="intro__img" src="/images/profile.jpg" /> */}
        <h1 className="intro_title">
          The Project for Flood Detection and Prevention
        </h1>
        <p className="intro_phrase">
          "Flood has been a problem since forever and still hitting us during
          this era of technological advancement which we could prevent it from
          happening by monitoring the flood phenomenon and take action for any
          incoming flood. This system is targeted to suburban areas with
          internet connectivity and rural areas that have no internet connection
          to gain this kind of monitoring functionality from our website. So we
          implement a feature to those areas with SMS feature which does not
          need the internet to use but only a working phone and an active sim
          card. To implement this system in your area please contact us for
          further inspection for full implementation of our project in your
          area"
        </p>
      </div>
    </div>
  );
}
