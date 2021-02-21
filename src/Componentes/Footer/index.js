import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to='/'> Serviços </FooterLink>
                            <FooterLink to='/'> Testemunhos </FooterLink>
                            <FooterLink to='/'> Contactos </FooterLink> 
                         </FooterLinkItems>  
                         <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to='/'> Serviços </FooterLink>
                            <FooterLink to='/'> Testemunhos </FooterLink>
                            <FooterLink to='/'> Contactos </FooterLink> 
                         </FooterLinkItems>    
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to='/'> Serviços </FooterLink>
                            <FooterLink to='/'> Testemunhos </FooterLink>
                            <FooterLink to='/'> Contactos </FooterLink> 
                         </FooterLinkItems>  
                         <FooterLinkItems>
                            <FooterLinkTitle> Quem Somos </FooterLinkTitle>    
                            <FooterLink to='/'> Serviços </FooterLink>
                            <FooterLink to='/'> Testemunhos </FooterLink>
                            <FooterLink to='/'> Contactos </FooterLink> 
                         </FooterLinkItems>    
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                         S3LF
                        </SocialLogo>
                        <WebsiteRights>S3LF {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>    
      </FooterContainer>                 
    );
};

export default Footer;
