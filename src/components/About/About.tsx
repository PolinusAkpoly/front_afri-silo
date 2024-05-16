import React, { FC, useEffect } from 'react';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderPage from '../HeaderPage/HeaderPage.lazy';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import Slogan from '../Slogan/Slogan';
import './About.css';
import AboutContent from '../AboutContent/AboutContent';

interface AboutProps {}

const About: FC<AboutProps> = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  
  return(
  <div className="About" data-testid="About">
    {/* <Header/> */}
    <HeaderPage
    name="A propos"
    />
    <AboutContent/>
      {/* <Slogan/>
      <Reviews />
      <CallToAction /> */}
    {/* <Footer/> */}
  </div>
)};

export default About;
