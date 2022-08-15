import React from "react";
import Button from "./Button";
import "./Button.css";
import "./SectionImageCentre.css";

const SectionImageCentre = () => {
  return (
    <div className="section-image-centre">
      <div className="section-image-centre-description">
        <h3 className="section-image-centre-description-titre">
          L’expertise de professionnels pour tous les marchés
        </h3>
        <p className="section-image-centre-description-texte">
          Depuis 2004, les secteurs de l’industrie, du bâtiment, du tertiaire,
          les collectivités locales et régionales ainsi que les particuliers
          nous font confiance pour l’installation, la maintenance et le
          dépannage de leurs équipements électriques.
        </p>
        <Button>NOS REALISATIONS</Button>
      </div>
    </div>
  );
};

export default SectionImageCentre;
