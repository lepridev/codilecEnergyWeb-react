import React from "react";
import ButtonTop from "../../components/ButtonTop";
import "./NosPrestations.css";
import PageHeader from "../../components/PageHeader";
import SectionNosPrestations from "./SectionNosPrestations";

const NosPrestations = () => {
  return (
    <div>
      <PageHeader titre="Nos Prestations" page="nos-prestations" />
      <ButtonTop />
      <SectionNosPrestations titre="Nos Prestations" />
    </div>
  );
};

export default NosPrestations;
