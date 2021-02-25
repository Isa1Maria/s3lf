import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>S3LF</h1>
            <p>Self Conscious, Self Improvement, Self Sufficient</p>
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