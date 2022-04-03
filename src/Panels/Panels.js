import React, {useState} from "react";
import { H1 } from "../Footer/Footer.components";
import { Panel, PanelDesc, PanelDescFlex, PanelDescWrapper, PanelImg, PanelImgWrapper, PanelsContainer, PanelsGrid, PanelsWrapper, PanelTitle,ContainterTitle } from "./Panels.elements";

export default function Panels(props){
    return(
        <PanelsContainer>
            <ContainterTitle>W nasze ofercie znajdziecie pańswo:</ContainterTitle>
        <PanelsWrapper>
            <PanelsGrid>

                <Panel>
                    <PanelImgWrapper>
                        <PanelImg src={require("../img/air-conditioning.jpg")}/>
                    </PanelImgWrapper>
                    <PanelDescWrapper>
                        <PanelDescFlex>
                            <PanelTitle>
                                Klimatyzacje
                            </PanelTitle>
                            <PanelDesc>
                            Szybki, dostosowany do Ciebie montaż wraz z serwisem i przeglądami.
                            </PanelDesc>
                        </PanelDescFlex>
                    </PanelDescWrapper>
                </Panel>

                <Panel>
                    <PanelImgWrapper>
                        <PanelImg src={require("../img/heat-pump.jpg")}/>
                    </PanelImgWrapper>
                    <PanelDescWrapper>
                        <PanelDescFlex>
                            <PanelTitle>
                                Pompy Ciepła
                            </PanelTitle>
                            <PanelDesc>
                            Pompy ciepła są najnowocześniejszą i najczystszą formą ogrzewania budynków.
                            </PanelDesc>
                        </PanelDescFlex>
                    </PanelDescWrapper>
                </Panel>

                <Panel>
                    <PanelImgWrapper>
                        <PanelImg src={require("../img/heating.jpg")}/>
                    </PanelImgWrapper>
                    <PanelDescWrapper>
                        <PanelDescFlex>
                            <PanelTitle>
                                Instalacje grzewcze
                            </PanelTitle>
                            <PanelDesc>
                            Kompleksowy montaż instalacji budowlanych dla klientów indywidualnych oraz firm.
                            </PanelDesc>
                        </PanelDescFlex>
                    </PanelDescWrapper>
                </Panel>
                
            </PanelsGrid>
        </PanelsWrapper>
        </PanelsContainer>
    )

}