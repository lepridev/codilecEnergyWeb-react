import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logocodilec from "../../assets/logo-codilec.png";
import Button from "../Button";
import "./Navbar.css";

const Navbar = () => {
  //Toggle l'icone du menu
  const [click, setClick] = useState(false);

  //Afficher le boutton SIGN-UP
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

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
            <img
              className="logo"
              src={logocodilec}
              alt="logo codilec energy cote divoire"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            onClick={closeMobileMenu}
          >
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apropos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                A-propos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nos-prestations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Nos Prestations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nos-realisations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Nos Realisations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                CONNEXION
              </Link>
            </li>
          </ul>
          {button && (
            <Button lien="contact" buttonStyle="btn--outline">
              CONNEXION
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
