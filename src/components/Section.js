import React from "react";
import "./Section.css";

const Section = ({ section, titre, texte, lien }) => {
  return (
    <div className={section}>
      <h1 className={section + "-titre"}>{titre}</h1>
      <div className={section + "-container"}>
        <figure>
          <img
            className={section + "-image"}
            src={lien}
            alt="d'escriptive codilec energy"
          />
        </figure>
        <p className={section + "-texte"}>{texte} </p>
      </div>
    </div>
  );
};

export default Section;
