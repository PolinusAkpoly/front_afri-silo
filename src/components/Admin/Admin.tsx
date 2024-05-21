/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/05/2024 10:09:57
*/
import React, { FC, useEffect } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import { indexDB } from '../../api/helpers/utils';




interface AdminProps {

}


const Admin: FC<AdminProps> = () => {
  const dbInstance = indexDB();
  const { model } = useParams()
  console.log(model);

 



  const runLocalData = async () => {
    
    if (model) {
      
      const  data = await dbInstance.getAllData(model)
         
      
      console.log(data);
    }

    

  }


  useEffect(() => {
    window.scrollTo(0, 0)

    runLocalData()
  })

  return (
    <div className="Admin">
      <div className="container mt-5">
        <button type="button" className="btn btn-primary mb-1">Ajouter</button>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Menu</th>
              <th>Contenu</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to={'/admin/product'}>Produits</Link> </td>
              <td>Produits</td>
              <td>
                <button type="button" className="btn btn-info">Voir</button>
                <button type="button" className="btn btn-warning m-1">Modifier</button>
                <button type="button" className="btn btn-danger mr-1">Supprimer</button>
              </td>
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
    </div>
  );
}

export default Admin;