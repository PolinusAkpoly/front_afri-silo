/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/05/2024 20:31:38
*/
import React, { FC, useEffect } from 'react';
import './TransformationProduits.css';
import HeaderPage from '../HeaderPage/HeaderPage';


interface TransformationProduitsProps {

}


const TransformationProduits: FC<TransformationProduitsProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="">
      <HeaderPage
        name="
TRANSFORMATION DES PRODUITS"
      />

      <div className='container reference'>
        <p>ACCUEIL / <strong>
          TRANSFORMATION DES PRODUITS</strong></p>
        <div className='d-flex image'>
          <img src="/assets/images/services/transformation1.png" alt="" />
          <img src="/assets/images/services/transformation2.png" alt="" />
        </div>
        <div>
          <p className='p-3 text-black'>
            La transformation des produits est un élément essentiel de notre économie et de notre société. Des champs aux usines, des idées aux innovations, ce processus complexe façonne notre monde de manière profonde et continue à évoluer pour répondre aux besoins et aux exigences d'une société en mutation constante.
          </p>
        </div>
      </div>


    </div>
  );
}

export default TransformationProduits;