import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { IoLogoLinkedin, IoLogoFacebook, IoIosAt, IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>SOBRE NÓS</h2>
            <Link to='/quemsomos'>Quem Somos</Link>
            <Link to='/serviços'>Serviços</Link>
            <Link to='/'>Testemunhos</Link>
            <Link to='/contactos'>Contactos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>CONTACTOS</h2>
            <Link
              to='/'>
                <IoIosAt/> s3lf2020@gmail.com</Link>
            <Link 
              to='/'>
              <IoLogoFacebook/> facebook.com/s3lf</Link>
            <Link
              to='/'> <IoLogoInstagram/> instagram.com/s3lf</Link>
            <Link 
              to='/'
              >
              <IoLogoLinkedin/> linkedin.com/s3lf</Link>
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'> © 2020 S3LF - Self Conscious, Self Improvement, Self Sufficient</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;