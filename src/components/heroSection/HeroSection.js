import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import Button from "../Button";
import "../Button.css";

const HeroSection = () => {
  const [fond, setFond] = useState(false);

  const changeFond = () => {
    if (window.innerWidth <= 960) {
      setFond(true);
    } else {
      setFond(false);
    }
  };

  useEffect(() => {
    changeFond();
  }, []);

  window.addEventListener("resize", changeFond);

  return (
    <div className={fond ? "hero-container active" : "hero-container"}>
      <div className="texture"></div>
      <h1>CODILEC ENERGY</h1>
      <p>
        ELECTRICITE INDUSTRIELLES, TERTIAIRES ET BATIMENTS & ENERGIES
        RENOUVELABLES
      </p>
      <div className="hero-btns">
        <Button className="btn" buttonStyle="btn--outline">
          Demandez un devis
        </Button>
        <Button className="btn" buttonStyle="btn--primary">
          En savoir plus
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
