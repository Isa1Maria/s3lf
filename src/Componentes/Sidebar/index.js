import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
           <CloseIcon />
       </Icon>
       <SidebarWrapper>
           <SidebarMenu>
               <SidebarLink to="quemsomos" onClick={toggle}>Quem Somos</SidebarLink>
               <SidebarLink to="serviços" onClick={toggle}>Serviços</SidebarLink>
               <SidebarLink to="testemunhos" onClick={toggle}>Testemunhos</SidebarLink>
               <SidebarLink to="contactos" onClick={toggle}>Contactos</SidebarLink>
           </SidebarMenu>
       </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;