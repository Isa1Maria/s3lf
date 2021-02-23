import React from 'react';
import {HeroContainer, HeroContent, HeroH1, HeroP } from './HeroElements';
import s3lfh from '../../Images/s3lfh.jpg';


const HeroSection = () => {



    return (
        <HeroContainer>
        <HeroContent>
         <img src={ s3lfh } alt='' /> 
            <HeroH1>S3LF</HeroH1>
            <HeroP>Self Conscious, Self Improvement, Self Sufficient</HeroP>
    
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;