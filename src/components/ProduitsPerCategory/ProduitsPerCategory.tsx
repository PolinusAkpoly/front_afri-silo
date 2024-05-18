/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 17/05/2024 14:23:35
*/
import React, { FC, useEffect, useState } from 'react';
import './ProduitsPerCategory.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import { useParams } from 'react-router-dom';
import { categorysDatas } from '../../api/datas/categorysDatas';
import { Category } from '../../models/Category';
import { productDatas } from '../../api/datas/productsDatas';
import { Product } from '../../models/Product';
import ProductItem from '../ProductItem/ProductItem';




interface ProduitsPerCategoryProps {

}


const ProduitsPerCategory: FC<ProduitsPerCategoryProps> = () => {
  const [oneCategory, setOneCategory] = useState<Category>();
  const [productsDatasPerCategory, setProductsDatasPerCategory] = useState<any[]>([]);
console.log(productsDatasPerCategory);



  const { slug } = useParams<{ slug: string }>();
  console.log(slug);

  const categorys = categorysDatas
  const products = productDatas

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      if (slug) {
        const category = categorys.filter((category) => category.slug === slug);
        console.log(category);
        setOneCategory(category[0])
      }

      const productsPerCategory = products.filter((product) => product.category === slug);
      console.log(productsPerCategory);
      setProductsDatasPerCategory(productsPerCategory)

    }
    runLocalData()
  },[])






  return (
    <div className="">
      {
        oneCategory && <HeaderPage name={oneCategory?.name} />
      }
      <div className='container'>
       <p className='description-product'>{oneCategory?.description}</p> 

        <div className="row ">
          <div className="col-lg-2"></div>
          <div className="produits d-flex flex-wrap gap-2 col-lg-8">
            {productsDatasPerCategory.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </div>

          <div className="col-lg-2">
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProduitsPerCategory;