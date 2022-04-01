import React from "react";
import {HeroContainer,HeroPic,HeroOverlay,HeroDesc, HeroTitle, HeroText, Teal} from "./HomeHero.elements"
console.log(HeroPic)
export default function HomeHero(){
    return(
    <HeroContainer>
        <HeroPic src={require('../img/img-1.jpg')}/>
        <HeroDesc>
            <HeroTitle>F.U.H FAST <br/>Jacek Stawowy</HeroTitle>
            <HeroText>Klimatyzacje <Teal>•</Teal> Pompy ciepła <Teal>•</Teal> Instalacje grzewcze</HeroText>
        </HeroDesc>
        
        
    </HeroContainer>
)
}