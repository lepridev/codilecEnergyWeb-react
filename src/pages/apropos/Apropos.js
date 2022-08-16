import React from "react";
import ButtonTop from "../../components/ButtonTop";
import PageHeader from "../../components/PageHeader";
import "../apropos/Apropos.css";
import DescriptionApropos from "./DescriptionApropos";
import NosFournisseurs from "./NosFournisseurs";
import "./NosFournisseurs.css";

const Apropos = () => {
  return (
    <div>
      <ButtonTop />
      <PageHeader page="a-propos" titre="A-PROPOS" />
      <DescriptionApropos />
      <NosFournisseurs />
    </div>
  );
};

export default Apropos;
