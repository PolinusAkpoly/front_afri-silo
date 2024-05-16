/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/05/2024 15:15:20
*/
import React, { FC, useEffect } from 'react';
import './Production.css';
import HeaderPage from '../HeaderPage/HeaderPage';


interface ProductionProps {
 
}


const Production : FC<ProductionProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="">
        <HeaderPage
    name="PRODUCTION ET APPROVISIONNEMENT"
    />
         
      <div className='container reference'>
        <p>ACCUEIL / <strong>PRODUCTION ET APPROVISIONNEMENT</strong></p>
        <div className='d-flex image'>
          <img src="/assets/images/services/production.png" alt="" />
          <img src="/assets/images/services/appri.png" alt="" />
        </div>
        <div>
          <p className='p-3 text-black'>
          Nous produisons et faisons produire également l'ensemble des agriculteurs ayant adhérés à notre système de fonctionnement, des produits agricoles qui servent de matière première pour la production des aliments destinés à la consommation humaine et animale. Nous nous approvisionnons donc auprès des agriculteurs formés et qui ont compris l'importance de la sécurité alimentaire.
          </p>
        </div>
      </div>  
          
          
      </div>
  );
}

export default Production;