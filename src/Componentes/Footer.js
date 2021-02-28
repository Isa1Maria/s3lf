import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>SOBRE NÓS</h2>
            <Link to='/sign-up'>Quem Somos</Link>
            <Link to='/'>Serviços</Link>
            <Link to='/'>Testemunhos</Link>
            <Link to='/'>Contactos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>CONTACTOS</h2>
            <Link
              to='/'>
                <i class='fab fa-instagram' /> E-mail</Link>
            <Link 
              to='/'>
              <i class='fab fa-facebook-f' /> Facebook</Link>
            <Link
              to='/'> <i class='fab fa-instagram' /> Instagram</Link>
            <Link 
              to='/'>
              <i class='fab fa-linkedin' /> Linkedin</Link>
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