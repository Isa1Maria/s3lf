import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Ginástica Laboral</ServicesH2>
                    <ServicesP>SAIBA MAIS</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Aulas de Pilates/Yoga</ServicesH2>
                    <ServicesP>SAIBA MAIS </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Psicologia Positiva</ServicesH2>
                    <ServicesP>SAIBA MAIS </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Sessões Específicas</ServicesH2>
                    <ServicesP>SAIBA MAIS</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Serviços Online</ServicesH2>
                    <ServicesP>SAIBA MAIS </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon />
                    <ServicesH2>Aulas a clientes particulares</ServicesH2>
                    <ServicesP>SAIBA MAIS </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services;
