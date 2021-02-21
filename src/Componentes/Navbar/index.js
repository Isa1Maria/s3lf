import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';


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


    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
               <NavLogo to="/"> S3LF </NavLogo> 
               <MobileIcon onClick={toggle}>
                   <FaBars />
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="quemsomos">Quem somos</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="serviços">Serviços</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="testemunhos">Testemunhos</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="contactos">Contactos</NavLinks>
                   </NavItem>
               </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
