import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Button2 } from "./Button2";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>EARLY FLOOD DETECTION</h1>
      <p>Want to take the first step?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH DEMO <i className="far fa-play-circle" />
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;
