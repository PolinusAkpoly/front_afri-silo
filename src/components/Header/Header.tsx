import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { routes } from '../../api/routes';
import './Header.css';
// import { Nav, Navbar, NavLink, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { siteName, sitePhone } from '../../environements/env';
import { servicesDatas } from '../../api/datas/servicesDatas';
import { Service } from '../../models/Service';
import { categorysDatas } from '../../api/datas/categorysDatas';
import { Category } from '../../models/Category';


interface HeaderProps { }

const Header: FC<HeaderProps> = () => {


const services = servicesDatas
const categorys = categorysDatas

  useEffect(() => {


  
  })

  return (
    <header className="Header sticky-top" data-testid="Header">
      <div className="banner">
        <div className="container b">
          <div className="banner-content flex jcsb aic">
            <div className="site-name">
              <Link className="navbar-brand" to="home">
                <img src="/logoAfriSilo-removebg-preview.png" alt={siteName} />
                {/* {siteName} */}
              </Link>
            </div>
            <div className="site-phone">
              <a href="tel:+229 65 90 90 45">{sitePhone}</a>
            </div>
          </div>
        </div>
      </div>
      
   



<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button
      aria-controls="navbarScroll"
      data-bs-toggle="collapse"
      data-bs-target="#navbarScroll"
      type="button"
      aria-label="Toggle navigation"
      className="navbar-toggler collapsed"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="justify-content-center navbar-collapse collapse" id="navbarScroll">
      <div className="navbar-nav">
        <a data-rr-ui-event-key="0" className="nav-link" href="/home">
          Accueil
        </a>
        <a data-rr-ui-event-key="1" className="nav-link active" href="/about-us">
          À Propos
        </a>
        {/* <div className="nav-item dropdown">
          <a id="collapsible-nav-dropdown" aria-expanded="false" role="button" className="dropdown-toggle nav-link" href="#">
            Nos Services
          </a>
          <div aria-labelledby="collapsible-nav-dropdown" data-bs-popper="static" className="dropdown-menu">
            <a data-rr-ui-dropdown-item="" className="dropdown-item" role="button" href="/services/batiments-et-routes">
              Bâtiments et Routes
            </a>
            <a data-rr-ui-dropdown-item="" className="dropdown-item" role="button" href="/services/installations-solaires">
              Installations Solaires
            </a>
            <a data-rr-ui-dropdown-item="" className="dropdown-item" role="button" href="/services/efficacite-energetique">
              Efficacité Énergétique
            </a>
            <a data-rr-ui-dropdown-item="" className="dropdown-item" role="button" href="/services/hydrolique-et-systemes-de-pompage-d-eau">
              Hydraulique et Systèmes de Pompage d'Eau
            </a>
          </div>
        </div> */}


<a href="#">
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="Dropdown.Toggle">
      Nos Services
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          services.length ?
          services.map((service: any, index: number)=>{
            return <Dropdown.Item href={"/service/" + service.slug} key={index}>{service.title}</Dropdown.Item>

          })
          :
          null
        }
       
      </Dropdown.Menu>
    </Dropdown>
    </a>
    <a href="#">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Nos Produits
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {
          categorys.length ?
          categorys.map((category: Category, index: number)=>{
            return <Dropdown.Item href={"/produit/" + category.slug} key={index}>{category.name}</Dropdown.Item>

          })
          :
          null
        }
      </Dropdown.Menu>
    </Dropdown>
    </a>




        <a data-rr-ui-event-key="4" className="nav-link" href="/contact">
          Contact
        </a>
      </div>
    </div>
  </nav>
</div>


    </header>
  )
}

export default Header;
