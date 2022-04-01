import React from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll"

export const AwardsContainer = styled.div`
    color: white;
    background: rgba(60,60,60,0.2);
    
    margin: auto;
    padding-top:20px;
    background: ${({lightBg}) => lightBg ? 'white': '#010606'})} ;
    
    @media screen and (max-width:768px){
        padding: 100px 0;
        width: 100%;
    }
`
export const AwardsWrapper = styled.div`
    display: grid;
    background: rgba(60,60,60,0.2);
    z-index:1;
    height:860px;
    width: 100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 24px;
    justify-content:center;
    
`

export const AwardsRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'RightColumn LeftColumn'`:`'LeftColumn RightColumn'`)};
    background: ${({lightBg}) => (lightBg ? 'black': 'white')} ;
    padding: 20px 0;

    @media screen and (max-width:1023px){
    grid-template-areas: ${({imgStart})=>(imgStart ? `'RightColumn' 'LeftColumn'`:`'LeftColumn LeftColumn' 'RightColumn RightColumn'`)};
    max-width:600px;
    margin: auto;
    }
`

export const Intro =styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area: LeftColumn;
   
    
`



export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom:60px;
`

export const TopText = styled.p`
    color: white;
    font-size:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;

`
export const Title = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({lightText}) => (lightText ? 'white' : 'black')};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`
export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};


`
export const BtnWrap = styled.div`
    display:flex;
    justify-content: flex-start;
    @media screen and (max-width:1023px){

        justify-content: flex-start;
    }

`
export const Button =  styled(LinkScroll)`
    width: auto;
    border: solid 20px ${({dark}) => (dark ? '#33ffd6' : 'black')};
    border-radius:20px;
    text-align:center;
    background: ${({dark}) => (dark ? '#33ffd6' : 'black')};
    color: ${({dark}) => (dark ? 'black' : '#33ffd6')};
    font-weight:600;
    font-size:1.5rem;
    margin-right: 20px;
`

export const AwardContainer = styled.div`
    background: red;
    
    max-width:100%
    display: grid;
    
    margin: auto;
    border-radius: 20px;
    padding: 0 10px;
    
`
export const AwardsSection =styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area: RightColumn;
    display: grid;
    justify-items:center;
    max-width:100%
    margin: auto;
    grid-template-columns: repeat(auto-fit,minmax(200px,3fr));
    
    
`

export const AwardWrapper = styled.div`
     width: 150px;
    
    margin: 20px;
    border-radius: 20px;
    background: white;
    border: 1px solid white;
    /*
    display: flex;
    flex-direction:column;
    justify-content: center;
    */
    
    display: grid;
    grid-column: span 1;


`


export const AwardImg = styled.img`
display: flex;
position: relative;
margin: auto;
display: block;
max-height: 100px;
max-width:100%;
margin-top: 10px;
`
export const AwardDesc = styled.p`
color: black;
margin-top: 20px;
width: 100%;
min-height: 50px;
text-align:center;
`
export const ImgWrapper = styled.div`

height: 100px;
width: 100%;

align-items:center;
`