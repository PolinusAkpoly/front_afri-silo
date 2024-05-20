// /*
//   Author : Mudey Formation
//   Website : https://mudey.fr/
//   App Name : E-commerce with React.Js
//   Created At : 16/05/2024 16:51:46
// */
// import React, { FC, useEffect, useState } from 'react';
// import './SingleProduit.css';
// import HeaderPage from '../HeaderPage/HeaderPage';
// import { useParams } from 'react-router-dom';
// import { Service } from '../../models/Service';
// import { slugyfy } from '../../api/helpers/utils';


// interface SingleProduitProps {
 
// }


// const SingleProduit : FC<SingleProduitProps> = () =>{

//   // const [service, setService] = useState<Service[] | null>(null)

//   const services = [
//     {
//       icon: " ",
//       title: "Production et Approvisionnement",
//       description: "Nous produisons et faisons produire également l'ensemble des agriculteurs ayant adhérés à notre système de fonctionnement, des produits agricoles qui servent de matière première pour la production des aliments destinés à la consommation humaine et animale. Nous nous approvisionnons donc auprès des agriculteurs formés et qui ont compris l'importance de la sécurité alimentaire.",
//       link: "/production",
//       slug: slugyfy("Production et Approvisionnement")
//     },
//     {
//       icon: "",
//       title: " Stockage des Produits",
//       description: "Le stockage des produits agricoles est une pièce maîtresse de la chaîne d'approvisionnement alimentaire, où la préservation de la qualité et de la quantité des récoltes est essentielle pour répondre aux besoins croissants de la population mondiale. ",
//       link: "/stockage",
//       slug: slugyfy("Stockage des Produits")
//     },
//     {
//       icon: "",
//       title: "Transformation des Produits",
//       description: "La transformation des produits est un élément essentiel de notre économie et de notre société. Des champs aux usines, des idées aux innovations, ce processus complexe façonne notre monde de manière profonde et continue à évoluer pour répondre aux besoins et aux exigences d'une société en mutation constante.",
//       link: "/transformation",
//       slug: slugyfy("Transformation des Produits")
//     },
//     {
//       icon: "",
//       title: "Transport des Produits Agricoles",
//       description: "Nous exportons vers le marché européen, américain et asiatique, des matières premières agricoles de qualité et ceci en respectant les normes adéquates. Notre politique qualité est basée sur la sécurité alimentaire et le respect strict des normes internationales.",
//       link: "/transport",
//       slug: slugyfy("Transport des Produits Agricoles")
//     },
//     {
//       icon: "",
//       title: "Commercialisation des Intrants et Equipements Agricoles",
//       description: "Les intrants sont les différents produits apportés aux terres et aux cultures, dans le but d'améliorer et d'augmenter les rendements. Les agriculteurs sont de plus en plus confrontés aux difficultés d'appauvrissement du sol entraînant ainsi la baisse des rendements. C'est pourquoi, les défis actuels sont principalement la recherche de solutions innovantes en matière d'intrants agricoles. Il faut des intrants compatibles avec une agriculture économiquement viable et qui maintiennent la fertilité des sols. AFRISILO contribue à cette recherche de solutions en proposant aux agriculteurs des intrants soigneusement sélectionnés.",
//       link: "/commercialisation",
//       slug: slugyfy("Commercialisation des Intrants et Equipements Agricoles")
//     },
//   ]

//   // const {slug}: any = useParams()
//   const slug: any = useParams()
//   console.log(slug);
  
//   // console.log(product);
//   const runLocalData = async () => {
//     if (slug) {
//       try {
//         const data: any = services.filter(service => service.slug === slug);
//         console.log(data);
//         // if (data.isSuccess) {
//         //   setProducts(data.result);
//         // }
//       } catch (error) {
//         console.error("Error data note find:", error);
        
//       }
      
//     }
//   };
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     runLocalData();
//   }, [slug]);
  

//   return (
//     <div className="">
//     <HeaderPage
// name="STOCKAGE DES PRODUITS"
// />
     
//   <div className='container reference'>
//     <p>ACCUEIL / <strong>STOCKAGE DES PRODUITS</strong></p>
//     <div className='d-flex imag'>
//       <img src="/assets/images/services/appi.png" alt="" />
      
//     </div>
//     <div>
//       <p className='p-3 text-black'>
//       Le stockage des produits agricoles est une pièce maîtresse de la chaîne d'approvisionnement alimentaire, où la préservation de la qualité et de la quantité des récoltes est essentielle pour répondre aux besoins croissants de la population mondiale.
//       </p>
//     </div>
//   </div>  
      
      
//   </div>
//   );
// }

// export default SingleProduit;



/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/05/2024 16:51:46
*/
import React, { FC, useEffect, useState } from 'react';
import './SingleProduit.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import { useParams } from 'react-router-dom';
import { slugyfy } from '../../api/helpers/utils';
import { Service } from '../../models/Service';
import { servicesDatas } from '../../api/datas/servicesDatas';


interface SingleProduitProps {
  
}

const SingleProduit: FC<SingleProduitProps> = () => {
 
  
  const services = servicesDatas


  const { slug }: any = useParams(); 
  console.log(slug);

  const [selectedService, setSelectedService] = useState<Service | null>(null); 

  console.log(selectedService);
  
  const runLocalData = async () => {
    if (slug) {
      try {
        const data: any = services.filter(service => service.slug === slug); 
        console.log(data);
        if (data) {
          setSelectedService(data[0]); 
        }
      } catch (error) {
        console.error("Error data not found:", error); 
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    runLocalData();
  }, [slug]);

  return <div>
    {  selectedService ?
       
        <div>
        <HeaderPage name={selectedService.title} />
    
      <div className='container reference'>
        <p>ACCUEIL / <strong className="text-uppercase">{selectedService.title}</strong></p>
        <div className='d-flex imag'>
          <img src={selectedService.imageUrl} alt="" />
          
        </div>
        <div>
          <p className='p-3 text-black'>
          {selectedService.description}
          </p>
        </div>
      </div>  
          
          
      </div>
    :
  null
  }
        
        </div>;
}

export default SingleProduit;
