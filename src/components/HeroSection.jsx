import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/videos/video-2.mp4"
        autoPlay
        loop
        muted
        style={{ display: "block" }}
      />
      <h1>NOTICIAS GUATEMALA</h1>
      <p>El portal mas importante de noticias en la region.</p>
      <div className="hero-btns">
        <Link to="/nosotros" className="btn-mobile">
          <button className="btn-nosotros">Acerca de mi</button>
        </Link>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LEER NOTICIAS
          <i className="fa fa-align-left"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
