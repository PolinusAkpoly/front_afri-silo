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
import { productDatas } from '../../api/datas/productsDatas';





interface AllProduitsProps {

}


const AllProduits: FC<AllProduitsProps> = () => {
 const [isSelected, setIsSelected] = useState<boolean>(false);
 const [slug, setSlug] = useState<string>(productDatas[0]?.slug);
//  const [currentProduct, setCurrentProduct] = useState<any>();






const products = productDatas
const productData = products.filter((product) => product.slug === slug);

  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {
      
    }
    runLocalData()
  })




const handleSelectProduct = (slug: string) =>{
  setIsSelected(!isSelected)
  setSlug(slug)

}

  return (
    <div className="">
      <HeaderPage name="TOUS NOS PRODUITS" />
      <div className='container'>
        <p>ACCUEIL / <strong className="text-uppercase">TOUS NOS PRODUITS</strong></p>
      
       <div className="row ">
        <div className="col-lg-2"></div>
       <div className="produits d-flex flex-wrap gap-2 col-lg-6 col-md-6 col-sm-6 col-md-6">
        {productData && productData.map((product: any, index: number) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
      
        <div className="listProduct col-lg-4 col-md-6 col-sm-6">
          <ul>
            {
              products.length ?
              products.map((product: any, index)=>{
                return <li key={index} onClick={()=>handleSelectProduct(product.slug)} className={`${isSelected ? 'liSelected' : ''}`}
                >{product.name}</li>
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