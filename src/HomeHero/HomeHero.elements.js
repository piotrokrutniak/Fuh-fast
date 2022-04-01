import React from 'react'
import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: black;
    max-width: 100%;
    text-align:center;
    position: relative;
    margin: auto;
`
export const HeroPic = styled.img`
    width: 100%;
    max-height:600px;
    display: flex;
    flex-shrink:0;
    object-fit:cover;
    min-height: 250px;
    position: relative;
    object-fit: cover;
   opacity: 0.25;
`

export const HeroOverlay = styled.div`
    position: relative;
    min-height: 250px;
    width: 100%;
    background: rgba(0,0,0,0.2);
    z-index:10;
`

export const HeroDesc=styled.div`
    display: inline-block;
    color: white;
    font-size:30px;
    text-align:center;
    justify-self:space-around;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    @media screen and (max-width:600px){
        font-size: 20px !important;
    }
    
`

export const HeroTitle = styled.h1`
    position: relative;
    bottom: 20px;
`

export const HeroText = styled.h3`
 
    display: inline;
    width: 1000px;
    min-width:200px;
    top: 40px;
    text-align:center;
    font-weight:400;
    font-size: 30px;
    @media screen and (max-width:600px){
        font-size: 20px !important;
    }
`

export const Teal = styled.span`
    color: #33ffd6;
`