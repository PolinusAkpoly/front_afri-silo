/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 18/05/2024 20:00:57
*/
import React, { FC, useEffect } from 'react';
import './ViewProductModal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


interface ViewProductModalProps {
  handleClose: ()=> void
  show: boolean
  slugProductSelect: string | undefined
}


const ViewProductModal : FC<ViewProductModalProps> = ({handleClose, show, slugProductSelect}) =>{

console.log(slugProductSelect);


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

    return (
      <>
       
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>DETAILS DU PRODUIT</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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
}

export default ViewProductModal;