/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/05/2024 20:39:34
*/
import React, { FC, useEffect } from 'react';
import './CommercialisationProduits.css';


interface CommercialisationProduitsProps {
 
}


const CommercialisationProduits : FC<CommercialisationProduitsProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="CommercialisationProduits">
          CommercialisationProduits Component
      </div>
  );
}

export default CommercialisationProduits;