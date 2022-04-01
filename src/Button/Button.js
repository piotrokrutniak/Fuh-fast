import React from "react";
import styled from "styled-components";

import {Link} from 'react-scroll'

export const Button =  styled(Link)`
    border-radius:50px;
    background: ${({dark})=>(dark ? '#33ffd6':'black')};
    color: ${({dark})=>(dark ? 'black':'#33ffd6')};
    width: 200px;
    display: flex;
    text-align:center;
`