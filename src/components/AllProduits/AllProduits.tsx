/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 17/05/2024 14:23:35
*/
import React, { FC, useEffect, useState } from 'react';
import './AllProduits.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import ProductItem from '../ProductItem/ProductItem';


interface ProductList {
  _id: string
  name: string
}

interface AllProduitsProps {

}


const AllProduits: FC<AllProduitsProps> = () => {
 const [isSelected, setIsSelected] = useState<boolean>(false);
 const [numberTable, setNumberTable] = useState<number>(0);
console.log(numberTable);




const productLists: ProductList[] = [
  {
    _id: '0',
    name: "MAÏS"
  },
  {
    _id: '1',
    name: "SOJA"
  },
  {
    _id: '2',
    name: "CESAME"
  },
  {
    _id: '3',
    name: "FONIO"
  },
  {
    _id: '4',
    name: "KARITE"
  },
  {
    _id: '5',
    name: "NOIX DE CAJOU"
  },
  {
    _id: '6',
    name: "ANANAS"
  },
  {
    _id: '7',
    name: "MANGUE"
  },
]

const products = [
  [{
    name: "Maïs Blanc",
    imageUrl: "assets/products/soja.jpg",
    link: "",
  },
  {
    name: "Maïs jaune",
    imageUrl: "assets/products/mais-blanc.jpg",
    link: "",
  },
  {
    name: "Maïs jaune",
    imageUrl: "assets/products/acadju.png",
    link: "",
  },
  {
    name: "Maïs jaune",
    imageUrl: "assets/products/fonio.png",
    link: "",
  },],
  
  [{
    name: "SOJA",
    imageUrl: "assets/products/soja2.jpg",
    link: "",
  },
  {
    name: "SOJA",
    imageUrl: "assets/products/mais-jaune.jpg",
    link: "",
  },
  {
    name: "SOJA",
    imageUrl: "assets/products/acadju.png",
    link: "",
  },
  {
    name: "SOJA",
    imageUrl: "assets/products/cesame.png",
    link: "",
  },]
]



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })




const handleSelectProduct = (_id: string) =>{
  
 let idToNombre = parseInt(_id);
  setIsSelected(true)
  setNumberTable(idToNombre)

}

  return (
    <div className="">
      <HeaderPage name="TOUS NOS PRODUITS" />
      <div className='container'>
        <p>ACCUEIL / <strong className="text-uppercase">TOUS NOS PRODUITS</strong></p>
      
       <div className="row ">
        <div className="col-lg-1"></div>
       <div className="produits d-flex flex-wrap gap-2 col-lg-8">
        {products[numberTable].map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
      
        <div className="listProduct col-lg-3">
          <ul>
            {
              productLists.length ?
              productLists.map((productList: ProductList)=>{
                return <li onClick={()=>handleSelectProduct(productList?._id)} className={`${isSelected ? 'liSelected' : ''}`}
                >{productList.name}</li>
              })
              :
              null
            }
            
          </ul>
        </div>
        
        </div>     
        </div>

    </div>

  );
}

export default AllProduits;