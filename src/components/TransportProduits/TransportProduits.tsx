/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/05/2024 17:02:13
*/
import React, { FC, useEffect } from 'react';
import './TransportProduits.css';
import HeaderPage from '../HeaderPage/HeaderPage';


interface TransportProduitsProps {
 
}


const TransportProduits : FC<TransportProduitsProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="">
    <HeaderPage
name="TRANSPORT DES PRODUITS AGRICOLES"
/>
     
  <div className='container reference'>
    <p>ACCUEIL / <strong>TRANSPORT DES PRODUITS AGRICOLES</strong></p>
    <div className='d-flex imag'>
      <img src="/assets/images/services/transport.png" alt="" />
      
    </div>
    <div>
      <p className='p-3 text-black'>
      Nous exportons vers le marché européen, américain et asiatique, des matières premières agricoles de qualité et ceci en respectant les normes adéquates. Notre politique qualité est basée sur la sécurité alimentaire et le respect strict des normes internationales.
      </p>
    </div>
  </div>  
      
      
  </div>
  );
}

export default TransportProduits;