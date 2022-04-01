import styled from "styled-components";

export const FooterContainer = styled.section`
background:#1a1f1d;
width: 100%;
position: relative;
bottom: 0;
height: auto;
min-height: 200px;
display: flex;
flex-direction:column;
justify-content:center;
@media screen and(max-width: 616px) {
    min-height: 100px;
 }
`
export const FooterWrapper = styled.div`
grid-template-columns: repeat(auto-fit,minmax(250px,280px));
grid-gap:40px;
display: grid;
width:100%;
margin: auto 0;
justify-content: center;

height: 100%;
position: relative;

`

//grid-template-columns: repeat(auto-fit,minmax(200px,3fr));

export const FooterColumn = styled.div`
//background: white;
//border: 1px solid black;
margin: 30px ;
color: white;
 
`


export const InfoSpacingContainer = styled.div`
height: 70px;
background: black;
width: 100%;
position: relative;
bottom: 0;
text-align:center;
margin-top: 25px;

color: white;
`

export const H1 = styled.h1`
`

export const P = styled.p`
`
export const ContentWrapper = styled.div`

//background: gray;
`