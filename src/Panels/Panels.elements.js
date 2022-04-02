import styled from "styled-components";

export const PanelsContainer = styled.div`
    width: 100%;
    min-height: 350px;
    background: rgba(248,248,248);
    color:black;
    position: relative;
    padding-top: 0px;


`

export const PanelsWrapper = styled.div`
    padding: 70px 150px;
    margin: 0px auto ;
    position: relative;
    //background-color: rgba(0,0,0,0.4);
    max-width: 100%;
    @media screen and (max-width: 1410px){
        padding: 0px !important;
        border: 10px solid transparent;
    }
    @media screen and (max-width: 630px){
        padding: 0px !important;
        border: 10px solid transparent;
    }
`
export const PanelsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    
    grid-gap: 20px;
    width: 100%;
    position: relative;
    
    @media screen and (max-width: 760px){
        grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    }
`
export const Panel = styled.div`
    //background: white;
    border-radius: 20px;
    margin:  30px auto ;
    color: white;
    min-height: 400px;
    width: 350px;
    rgba(245,245,245);
    -webkit-box-shadow: 0px 7px 24px -4px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 7px 24px -4px rgba(66, 68, 90, 1);
    box-shadow: 0px 7px 24px -4px rgba(66, 68, 90, 1);

    &:hover{
        transform: scale(1.02);
    }

    @media screen and (max-width: 760px){
        width: 100%;
        min-width: 430px;
        margin: 0px auto;
        border-radius: 0px;
        &:hover{
        transform: scale(1.00);
    }
    }
`
export const PanelImgWrapper = styled.div`
    background-color: palegoldenrod;
    width: 350px;
    height: 256px;
    display: flex;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 20px;
    @media screen and (max-width: 760px){
        width: 100%;
        min-width: 430px;
        margin: 0px auto;
        border-radius: 0px;
    }
`

export const PanelImg = styled.img`
    width: 350px;
    height: 256px;
    display: flex;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    @media screen and (max-width: 760px){
        width: 100%;
        min-width: 430px;
        margin: 0px auto;
        border-radius: 0px;
    }
`

export const PanelDescWrapper = styled.div`
    width: 100%;
    height: auto;
`

export const PanelDescFlex = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`

export const PanelTitle = styled.h1`
    color: black;
    background-color: white;
    font-size: 25px;
    border: 10px solid transparent ;

    
`

export const PanelDesc = styled.h2`
    color: black;
    font-size: 16px;
    border: solid transparent 10px;
    min-height: 30px;
    border-radius: 20px;
    font-weight: 500;
    background: 
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    @media screen and (max-width: 630px){
        
        border-radius: 0px !important;
    }
`