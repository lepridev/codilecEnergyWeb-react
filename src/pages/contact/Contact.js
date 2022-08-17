import React from "react";
import PageHeader from "../../components/PageHeader";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <PageHeader titre="Nous Contacter" page="contact" />
      <div className="contact-container">
        <h2>CODILEC ENERGY VOTRE ÉLECTRICIEN CERTIFIÉ</h2>
        <p>
          Vous avez besoin d’informations sur nos prestations, vous souhaitez
          obtenir un devis, vous vous lancez dans la construction neuve ?
          Dites-nous tout ! Merci de renseigner vos coordonnées afin que nous
          puissions vous répondre rapidement.
        </p>
      </div>
    </div>
  );
};

export default Contact;
