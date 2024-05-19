import React, { FC, useEffect, useState } from 'react';
import './ViewProductModal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { productDatas } from '../../api/datas/productsDatas';
import { Product } from '../../models/Product';

interface ViewProductModalProps {
  handleClose: () => void;
  show: boolean;
  slugProductSelect: string | undefined;
}

const ViewProductModal: FC<ViewProductModalProps> = ({ handleClose, show, slugProductSelect }) => {
  

  const products = productDatas;
  const productDetail = products.find((product) => product.slug === slugProductSelect);
  console.log(productDetail);

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
     
    };
    runLocalData();
  }, []); 

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>DETAILS DU PRODUIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {productDetail && <div>

          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 detaill-image">
               <img src={productDetail.imageUrl} alt={productDetail.name} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 detaill-text">
              <h1>{productDetail.name}</h1>
              <p>{productDetail.description}</p>
            </div>
            </div>
          </div>
        }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            FERMER
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <Link to="/contact">NOUS CONTACTER</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewProductModal;
