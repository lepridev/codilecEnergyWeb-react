import React from "react";
import Tableau from "./Tableau";
import PageHeader from "../../components/PageHeader";

const NosRealisations = () => {
  return (
    <div>
      <PageHeader titre="Nos Réalisations" page="nos-realisations" />
      <Tableau />
    </div>
  );
};

export default NosRealisations;
