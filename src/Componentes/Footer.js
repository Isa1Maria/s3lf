import React from 'react';
import './Footer.css';
import {RiCopyrightLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className = 'footer-container'>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>S3LF</FooterLinkTitle>  
                            <Link> Quem Somos </Link>    
                            <Link to='/'> Serviços </Link>
                            <Link to='/'> Testemunhos </Link>
                            <Link to='/'> Contactos </Link> 
                         </FooterLinkItems>  
                         <FooterLinkItems>  
                             <FooterLinkTitle>Contactos</FooterLinkTitle>  
                            <Link to='/'> s3lf2020@gmail.com </Link>
                            <Link to='/'> +351 960 146 485 </Link>
                            <Link to='/'> linkedin.com/in/s3lf </Link> 
                         </FooterLinkItems>    
                    </FooterLinksWrapper>
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                       
                        <WebsiteRights> <RiCopyrightLine/> {new Date().getFullYear()} S3LF - Self Conscious, Self Improvement, Self Sufficient - All rights reserved.</WebsiteRights>
    
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>    
      </div>                 
    );
};

export default Footer;
