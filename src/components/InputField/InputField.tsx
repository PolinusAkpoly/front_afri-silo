/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/05/2024 11:49:20
*/
import React, { FC, useEffect, useState } from 'react';
import './InputField.css';
import { fileToUrl, ucfirst } from '../../api/helpers/utils';


interface InputFieldProps {
  type: string;
  label: string;
  name: string;
  value: string | number | boolean | FileList | Date;
  onChange: (value: any) => void;
}


const InputField: FC<InputFieldProps> = ({ type, label, name, value, onChange }) => {
const [previewImage, setPreviewImage] = useState<string>('')

  const handleInputChange = async (event: any) => {

    const {type, files} = event.target
    if (type == 'file') {
      const prevImageUrl: any = await fileToUrl(files[0])
      setPreviewImage(prevImageUrl);
      
    }

    onChange(event)
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="form-group">
      <label>{ucfirst(label)}</label>
      {type === 'file' ? (
        <div>
          <input onChange={handleInputChange} className='form-control' type={type} name={name} />
          {previewImage && (
            <div>
              {previewImage.startsWith('data:image/') ? (
                <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100px' }} />
              ) 
              : null}
            </div>
          )}
        </div>
       
      ) : (
        <input type={type}
          className='form-control'
          onChange={handleInputChange} 
          name={name}
          defaultValue={
            value instanceof Date ?
              value.toISOString().substring(0, 16) :
              value as string | number | readonly string[] | undefined} 
              />
    )}

    </div>
  );
}

export default InputField;