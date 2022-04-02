import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"
import styled from "styled-components";

export const PostContainer = styled.div`
    color: white;
    
    background: ${({lightBg}) => (lightBg ? 'rgba(60,60,60,0.2)': '#f9f9f9')};
    margin: auto;
    padding-top:20px;
    border-left: transparent solid 30px;
    border-right: transparent solid 30px;
`

export const PostWrapper = styled.div`
    display: grid;
    
    
    z-index:1;
    min-height:860px;
    width: 100%;
    max-width:100%;
    margin-right:auto;
    margin-left:auto;
    
    justify-content:center;
    
`

export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'RightColumn LeftColumn'`:`'LeftColumn RightColumn'`)};

    @media screen and (max-width:1023px){
    grid-template-areas: ${({imgStart})=>(imgStart ? `'RightColumn' 'LeftColumn'`:`'RightColumn' 'LeftColumn'`)};
    max-width:600px;
    margin: auto;
    }
`

export const LeftColumn =styled.div`
    margin-bottom:15px;
    border-top: 20px solid transparent;
    padding:0 15px;
    grid-area: LeftColumn;
    display: flex;
    align-items: center;
    border-left: solid 30px transparent;
    
    
`
export const RightColumn =styled.div`
    margin-bottom:15px;
    padding:0 15px;
    
    grid-area: RightColumn;
    display: flex;
    justify-items:center;
    align-items: center;
    margin: auto;
    
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
    color: ${({darkText}) => (darkText ? 'white' : 'Black')};
`
export const Title = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({lightText}) => (lightText ?  'black' : 'white' )};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`
export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? 'white' : 'Black')};


`
export const BtnWrap = styled.div`
    display:flex;
    justify-content: flex-start;

`


export const ImgWrapper = styled.div`
    width: 100%;
max-height:600px;
object-fit:cover;
min-height: 250px;
position: relative;
object-fit: cover;
   border-bottom: 20px solid transparent;
`

export const Img = styled.img`
    display: flex;
    flex-shrink: 0;
    object-fit: cover;
    max-width:100%;
    height: 100%;
    margin: 0 10px 10px 0;
    padding-right: 0;
    max-height:600px;
    padding-bottom: 20px;
`

export const Button =  styled(LinkScroll)`
    width: 300px;
    border: solid 20px ${({dark}) => (dark ? '#33ffd6' : 'black')};
    border-radius:20px;
    text-align:center;
    background: ${({dark}) => (dark ? '#33ffd6' : 'black')};
    color: ${({dark}) => (dark ? 'black' : '#33ffd6')};
    font-weight:600;
    font-size:1.5rem;
    cursor: pointer;
`
/*background: ${({dark}) => (dark ? '#33ffd6' : 'black')};
    color: ${({dark}) => (dark ? 'black' : '#33ffd6')};*/