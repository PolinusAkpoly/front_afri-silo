import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { footerRoutes, routes } from '../../api/routes';
import { siteAddress, siteDescription, siteEmail, siteName, sitePhone, sitePhoneFixe } from '../../environements/env';
import './Footer.css';

interface FooterProps { }

const Footer: FC<FooterProps> = () => (
  
  
  <div className="Footer" data-testid="Footer py-20">
    <div className="container">
      <div className="Footer-content">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h3>{siteName}</h3>
            <p>
              {siteDescription}
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Notre agence</h3>
            <ul className="">
            {
              routes.map((route, index)=>{
                    return <li key={index}>
                      <Link to={route.path} >
                        {route.name}
                      </Link>
                    </li>

              })
            }
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Infos pratiques</h3>
            <ul className="">
            {
              footerRoutes.map((route, index)=>{
                if(route?.target){
                    return <li  key={index}>
                      <a href={route.path} target={route.target}>
                        {route.name}
                      </a>
                    </li>

                }
                    return <li  key={index}>
                      <Link to={route.path}>
                        {route.name}
                      </Link>
                    </li>

              })
            }
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>INFOS & RÉSERVATIONS</h3>
            <ul className="">
             
              <li>
                <a href={"tel:"+ sitePhoneFixe }>
                  Téléphone : { sitePhoneFixe }
                </a>
                <a href={"tel:"+ sitePhone }>
                  Téléphone (urgence) : { sitePhone }
                </a>
                <a href={"mailto:"+siteEmail}>
                        Email : {siteEmail}
                </a>
                <a href="#">
                  Adresse : {siteAddress}
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container-fluid"> */}
      <div className="Footer-bottom text-center bold">
      Tous droits réservés @ 2024-2025
      </div>
    {/* </div> */}
  </div>
);

export default Footer;
