/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/05/2024 10:09:57
*/
import React, { FC, useEffect, useState } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import { getHTMLContent, indexDB, ucfirst } from '../../api/helpers/utils';
import { Column } from '../../models/Column';
import FormModel from '../FormModel/FormModel';




interface AdminProps {

}


const Admin: FC<AdminProps> = () => {
  const dbInstance = indexDB();
  const { model } = useParams()
  const [columns, setColumns] = useState<Column[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [datas, setDatas] = useState<any>(null);
  // console.log(modal);
  // console.log(model);
  console.log(columns);

 



  const runLocalData = async () => {
    
    // if (model) {
      const newModel = model || 'product';
      const  data = await dbInstance.getAllData(newModel)
      console.log(data);
      
      setDatas(data)
      if (data  && data.length) {
        const initialColumns = Object.keys(data[0]).filter((d: any) => d !== '_id' && d !== 'slug')
          .map((name) => ({ name }))
        setColumns(initialColumns);
        
      } 
      
    // }

    

  }


  useEffect(() => {
    window.scrollTo(0, 0)

    runLocalData()
  },[model])

const handleCloseFormModal = () =>{
  setModal(false)
}



  return (
    <div className="Admin ">
      <div className="container  mt-5">
       

        {modal && 
        (<FormModel
          model={model as string}
          columns={columns}
          closeModal ={handleCloseFormModal}
         />)}

         <div className="row"> 
       <div className='menu col-2'>
       <table className="table table-bordered">
            {/* <thead>
                <tr>
                    <th>Column 1</th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <td><Link to={'/admin/product'}>Produits</Link></td>
                </tr>
                <tr>
                    <td><Link to={'/admin/service'}>Services</Link></td>
                </tr>
                <tr>
                    <td><Link to={'/admin/slider'}>Slider</Link></td>
                </tr>
            </tbody>
        </table>
       </div>
<div className='contentModel col-10'>
<button type="button" onClick={()=>setModal(true)} className="btn btn-primary mb-1">Ajouter</button>
        <table className="table table-bordered">
          <thead>
        <tr>
          <th>#</th>
          {columns?.map((column: any, index: number) => (
            <th key={index}>{ucfirst(column.name)}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
          <tbody>
            {/* {datas.map((data: any, index: number) => (
              <tr key={index}>
              <td> </td>
              {columns?.map((column: Column, index2: number) => (
              <td key={column.name + index2}  >
                {getHTMLContent(data, column.name)}

              </td>
            ))} */}
              <td>
                <button type="button" className="btn btn-info">Voir</button>
                <button type="button" className="btn btn-warning m-1">Modifier</button>
                <button type="button" className="btn btn-danger mr-1">Supprimer</button>
              </td>
            {/* </tr>
           )
           )}
             */}
            
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Admin;