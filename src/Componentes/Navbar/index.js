import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import {FaBars} from 'react-icons/fa';


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
               <NavLogo to="/"> S3LF </NavLogo> 
               <MobileIcon>
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
        </>
    );
};

export default Navbar;
