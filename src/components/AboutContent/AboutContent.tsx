import React, { FC, useEffect } from 'react';


import './AboutContent.css';

interface AboutContentProps { }

const AboutContent: FC<AboutContentProps> = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <div className="container" >
      <div className='reference'>
        <p>ACCUEIL / <strong>A PROPOS</strong></p>
      </div>
      <div className='domaines'>
        <p>Nous intervenons essentiellement dans 5 domaines :</p>
        <ul>
          <li>Production et Approvisionnement</li>
          <li>Stockage des Produits</li>
          <li>Transformation des Produits</li>
          <li>Transport des Produits Agricoles</li>
          <li>Commercialisation des Intrants et Equipements Agricoles</li>
        </ul>
      </div>
      <hr />
      <div className='mission'>
        <p><strong>NOTRE MISSION</strong> : Fournir de façon responsable des produits nécessaires pour l'alimentation humaine et animale.</p>
      </div>
      <hr />
      <div className='objectifs'>
        <p><strong>NOS OBJECTIFS</strong> :</p>
        <p>- Promouvoir une production agricole responsable de l'environnement et protectrice de l'écosystème;</p>
        <p>- Agir pour la santé humaine en agriculture et la sécurité alimentaire.</p>
      </div>
      <hr />
      <div className='valeur'>
        <p><strong>NOS VALEURS</strong> : INNOVATION - METHODE - RIGUEUR</p>
      </div>
      <hr />
      <div className='engagement'>
        <p><strong>NOTRE ENGAGEMENT</strong> : Votre satisfaction au-delà de votre imagination.</p>
      </div>
    </div>
  )
};

export default AboutContent;
