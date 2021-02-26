import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <p>Self Conscious</p>
      <p>Self Improvement</p>
      <p>Self Sufficient</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          QUEM SOMOS
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;