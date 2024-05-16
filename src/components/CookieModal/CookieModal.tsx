//Generate with new-react-cli : Fri, 01 Jul 2022 15:57:04 GMT
//Free training on https://mudey.fr
import React from 'react';
import './CookieModal.css';

const CookieModal = (props: any) => (
  <div className="CookieModal" data-testid="CookieModal">
    <div className="offcanvas show" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Politique de cookies</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <p>
          En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies et autres traceurs pour vous garantir la meilleure navigation possible, réaliser des statistiques, vous proposer des messages et publicités adaptées à vos centres d'intérêt et nous permettent également d'optimiser le fonctionnement de notre site.
        </p>
        <p>
          Pour en savoir plus, nous vous invitons à consulter notre politique en matière de confidentialité et de cookies. En continuant sur notre site, vous acceptez l'utilisation de nos cookies.
        </p>
        <button className="btn btn-success btn-lg" onClick={props.close}>
          J'accepte
        </button>

      </div>

    </div>
  </div>
);

export default CookieModal;































































//Generate with new-react-cli : Fri, 01 Jul 2022 15:57:04 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
