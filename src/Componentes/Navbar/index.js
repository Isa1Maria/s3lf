import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
               <NavLogo to="/"> S3LF </NavLogo> 
               
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
