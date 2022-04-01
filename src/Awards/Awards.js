import React from "react"
import { AwardsRow, AwardsContainer, AwardsWrapper, AwardsSection, Intro, TopText, Title, Subtitle,BtnWrap,Button } from "./Awards.components"
import {AwardsList} from "./AwardsList"
export default function Awards(props){
    return(
        <AwardsContainer lightBg={props.lightBg}>
            <AwardsWrapper>
                <AwardsRow imgStart={props.imgStart}>
                    <Intro>
                    <TopText>{props.topLine}</TopText>
                            <Title lightText={props.lightText}>{props.headline}</Title>
                            <Subtitle darkText={props.darkText}>{props.desription}</Subtitle>
                            <BtnWrap>
                            <Button to='home' dark={props.dark} text={props.textColor}>Certyfikaty</Button>
                            <Button to='home' dark={props.dark} text={props.textColor}>Nagrody</Button>
                            </BtnWrap>
                            
                    </Intro>
                    <AwardsSection>
                        {/*{AwardsList}*/}
                        {/*TUTAJ IDĄ NAGRODY ROZNE CO ZNALAZLEM, AUTOFILL GRID */}
                        <AwardsList/>
                    </AwardsSection>
                </AwardsRow>
            </AwardsWrapper>
        </AwardsContainer>

    )
}