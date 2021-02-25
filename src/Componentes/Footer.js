import React from 'react';
import './Footer.css';
import {RiCopyrightLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className = 'footer-container'>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                        <h2>S3LF</h2>  
                            <Link> Quem Somos </Link>    
                            <Link to='/'> Serviços </Link>
                            <Link to='/'> Testemunhos </Link>
                            <Link to='/'> Contactos </Link> 
                         </div>  
                         <div className='footer-link-items'>  
                             <h2>Contactos</h2>  
                            <Link to='/'> s3lf2020@gmail.com </Link>
                            <Link to='/'> +351 960 146 485 </Link>
                            <Link to='/'> linkedin.com/in/s3lf </Link> 
                         </div>    
                    </div>
                    
                </div>
                <section className='social-media' >
                <div class='social-media-wrap'>
                        <small className='website-rights'> <RiCopyrightLine/> {new Date().getFullYear()} S3LF - Self Conscious, Self Improvement, Self Sufficient - All rights reserved.</small>
    </div>
                </section>
               
      </div>                 
    );
};

export default Footer;
