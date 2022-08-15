import React from "react";
import "../Button.css";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import bureauEtudesImg from "../../assets/bureauEtudes.png";
import gestionEnergieCarre from "../../assets/gestionEnergieCarre.jpg";
import batIndust1 from "../../assets/batIndust1.jpg";
import courantFaible from "../../assets/courantFaible.png";
import reseauBt from "../../assets/reseau_bt_1_bis.jpg";
import groupeGaz from "../../assets/groupeGaz.jpeg";

const Services = () => {
  return (
    <div className="services">
      <h1 className="services-titre"> Nos Services</h1>
      <div className="services-container">
        <div className="services-cards-container">
          <ul className="services-cards">
            <ServiceCard
              lien={bureauEtudesImg}
              titre="Bureau d'Etudes"
              texte="Nous vous proposons une étude complète, des conseils et la suivie"
            />
            <ServiceCard
              lien={batIndust1}
              titre="Electricité Bâtiment et industrielle"
              texte="Spécialiste des travaux de rénovation, d’agencement et de construction électrique"
            />
            <ServiceCard
              lien={gestionEnergieCarre}
              titre="Gestion d'Energie"
              texte="Pour un confort et une sécurité optimale, nous mettons en place des sytemes de gestion d'énergie"
            />
            <ServiceCard
              lien={courantFaible}
              titre="Courant Faible"
              texte="Nous mettons à votre service notre expérience professionnelle et installons pour vous un réseau VDI (voix, données, images)"
            />
            <ServiceCard
              lien={reseauBt}
              titre="Reseaux Electrique BT-MT-HT"
              texte="Raccordement au réseau CIE, câblage, installation de tableau général basse tension (TGBT), du tableau électrique divisionnaire"
            />
            <ServiceCard lien={groupeGaz} titre="Groupe à Gaz" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
