/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/05/2024 16:51:46
*/
import React, { FC, useEffect } from 'react';
import './StockageProduits.css';
import HeaderPage from '../HeaderPage/HeaderPage';


interface StockageProduitsProps {
 
}


const StockageProduits : FC<StockageProduitsProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="">
    <HeaderPage
name="STOCKAGE DES PRODUITS"
/>
     
  <div className='container reference'>
    <p>ACCUEIL / <strong>STOCKAGE DES PRODUITS</strong></p>
    <div className='d-flex imag'>
      <img src="/assets/images/services/appi.png" alt="" />
      
    </div>
    <div>
      <p className='p-3 text-black'>
      Le stockage des produits agricoles est une pièce maîtresse de la chaîne d'approvisionnement alimentaire, où la préservation de la qualité et de la quantité des récoltes est essentielle pour répondre aux besoins croissants de la population mondiale.
      </p>
    </div>
  </div>  
      
      
  </div>
  );
}

export default StockageProduits;