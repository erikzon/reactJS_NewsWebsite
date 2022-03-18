import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import "../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Contactame y visita mis otros proyectos
        </p>
        <div className="input-areas">
          <a href="http://erick-oliva.web.app" className="btn-mobile">
            <button className="btn-nosotros">Visitar Portafolio</button>
          </a>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              NOTI-GT <i className="fa fa-superpowers"></i>
            </Link>
          </div>
          <small className="website-rights">Erick Oliva 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
