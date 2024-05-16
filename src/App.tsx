import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home.lazy';
import { Route, Router, Routes } from 'react-router';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Error404 from './components/Error404/Error404';
import AboutCompagny from './components/AboutCompagny/AboutCompagny.lazy';
import AboutServices from './components/AboutServices/AboutServices';
import PlanVols from './components/PlanVols/PlanVols';
import Assurance from './components/Assurance/Assurance';
import CGV from './components/CGV/CGV';
import MentionsLégales from './components/MentionsLégales/MentionsLégales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite/PolitiqueConfidentialite';
import CookieModal from './components/CookieModal/CookieModal';
import Admin from './components/Admin/Admin';
import TestForm from './components/TestForm/TestForm';
import WhatsAppComponent from './components/WhatsAppComponent/WhatsAppComponent';
import AboutReferences from './components/AboutReferences/AboutReferences';

function App() {

  const [cookies, setCookies] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("cookiesAccept") && localStorage.getItem("cookiesAccept") == "true"){
      setCookies(true)
    }else{
      setCookies(false)
    }
  })

  const handleClose: any = () => {
    setCookies(true)
    localStorage.setItem("cookiesAccept","true")
  }

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/test" element={<TestForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-afc-tours" element={<AboutCompagny />} />
        <Route path="/services" element={<AboutServices />} />
        <Route path="/references" element={<AboutReferences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        {/* FOOTER  */}
        <Route path="/plan-vol" element={<PlanVols

        />} />
        <Route path="/inssurance" element={<Assurance

        />} />
        <Route path="/conditions-generales-de-vente" element={<CGV

        />} />
        <Route path="/mentions-legales" element={<MentionsLégales

        />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite

        />} />
        {/* ERROR  */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      {
        !cookies ?
          <CookieModal
            close={handleClose}
          />
          :
          null
      }
      <WhatsAppComponent/>
      <Footer />

    </div>
  );
}

export default App;
