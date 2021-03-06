import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NOTI-GT
            <i className="fa fa-superpowers" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Noticias"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Noticias
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Nosotros"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Acerca de Mi
              </Link>
            </li>

            {/* <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Portafolio
              </Link>
            </li> */}
            <li>
              <a href="http://erick-oliva.web.app" className="btn-mobile">
                <button className="btn-nosotros">Visitar Portafolio</button>
              </a>
            </li>
          </ul>

          {/* {button && (
            <a href="http://erick-oliva.web.app" className="btn-mobile">
              <button className="btn-nosotros">VISITAR PORTAFOLIO</button>
            </a>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
