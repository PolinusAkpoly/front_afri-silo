import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../api/routes';
import './Header.css';
import { Nav, Navbar, NavLink, Container } from "react-bootstrap";
import { siteName, sitePhone } from '../../environements/env';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {

  useEffect(() => {


    // const navItems = document.querySelectorAll(".nav-item")
    // navItems.forEach((item)=>{
    //   item.addEventListener("click", ()=>{
    //     const element = document.querySelector(".navbar-toggler") as HTMLElement
    //     element.click()
    //   })
    // })
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
      {/* <div className="container">
        <Navbar collapseOnSelect expand="md" className="navbar   navbar-expand-lg navbar-light bg-light">



          <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="justify-content-center">

            <Nav>
              {
                routes.map((route, index) => {
                  return <NavLink
                    eventKey={index}
                    as={Link}
                    to={route.path}>{route.name}
                  </NavLink>
                })
              }

            </Nav>

          </Navbar.Collapse>

        </Navbar>

      </div> */}



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
        <div className="nav-item dropdown">
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
        </div>
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
