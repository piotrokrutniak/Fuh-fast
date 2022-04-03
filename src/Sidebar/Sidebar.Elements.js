import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll"
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100% !important;
height:100%;
background: #0d0d0d;
display:grid;
align-items: center;
top:0;
left:0;

opacity:  ${({ isOpen })=>(isOpen ? '100%':'0%')};
top:  ${({ isOpen })=>(isOpen ? '0%':'-100%')};
transition:0.5s ease-in-out;

`

export const CloseIcon = styled(FaTimes)`
color:white;`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right:1.5rem;
background: transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`

export const SidebarWrapper = styled.div`
    color: white;
    display: flex;
    justify-content: space-around;
`

export const SidebarLink = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition:0.2s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;
     &:hover{
         color: #33ffd6;
         transition: 0.2s ease-in-out;
     }
     
`

export const SideBtnWrap = styled.div`
display:flex;
justify-content:center;
`

export const SidebarRoute= styled(LinkRouter)`
border-radius:50px;
background:#33ffd6;
white-space:nowrap;
padding: 16px 64px;
color:#010606;
font-size 16px;
margin: auto;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}

`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(6,80px);
    text-align:center;
    @media screen and (max-width:400px){
        grid-template-rows:repeat(6,60px);
    }
`