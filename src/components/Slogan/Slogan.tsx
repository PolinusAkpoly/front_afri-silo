import React, { FC } from 'react';
import './Slogan.css';

interface SloganProps { }

const Slogan: FC<SloganProps> = () => (
  <div className="Slogan" data-testid="Slogan">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="slogan-image text-center">
            <i className="bi bi-person-check animate__zoomIn"></i>
          </div>
          <h2 className='text-center animate__zoomIn'>95% de clients satisfaits</h2>
          <p className='text-center animate__zoomIn'>
            Toujours la même envie de satisfaire. Un savoir-faire, des voyages pour toutes vos envies !
          </p>
        </div>
        <div className="col-md-4">
          <div className="slogan-image text-center">
            <i className="bi bi-lock animate__zoomIn"></i>
          </div>
          <h2 className='text-center animate__zoomIn'>Paiement 100% sécurisé</h2>
          <p className='text-center animate__zoomIn'>
            De nombreux moyens de paiement sont acceptés et pris en compte de façon sécurisée
          </p>
        </div>
        <div className="col-md-4">
          <div className="slogan-image text-center">
          <i className="bi bi-arrow-up-right-square animate__zoomIn"></i>
            {/* <i className="fa-solid fa-plane-departure animate__zoomIn"></i> */}
          </div>
          <h2 className='text-center animate__zoomIn'>Plus de 120 destinations</h2>
          <p className='text-center animate__zoomIn'>
            Un vaste choix de destinations avec une recherche constante du meilleur rapport qualité / prix
          </p>
        </div>

      </div>
    </div>
  </div>
);

export default Slogan;
