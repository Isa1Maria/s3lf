import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import {IoMdMenu} from 'react-icons/io';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import logo from '../../Images/logo.png';


const Navbar = ({toggle}) => {

const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if(window.scrollY >=80) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
}


useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])


const toggleHome = () => {
    scroll.scrollToTop();
}

    return (
        <>
        <IconContext.Provider value={{color: '#b3825a'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
               <NavLogo to="/" onClick={toggleHome}><img src={logo} width={100}
  height={40} alt="Logo" /> </NavLogo> 
               <MobileIcon onClick={toggle}>
                   <IoMdMenu />
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="quemsomos" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Quem somos</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="serviços" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Serviços</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="testemunhos" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Testemunhos</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="contactos"smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contactos</NavLinks>
                   </NavItem>
               </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
