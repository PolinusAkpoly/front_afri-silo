/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/05/2024 10:06:58
*/
import React, { FC, useEffect, useState } from 'react';
import './FormModel.css';
import { Button, Modal } from 'react-bootstrap';
import { Column } from '../../models/Column';
import { getFields } from '../../api/helpers/manage-routes';


interface FormModelProps {
  closeModal: ()=> void
  model: string;
  columns: Column[];
}


const FormModel : FC<FormModelProps> = ({closeModal, model, columns}) =>{
  const [columnInputs, setColumnInputs] = useState<any>([]);
console.log(columnInputs);


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        
          const newCol = getFields(model) 
          console.log(newCol);
           
          setColumnInputs(newCol);
        



        
      }
      runLocalData()
    },[])

  return (
    <>
    
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={closeModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    
  );
}

export default FormModel;