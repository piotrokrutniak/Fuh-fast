import React, {useState} from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarWrapper,SidebarRoute } from './Sidebar.Elements'

const Sidebar = ({isOpen,change}) => {

  //let [openValue,setOpenValue]=useState(props.openValue)
  

  return (
    <SidebarContainer isOpen={isOpen} onClick={change}>
        <Icon onClick={change}>
          <CloseIcon onClick={change}/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
             <SidebarLink to="/kontakt" onClick={change}>Kontakt</SidebarLink>
             <SidebarLink to="/" onClick={change}>Realizacje</SidebarLink>
             <SidebarLink to='/oferta' onClick={change}>Oferta</SidebarLink>
             <SideBtnWrap onClick={change}>
                <SidebarRoute to="/" onClick={change}>Home</SidebarRoute>
             </SideBtnWrap>
          </SidebarMenu>
          
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar