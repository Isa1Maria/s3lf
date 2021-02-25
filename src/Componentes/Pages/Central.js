  
import React from 'react';
import '../../App.css';
import Serviços from '../Serviços';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Central() {
  return (
    <>
      <HeroSection />
      <Serviços />
      <Footer />
    </>
  );
}

export default Central;