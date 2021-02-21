import React from 'react';
import {HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {



    return (
        <HeroContainer>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>Start today!</HeroP>
            <HeroBtnWrapper>
                <Button to="serviços">
                    Start
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;