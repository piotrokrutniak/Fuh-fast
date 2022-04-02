import React, {useState} from "react";
import {Nav, NavbarContainer, NavbarLogo, MobileIcon, NavList, NavItem, NavLinks, LogoSvg} from "./Navbar.elements";
import {FaBars} from 'react-icons/fa';
import {ReactComponent as Logo} from '../img/ac.svg';


export default function Navbar(props){
    
    

    const [openValue,setOpenValue]=useState(props.openValue)
    
    //const Svg = ac;


    //console.log(isOpen)
    return(
        <>
        <Nav>
            <NavbarContainer>
                <NavbarLogo to='/'><LogoSvg fill="#33ffd6"> <Logo/></LogoSvg>Fast</NavbarLogo>
                <MobileIcon onClick={props.change} >
                    <FaBars></FaBars>
                </MobileIcon>
                <NavList>
                    <NavLinks to='/'>Kontakt </NavLinks>
                    <NavLinks to='/'>Realizacje</NavLinks>
                    <NavLinks to='/oferta'>Oferta</NavLinks>
                </NavList>
            </NavbarContainer>
        </Nav>
        </>
    )
}