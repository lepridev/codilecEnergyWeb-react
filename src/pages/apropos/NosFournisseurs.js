import React from "react";
import imageFournisseurs from "../../assets/fournisseur.png";

const NosFournisseurs = () => {
  return (
    <div className="nos-fournisseurs">
      <h1>Nos Fournisseurs</h1>
      <div className="nos-fournisseur-container">
        <img
          src={imageFournisseurs}
          alt="fournisseur de materiels electriques"
        />
      </div>
    </div>
  );
};

export default NosFournisseurs;
