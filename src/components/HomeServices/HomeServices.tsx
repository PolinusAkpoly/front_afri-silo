//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on https://mudey.fr
import React from 'react';
import './HomeServices.css';

const HomeServices = () => {

  const services = [
    {
      icon: " ",
      title: "Production et Approvisionnement",
      description: "Nous produisons et faisons produire également l'ensemble des agriculteurs ayant adhérés à notre système de fonctionnement, des produits agricoles qui servent de matière première pour la production des aliments destinés à la consommation humaine et animale. Nous nous approvisionnons donc auprès des agriculteurs formés et qui ont compris l'importance de la sécurité alimentaire.",
      link: "",
    },
    {
      icon: "",
      title: " Stockage des Produits",
      description: "Le stockage des produits agricoles est une pièce maîtresse de la chaîne d'approvisionnement alimentaire, où la préservation de la qualité et de la quantité des récoltes est essentielle pour répondre aux besoins croissants de la population mondiale. ",
      link: "",
    },
    {
      icon: "",
      title: "Transformation des Produits",
      description: "La transformation des produits est un élément essentiel de notre économie et de notre société. Des champs aux usines, des idées aux innovations, ce processus complexe façonne notre monde de manière profonde et continue à évoluer pour répondre aux besoins et aux exigences d'une société en mutation constante.",
      link: "",
    },
    {
      icon: "",
      title: "Transport des Produits Agricoles",
      description: "Nous exportons vers le marché européen, américain et asiatique, des matières premières agricoles de qualité et ceci en respectant les normes adéquates. Notre politique qualité est basée sur la sécurité alimentaire et le respect strict des normes internationales.",
      link: "",
    },
    {
      icon: "",
      title: "Commercialisation des Intrants et Equipements Agricoles",
      description: "Les intrants sont les différents produits apportés aux terres et aux cultures, dans le but d'améliorer et d'augmenter les rendements. Les agriculteurs sont de plus en plus confrontés aux difficultés d'appauvrissement du sol entraînant ainsi la baisse des rendements. C'est pourquoi, les défis actuels sont principalement la recherche de solutions innovantes en matière d'intrants agricoles. Il faut des intrants compatibles avec une agriculture économiquement viable et qui maintiennent la fertilité des sols. AFRISILO contribue à cette recherche de solutions en proposant aux agriculteurs des intrants soigneusement sélectionnés.",
      link: "",
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

                  + DE DETAILS
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
