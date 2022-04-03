import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
//import { Button } from "../Button/Button";
import { PostContainer,PostWrapper, InfoRow, LeftColumn, TopText, Title, Subtitle, BtnWrap,TextWrapper, ImgWrapper,Img, RightColumn,Button } from "../Post/Post.elements";
import GoogleMaps from "../Contact/GoogleMaps";
import { FaPhone , FaCaretRight as FaArrowRight} from 'react-icons/fa';
import styled from "styled-components";
import { Teal } from "../HomeHero/HomeHero.elements";
export default function ContactDetails({...props}){
    
    const details = props.dataArray;

    const TealPhone = styled.span`
    color: #33ffd6;
    font-size: 15px;
    line-height: 30px;
    `

    const StyledUl = styled.ul`
    list-style: none;
    line-height: 40px;
    `
    
    const detailsSection = details.map(item => {

        return (
            
            <li>
                <TealPhone><FaArrowRight/></TealPhone> {item}
            </li>
        )
    })

    return(
        <PostContainer lightBg={props.darkText}>
            <PostWrapper lightBg={props.lightBg}>
                <InfoRow imgStart={props.imgStart}>
                    <LeftColumn>
                        <TextWrapper>
                            <TopText darkText={props.darkText}>{props.topLine}</TopText>
                            <Title lightText={props.lightText}>{props.headline}</Title>
                            <Subtitle darkText={props.darkText}>{/*props.desription*/} <StyledUl>{detailsSection}</StyledUl></Subtitle>
                            {/*<BtnWrap>
                            <Button to='home' dark={props.dark}>{props.buttonLabel}</Button>
                            </BtnWrap>*/}
                        </TextWrapper>
                    </LeftColumn>
                    <RightColumn>
                        <ImgWrapper>
                            {/*<Img src={props.img}/>*/}
                            <GoogleMaps/>

                        </ImgWrapper>
                    </RightColumn>
                </InfoRow>
            </PostWrapper>
        </PostContainer>
    )
}