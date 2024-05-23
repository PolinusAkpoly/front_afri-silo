/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/05/2024 10:06:58
*/
import React, { FC, useEffect, useState } from 'react';
import './FormModel.css';
import { Button, Form, Modal } from 'react-bootstrap';
import { Column } from '../../models/Column';
import { getFields } from '../../api/helpers/manage-routes';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';
import { useFormik } from 'formik';
import { fileToUrl, indexDB, slugyfy, validateFormModal } from '../../api/helpers/utils';


interface FormModelProps {
  closeModal: () => void
  model: string;
  columns: Column[];
}


const FormModel: FC<FormModelProps> = ({ closeModal, model, columns }) => {
  const [columnInputs, setColumnInputs] = useState<any>([]);
  const [imageUrl, setImageUrl] = useState<string>('');
  // console.log(columnInputs);

  const initialValues: Record<string, string> = {};
  const validate = (values: any) => validateFormModal(values, columns)

  const handleChangeFile = async (event: any) => {
  
    const {type, files} = event.target
    if (type == 'file') {
      const prevImageUrl: any = await fileToUrl(files[0])
      setImageUrl(prevImageUrl);
      
    }

  }
   



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      const newCol = getFields(model)
      // console.log(newCol);

      setColumnInputs(newCol);

    }
    runLocalData()
  }, [])

  const renderError = (fieldName: string) => {
    return formik.touched[fieldName] && formik.errors[fieldName] ?
    (
      <div className='text-danger'>{formik.errors[fieldName] as any}</div>
    )
    :
    null
  };


  const formik = useFormik({
    initialValues, // Définir les valeurs initiales en fonction de vos besoins
    validate,
    onSubmit: async (data: any) => {
      
      data.imageUrl = imageUrl
      data.slug = slugyfy(data.name)
      data.created_at = new Date

      const db = indexDB();
      db.addData(model, data)
       .then((result) => console.log(result))
       .catch((error) => console.error(error));

    console.log(data);

     
    },

  });




  return (
    <>
  <Modal show={true} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={formik.handleSubmit}>
        {columnInputs.map((data: any, index: number) => {
          if (data.type.startsWith('input')) {
            return (
              <div key={index}>
                <InputField
                  type={data.inputType}
                  name={data.name}
                  label={data.label}
                  value={formik.values[data.name]}
                  onChange={data.inputType !== 'file' ? formik.handleChange : handleChangeFile}
                />
                {renderError(data.name)}
              </div>
            );
          }

          if (data.type === 'select') {
            return (
              <div key={index}>
                <SelectField
                  label={data.label}
                  name={data.name}
                  model={data.model}
                  options={data.options}
                  value={formik.values[data.name]}
                  onChange={formik.handleChange}
                />
                {renderError(data.name)}
              </div>
            );
          }

          return null; // Vous pouvez ajuster cela en fonction de vos besoins
        })}
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal.Body>
  </Modal>
</>


  );
}

export default FormModel;