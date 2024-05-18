//Generate with new-react-cli : Sat, 16 Jul 2022 16:12:57 GMT
//Free training on https://mudey.fr
import React, { useState } from 'react';
import './ProductItem.css';
import ViewProductModal from '../ViewProductModal/ViewProductModal';




const ProductItem = (props: any) => {
  const product = props.product
  const [show, setShow] = useState(false);
  const [slugProductSelect, setSlugProductSelect] = useState<string | undefined>();

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);



const onpenViewProductModal = (event: any, slug: string) =>{
event.preventDefault()
setShow(true);
setSlugProductSelect(slug)


}



  return(
  <div className="ProductItem flex column jcsb" data-testid="ProductItem">

       {<ViewProductModal 
       handleClose={handleClose}
       show={show}
       slugProductSelect={slugProductSelect}
               />}

    <div className="ProductItem-image">
      <img src={product.imageUrl}/>
    </div>
    <div className="ProductItem-name">
      {product.name}
    </div>
    <button onClick={(event)=>onpenViewProductModal(event, product.slug)} className="">
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
