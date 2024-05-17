//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on https://mudey.fr
import React from 'react';
import './HomeServices.css';
import { Link } from 'react-router-dom';
import { slugyfy } from '../../api/helpers/utils';

const HomeServices = () => {

  const services = [
    {
      icon: " ",
      title: "Production et Approvisionnement",
      description: "Nous produisons et faisons produire également l'ensemble des agriculteurs ayant adhérés à notre système de fonctionnement ...",
      link: "/production",
      slug: slugyfy("Production et Approvisionnement")
    },
    {
      icon: "",
      title: " Stockage des Produits",
      description: "Le stockage des produits agricoles est une pièce maîtresse de la chaîne d'approvisionnement alimentaire ... ",
      link: "/stockage",
      slug: slugyfy("Stockage des Produits")
    },
    {
      icon: "",
      title: "Transformation des Produits",
      description: "La transformation des produits est un élément essentiel de notre économie et de notre société ... ",
      link: "/transformation",
      slug: slugyfy("Transformation des Produits")
    },
    {
      icon: "",
      title: "Transport des Produits Agricoles",
      description: "Nous exportons vers le marché européen, américain et asiatique, des matières premières agricoles de qualité ...",
      link: "/transport",
      slug: slugyfy("Transport des Produits Agricoles")
    },
    {
      icon: "",
      title: "Commercialisation des Intrants et Equipements Agricoles",
      description: "Les intrants sont les différents produits apportés aux terres et aux cultures, dans le but d'améliorer et d'augmenter les rendements ... ",
      link: "/commercialisation",
      slug: slugyfy("Commercialisation des Intrants et Equipements Agricoles")
    },
  ]
  
  
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
                      {service.description}

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
