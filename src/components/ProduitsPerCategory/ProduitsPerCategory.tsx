/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 17/05/2024 14:23:35
*/
import React, { FC, useEffect, useState } from 'react';
import './ProduitsPerCategory.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import ProductItem from '../ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import { productDatas } from '../../api/datas/productsDatas';
import { Product } from '../../models/Product';


interface ProductList {
  _id: string
  name: string
}

interface ProduitsPerCategoryProps {

}


const ProduitsPerCategory: FC<ProduitsPerCategoryProps> = () => {
 const [isSelected, setIsSelected] = useState<boolean>(false);
 const [numberTable, setNumberTable] = useState<number>(0);
 const [productDatas, setProductDatas] = useState<Product[]>([]);
console.log(numberTable);

const {slug} = useParams()

const produits = productDatas
if (slug && produits) {
  const productPerCategory = produits.filter(produit => produit.slug === slug)
console.log(productPerCategory);
setProductDatas(productPerCategory)
}

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
        {productDatas.map((product, index) => (
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

    </div>

  );
}

export default ProduitsPerCategory;