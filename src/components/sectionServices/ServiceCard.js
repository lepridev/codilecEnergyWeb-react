import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Button.css";
import "./Services.css";

const ServiceCard = ({ titre, lien, link, texte }) => {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to="/nos-prestations">
          <figure className="cards-item-pic-wrap" data-category={titre}>
            <img
              src={lien}
              alt="presentation service"
              className="cards-item-img"
            />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{texte}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default ServiceCard;
