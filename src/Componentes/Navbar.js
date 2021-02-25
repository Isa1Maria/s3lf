import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/logo.png';


function Navbar() {

const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className='navbar'>
            <div classname='navbar-container'>
               <Link classname='nav-logo' to="/" onClick={closeMobileMenu}><img src={logo} width={100}
  height={40} alt="Logo" /> </Link> 
               <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'io md-close' : 'io md-menu'} />
               </div>
               <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to="quemsomos" className='nav-links' onClick={closeMobileMenu}   >Quem somos</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="serviços" className='nav-links' onClick={closeMobileMenu}>Serviços</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="testemunhos" className='nav-links' onClick={closeMobileMenu}>Testemunhos</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="contactos"className='nav-links' onClick={closeMobileMenu}>Contactos</Link>
                   </li>
               </ul>
            </div>
       
        </nav>
        </>
    );
};

export default Navbar;
