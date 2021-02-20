import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

return (
 <>
   <IconContext.Provider value={{ color: '#874b27' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              S3LF
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
              <li className='nav-item'>
                <Link
                  to='/quemsomos'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Quem Somos
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/serviços'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Serviços
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contactos'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
 </>
);
};

export default Navbar;