import React, { FC, useEffect } from 'react';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeServices from '../HomeServices/HomeServices';
import Partenaires from '../Partenaires/Partenaires';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import Slogan from '../Slogan/Slogan';
import './Home.css';
import { Link } from 'react-router-dom';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
  <div className="Home" data-testid="Home">
    {/* <Header/> */}
      <Slider />
      <HomeServices/>
      <HomeProducts />

      <div className="allProducts">
        <Link to="/all-product">
          <button>TOUS NOS PRODUITS</button>
        </Link>
        
      </div>
      {/* <Slogan />
      <Reviews /> */}
      {/* <CallToAction /> */}
      {/* <Partenaires/> */}
    {/* <Footer/> */}
  </div>
)
}

export default Home;
