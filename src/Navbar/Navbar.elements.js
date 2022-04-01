import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"
import { FaBars } from "react-icons/fa"; 

import {ReactComponent as Logo} from '../img/ac.svg';

<svg><Logo fill="white" width="100%" height="100%" /></svg>



export const Nav = styled.nav`
    background: black;
    height: 80px;
    width:100%;
    //margin-top:-80px;*/
    justify-content: center;
    align-items: center;
    color: white;
    display: flex;
    font-size:1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition:0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    position: relative;
    height: 70px;
    width: 100%;
    padding: 0 24px;
    color: black;
    //background: rgba(255, 255, 255, 0.2);
    max-width: 1100px;

`

export const NavbarLogo = styled(LinkRouter)`
    color:#33ffd6;
    justify-self:flex-start;
    cursor:pointer;
    display:flex;
    font-size: 2rem;
    font-weight: 700;
    align-items:center;
    margin-left:24px;
    text-decoration:none;
`
export const LogoSvg = styled.svg`
    color:#33ffd6;
    //background: red;
    width:35px;
    height: 35px;
    margin-right: 10px;
    cursor:pointer;
    display:flex;
    font-size: 2rem;
    font-weight: 700;
    align-items:center;
    
    text-decoration:none;
`
export const MobileIcon = styled.div`
display: none;
@media screen and (max-width:768px){
display:inline;

width: 30px;
height: 35px;
color: white;
font-size: 35px;
//background: white;
right: 0;
margin-right: 24px;
align-self:center;
position: absolute;
cursor: pointer;
align-items:center;
justify-items:center;

}
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align:center;
    //margin-right: -22px;
    @media screen and (max-width: 768px){
        display: none !important;
    }
`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkScroll)`
    

    color:white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    hover:{order-bottom: 3px solid #33ffd6;}
    &:hover,
    &.active{
        border-bottom: 3px solid #33ffd6;
        
    }
`

