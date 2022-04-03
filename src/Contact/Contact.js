import React from "react";
import styled from "styled-components";

export const Contact = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    color: black;
    background: #33ffd6;
    border: solid 20px #33ffd6;
    border-radius:20px;
    font-weight: 500;
    z-index:999;

    @media screen and (max-width: 760px){
        display: flex;
        margin: auto;
        align-self: center;
    }
`

export default Contact