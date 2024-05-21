//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on https://mudey.fr
import React from 'react';
import './HomeServices.css';
import { Link } from 'react-router-dom';
import { servicesDatas } from '../../api/datas/servicesDatas';
import { indexDB, truncateText } from '../../api/helpers/utils';


const HomeServices = () => {

 
  const services = servicesDatas
  

  const db = indexDB();
  // db.addData('service', services[0])
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error));



  return (
  <div className="HomeServices container p-3" data-testid="HomeServices">
    <h2 className='text-center mt-1'>NOS SERVICES</h2>
    <p className='text-center'>Nos activités tournent essentiellement autour de ces points</p>
    <div className="grid">
       {
        services.map((service, index)=>{
          return <div key={index} className="service-item flex column jcsb">
                <div className="service-title flex gap-5">
                  <div className="service-icon">
                      <i className="bi bi-arrow-down-right-circle"></i>
                  </div>
                  <div className="service-title-content flex-1">
                    <h2>
                      {service.title}
                    </h2>
                  </div>
                </div>
                <div className="service-description">
                      { truncateText(service.description, 200) }

                </div>
                <div className="service-action">
                  <button>
                  <Link to={"/service/" + service.slug}>+ DE DETAILS </Link>
                  
                  </button>
                </div>
          </div>
        })
       }
    </div>
  </div>
)};

export default HomeServices;































































//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
