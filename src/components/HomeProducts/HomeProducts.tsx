//Generate with new-react-cli : Sat, 16 Jul 2022 15:40:32 GMT
//Free training on https://mudey.fr
import React, { useEffect } from 'react';
import './HomeProducts.css';
import ProductItem from '../ProductItem/ProductItem';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import 'slick-carousel';
import { productDatas } from '../../api/datas/productsDatas';

const HomeProducts = () => {

  const products = productDatas

  useEffect(() => {
    $(document).ready(function () {
      ($('.products') as any)?.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        autoplay: true,
        focusOnSelect: true,
        autoplaySpeed: 5000
      });
    });
    // $('.products').slick({});
  },[])


  return (
    <div className="HomeProducts container text-center" data-testid="HomeProducts">
      <h2>NOS PRODUITS</h2>
      <div className="section-subtitle">Les produits agricoles sont les fruits de la terre, offrant une symphonie de saveurs, de couleurs et de nutriments.</div>

      <div className="products">
        {
          products.map((product, index) => {
            return <ProductItem product={product} key={index} />
          })
        }
      </div>


    </div>
  )
}

export default HomeProducts;































































//Generate with new-react-cli : Sat, 16 Jul 2022 15:40:32 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
