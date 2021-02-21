import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
       <Icon>
           <CloseIcon />
       </Icon>
       <SidebarWrapper>
           <SidebarMenu>
               <SidebarLink to="quemsomos">Quem Somos</SidebarLink>
               <SidebarLink to="serviços">Serviços</SidebarLink>
               <SidebarLink to="testemunhos">Testemunhos</SidebarLink>
               <SidebarLink to="contactos">Contactos</SidebarLink>
           </SidebarMenu>
       </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;