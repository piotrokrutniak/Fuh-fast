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
        top: 50%;
        left: 50%;
        height: 20px;
        width: 300px;
        transform: translate(-50%, 400%);
    }
`

export default Contact