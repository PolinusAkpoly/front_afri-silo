//Generate with new-react-cli : Sat, 16 Jul 2022 16:12:57 GMT
//Free training on https://mudey.fr
import React from 'react';
import './ProductItem.css';

const ProductItem = (props: any) => {
  const product = props.product
  
  return(
  <div className="ProductItem flex column jcsb" data-testid="ProductItem">
    <div className="ProductItem-image">
      <img src={product.imageUrl}/>
    </div>
    <div className="ProductItem-name">
      {product.name}
    </div>
    <button className="">
      + En savoir plus
    </button>
  </div>
)};

export default ProductItem;































































//Generate with new-react-cli : Sat, 16 Jul 2022 16:12:57 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
