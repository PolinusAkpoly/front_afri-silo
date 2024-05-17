/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 17/05/2024 14:23:35
*/
import React, { FC, useEffect } from 'react';
import './AllProduits.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import { ProductList } from '../../models/productList';


interface AllProduitsProps {

}


const AllProduits: FC<AllProduitsProps> = () => {

const productLists: ProductList[] = [
  {
    _id: 0,
    name: "SOJA"
  },
  {
    _id: 1,
    name: "CESAME"
  },
  {
    _id: 2,
    name: "FONIO"
  },
  {
    _id: 3,
    name: "KARITE"
  },
  {
    _id: 4,
    name: "NOIX DE CAJOU"
  },
  {
    _id: 5,
    name: "ANANAS"
  },
  {
    _id: 6,
    name: "MANGUE"
  },
]

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

const handleSelectProduct = (_id: number) =>{


}




  return (
    <div className="">
      <HeaderPage name="TOUS NOS PRODUITS" />
      <div className='container'>
        <p>ACCUEIL / <strong className="text-uppercase">TOUS NOS PRODUITS</strong></p>
      </div>
       <div className="row">
        <div className="produits col-lg-8">


        </div>
        <div className="listProduct col-lg-4">
          
          <ul>
            {
              productLists.length ?
              productLists.map((productList: ProductList)=>{
                return <li onClick={()=>handleSelectProduct(productList._id)} className=''>{productList.name}</li>
              })
              :
              null
            }
            {/* <li className='liSelected'> MAIS</li>
            <li>SOJA</li>
            <li>CESAME</li>
            <li> FONIO</li>
            <li> KARITE</li>
            <li> NOIX DE CAJOU</li>
            <li> ANANAS</li>
            <li>MANGUE</li> */}
          </ul>
        </div>
        </div>     


    </div>

  );
}

export default AllProduits;