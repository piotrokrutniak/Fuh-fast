import React from "react";
//import { Button } from "../Button/Button";
import { PostContainer,PostWrapper, InfoRow, LeftColumn, TopText, Title, Subtitle, BtnWrap,TextWrapper, ImgWrapper,Img, RightColumn,Button } from "./Post.elements";

export default function Post({...props}){
    
    return(
        <PostContainer>
            <PostWrapper>
                <InfoRow imgStart={props.imgStart}>
                    <LeftColumn>
                        <TextWrapper>
                            <TopText>{props.topLine}</TopText>
                            <Title lightText={props.lightText}>{props.headline}</Title>
                            <Subtitle darkText={props.darkText}>{props.desription}</Subtitle>
                            <BtnWrap>
                            <Button to='home' dark={props.dark}>{props.buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </LeftColumn>
                    <RightColumn>
                        <ImgWrapper>
                            <Img src={props.img}/>
                        </ImgWrapper>
                    </RightColumn>
                </InfoRow>
            </PostWrapper>
        </PostContainer>
    )
}