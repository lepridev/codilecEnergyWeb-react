import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Section from "../../components/Section";
import image from "../../assets/quisommesnous.png";
import cieSchneider from "../../assets/cieSchneider.png";
import Services from "../../components/sectionServices/Services";
import SectionImageCentre from "../../components/SectionImageCentre";
import ButtonTop from "../../components/ButtonTop";

const Home = () => {
  return (
    <div>
      <ButtonTop />
      <HeroSection />
      <Section
        section="qui-sommes-nous"
        titre="Qui sommes nous ?"
        lien={image}
        texte="Entreprise d'électricité générale BT-MT-HT installée depuis 18 ans. Elle offre a son aimable clientèle un service de :

        CONSULTANCE: Bureau d'etudes et de planification de vos projets d'electricité, solaire, éolienne et groupe à gaz.
        
        REALISATION: Une équipe d'ouvriers spécialisés pour la mise en oeuvre des travaux de courant forts et courant faibles des bâtiments, industriels, pavillons et tertiaires. Ainsi que l'éclairage public des zones urbaines et rurales
        
        S.A.V: Un service apres vente des équipements, fournitures electriques et la maintenance industrielle.
        
        Notre atout majeur la confiance de nos clients d'ouvrage d'envergure telque: CIMAF, GROUPE OLAM, GROUPE CARRE D'OR, La Banque Sahelo Saharienne (BSIC), APM Terminals MAERSK LINE etc...
        
        SERVICES DE QUALITE PAR DES PROFESSIONNELS QUALIFIES ET COMPETENTS"
      />
      <Services titre="Nos Services" />
      <Section
        section="pour-quoi-nous-choisir"
        titre="Pourquoi nous choisir ?"
        lien={cieSchneider}
        texte="Chère clients,
        Vous êtes promoteur, maître d'ouvrage, installateur et vous avez un projet en électricité de bâtiment ou industriel : ministère, institution public, hôtel, usine, hôpital, immeuble, villa, ONG,...
        Nous pouvons vous aider à le réaliser en vous offrant le savoir faire et la compétence d'une équipe qui s'est dotée de moyens importants et performants pour les études et la réalisation de projets.
        Notre détermination d'offrir des produits et des services de qualité avec une grande fiabilité demeure notre devise.
        Ensemble, nous réalisons vos projets avec les solutions les mieux adaptées: une qualité d'exécution optimale et constante, une mise à disposition rapide, des prix compétitifs, une garantie de bon fonctionnement."
      />
      <SectionImageCentre />
    </div>
  );
};

export default Home;
