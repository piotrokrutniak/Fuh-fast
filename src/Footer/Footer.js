import React from "react";
import { FooterContainer,FooterWrapper,FooterColumn,P,H1,ContentWrapper } from "./Footer.components";


export default function Footbar(){
    return(
        
        <FooterContainer>
            <FooterWrapper>
                
                <FooterColumn>
                    <ContentWrapper>
                    <H1>Jacek Stawowy</H1>
                    <P>Kraków</P>
                    <P>NIP: 6791924300</P>
                    </ContentWrapper>
                </FooterColumn>
                
                <FooterColumn>
                    <ContentWrapper>
                    <H1>KONTAKT</H1>
                    <P>Tel.: +48 32/730-22-45</P>
                    <P>Pon-Pt 8.00-15.00</P>
                    </ContentWrapper>
                </FooterColumn>

                {/*<FooterColumn>
                   <ContentWrapper>
                    <H1></H1>
                    <P></P>
                    </ContentWrapper>
                </FooterColumn>*/}
            
            </FooterWrapper>
        </FooterContainer>

    )
}