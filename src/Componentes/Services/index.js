import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>Hello hello hello </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>Hello hello hello </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>Hello hello hello </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>Hello hello hello </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services;
