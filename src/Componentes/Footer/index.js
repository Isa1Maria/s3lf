import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to="/serviços"> Serviços </FooterLink>
                            <FooterLink to="/testemunhos"> Testemunhos </FooterLink>
                            <FooterLink to="/contactos"> Contactos </FooterLink> 
                         </FooterLinkItems>  
                         <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to="/serviços"> Serviços </FooterLink>
                            <FooterLink to="/testemunhos"> Testemunhos </FooterLink>
                            <FooterLink to="/contactos"> Contactos </FooterLink> 
                         </FooterLinkItems>    
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to="/serviços"> Serviços </FooterLink>
                            <FooterLink to="/testemunhos"> Testemunhos </FooterLink>
                            <FooterLink to="/contactos"> Contactos </FooterLink> 
                         </FooterLinkItems>  
                         <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to="/serviços"> Serviços </FooterLink>
                            <FooterLink to="/testemunhos"> Testemunhos </FooterLink>
                            <FooterLink to="/contactos"> Contactos </FooterLink> 
                         </FooterLinkItems>    
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>    
      </FooterContainer>                 
    );
};

export default Footer;
