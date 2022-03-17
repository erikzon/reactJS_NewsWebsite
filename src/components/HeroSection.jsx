import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>NOTICIAS GUATEMALA</h1>
      <p>Portal mas importante de noticias mas actuales.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Acerca de nosotros
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LEER NOTICIAS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
