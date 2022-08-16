import React from "react";
import ServiceCard from "../../components/sectionServices/ServiceCard";
import "./SectionNosPrestations.css";
import electBatiment from "../../assets/image prestations/elecBatiment.webp";
import froidClim from "../../assets/image prestations/froidClimatisation.webp";
import reseauxHT from "../../assets/image prestations/reseauElect.jpg";
import ria from "../../assets/image prestations/ria.jpeg";
import camera from "../../assets/image prestations/cameraSurvaillance.webp";
import posteSource from "../../assets/image prestations/source.jpeg";
import posteTransfo from "../../assets/image prestations/tranfo.jpeg";
import fibre from "../../assets/image prestations/Courant-faible.jpg";
import gestion from "../../assets/image prestations/gestion.jpg";
import epublic from "../../assets/image prestations/Eclairage.jpeg";
import acces from "../../assets/image prestations/controleAcces.jpeg";
import etude from "../../assets/image prestations/bureauEtude.jpeg";
import para from "../../assets/image prestations/parafoudre_paratonnerre.jpg";
import batterie from "../../assets/image prestations/batterie.jpeg";
import automate from "../../assets/image prestations/automate.jpeg";

const SectionNosPrestations = ({ titre }) => {
  return (
    <div className="section-nos-prestations">
      <div className="section-nos-prestations-container">
        <div className="section-nos-prestations-cards-container">
          <ul className="section-nos-prestations-cards">
            <ServiceCard
              lien={electBatiment}
              titre="INSTALLATION ELECTRIQUE BATIMENT"
              texte="Nous étudions et réalisons des travaux d'installation et de mise en service des équipements electriques: Courants forts et courants faibles des bâtiments à usage domestique, tertiaire et industriel selon les règles de SECUREL, CIE et les normes DUT."
            />
            <ServiceCard
              lien={froidClim}
              titre="FROID ET CLIMATISATION"
              texte="Notre departement de Climatisation industrielle et domestique, installe et entretien des systems de climatisateur des batiments tertiaires et industriels EAU GLACEE VRV SPLIT SYSTEM"
            />
            <ServiceCard
              lien={reseauxHT}
              titre="RESEAUX ELECTRIQUE BT MT HT"
              texte="Notre entreprise participe à la création et au renforcement des reseaux électriques: ruraux, grandes cités et realisation de reseaux Electrique BT- MT- HT et du transport des grands pôles d'énergie"
            />
            <ServiceCard
              lien={ria}
              titre="SECURITÉ INCENDIE RIA"
              texte="A nos acquis: l'installation, la vente et la maintenance des équipements de sécurité incendie.
              Nos atouts: RIA - PREVENTION - LUTTE CONTRE L'INCENDIE ET LA PANIQUE
              Milieux: BATIMENT A USAGE PUBLIC - USINES ETC..."
            />
            <ServiceCard
              lien={camera}
              titre="CAMERA ET VIDÉO SURVEILLANCE"
              texte="Camera de survaillance et équipé de systeme d'appel téléphonique donnant l'information aux occupants de tous genres de detection
              Types Inovants: CAMERA ESPIONS CAMERA WIFI CAMERA FILAIRE"
            />
            <ServiceCard
              lien={posteSource}
              titre="POSTE SOURCE"
              texte="HTB/HTA, ouvrage electrique industriel en fonction des lignes electrique haute et moyenne Tension. Notre mission: c'est de construire une ligne electrique reliant le poste source au reseau public et la distribution d'éléctricité par le biais des postes tranfomateurs cabine TS22 et TS12"
            />
          </ul>
          <ul className="section-nos-prestations-cards">
            <ServiceCard
              lien={posteTransfo}
              titre="POSTE TRANSFORMATEUR"
              texte="Le poste de transformation électrique permet d’orienter l’électricité selon les besoins des consommateurs et les capacités de transit des lignes électriques."
            />
            <ServiceCard
              lien={fibre}
              titre="RESEAU TÉLÉPHONIQUE ET FIBRE"
              texte="CODILEC-ENERGY met à votre service son expérience professionnelle et installe pour vous un réseau VDI (voix, données, images) qui vous permettra de profiter pleinement de toutes les fonctionnalités de votre habitation ou de votre lieu de travail."
            />
            <ServiceCard
              lien={gestion}
              titre="GESTION D'ENERGIE"
              texte="Un système de gestion de l'énergie (SGÉ) est un processus d'amélioration continue en énergie qui est structuré et systématique. Le suivi de la consommation d’énergie devient une partie intégrante des méthodes de gestion en rendant l’énergie visible."
            />
            <ServiceCard
              lien={epublic}
              titre="ECLAIRAGE PUBLIC"
              texte="c’est l’objectif qui dirige CODILEC-ENERGY dans la conception de ses solutions d’éclairage ; elle se distingue par une double compétence : maîtrise de la photométrie d’une part et forte réactivité dans le développement de solutions mécaniques fiables."
            />
            <ServiceCard
              lien={acces}
              titre="CONTROLE D'ACCÈS"
              texte="CODILEC-ENERGY propose un système complet de contrôle d’accès et de sécurisation de vos locaux vous permettant de :
              Contrôler et filtrer les accès
              Définir des droits d’accès personnalisés
              Lister les personnes présentes sur site en cas d’incident ..."
            />
            <ServiceCard
              lien={etude}
              titre="BUREAU D'ETUDE ET INGÉNIERIE"
              texte="Nous vous proposons des solutions innovantes à long terme en vue de faire face aux contraintes techniques et économiques."
            />
            <ServiceCard
              lien={automate}
              titre="AUTOMATISME"
              texte="L'automatisation d'un processus métier permet de gagner du temps et de libérer des ressources. Les équipes sont ainsi en mesure de se consacrer aux activités essentielles plutôt qu'à des tâches pénibles, répétitives et souvent frustrantes."
            />
            <ServiceCard
              lien={batterie}
              titre="BATTERIE DE CONDENSATEUR"
              texte="Pour diminuer les frais relatifs à la consommation en énergie électrique, plusieurs solutions ont été trouvées. L’une d’entre elles est l’installation d’une batterie de condensateurs. Ce dispositif joue plusieurs rôles et est d’une importance capitale."
            />
            <ServiceCard
              lien={para}
              titre="PARATONNERRE ET PARAFOUDRE"
              texte="Les surtensions provoquées par la foudre peuvent avoir des effets néfastes sur toute l'installation électrique, provoquant des dégâts parfois coûteux. Afin de limiter les détériorations, et par conséquent de protéger le matériel électrique présent dans un logement, nous vous installons des parafoudre et des paratonnères de dernière génération. Le rôle de ce dernier est donc protecteur, afin d'éviter tout désagrément provoqué par une surtension imprévue."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionNosPrestations;
