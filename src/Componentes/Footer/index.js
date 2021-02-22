import React from 'react';

import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, WebsiteRights} from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>S3LF</FooterLinkTitle>  
                            <FooterLink> Quem Somos </FooterLink>    
                            <FooterLink to='/'> Serviços </FooterLink>
                            <FooterLink to='/'> Testemunhos </FooterLink>
                            <FooterLink to='/'> Contactos </FooterLink> 
                         </FooterLinkItems>  
                         <FooterLinkItems>  
                             <FooterLinkTitle>Contactos</FooterLinkTitle>  
                            <FooterLink to='/'> s3lf2020@gmail.com </FooterLink>
                            <FooterLink to='/'> +351 960 146 485 </FooterLink>
                            <FooterLink to='/'> linkedin.com/in/s3lf </FooterLink> 
                         </FooterLinkItems>    
                    </FooterLinksWrapper>
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                       
                        <WebsiteRights> º {new Date().getFullYear()} S3LF - Self Conscious, Self Improvement, Self Sufficient - All rights reserved.</WebsiteRights>
    
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>    
      </FooterContainer>                 
    );
};

export default Footer;
