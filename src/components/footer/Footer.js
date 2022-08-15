import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          CODILEC ENERGY VOTRE ÉLECTRICIEN CERTIFIÉ
        </p>
        <p className="footer-subscription-text">
          3ème Pont Carrefou Zone Industrielle <br />
          Face CGI (Centre de Gestion Integrée) YOPOUGON
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="name"
              type="text"
              placeholder="Votre Nom"
            />
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Votre Email"
            />
            <textarea
              name="message"
              rows="5"
              cols="33"
              placeholder="Votre Message"
            ></textarea>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>A-Propos</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items large">
            <h2>Nos Contacts</h2>
            <p>+225 27 23 43 74 66</p>
            <p>codilec.energy@africap-group.com</p>
            <h3>Horaires d'Ouverture</h3>
            <p>Du Lundi au Vendredi</p>
            <p>8H00-12H00 / 14H00-18H</p>
          </div>
          <div class="footer-link-items">
            <h2>Reseau Social</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              CODILEC-ENERGY
            </Link>
          </div>
          <small class="website-rights">CE © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
