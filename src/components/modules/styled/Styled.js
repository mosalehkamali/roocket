"use client"

import styled from "styled-components";

export const SaveButton = styled.button`
background-color:#3b83f63b;
color: #3b82f6;
border: none;
padding: 4px;
margin-left: 12px;
border-radius: 0.25rem;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
    background-color: #3b82f6;
    color: #fff;
}
`

export const SocialMediaButton = styled.button`
width: 2.5rem;
height: 2.5rem;
background-color:var(--card-bg-color);
color:  var( --button-color);
border: none;
padding:2px 4px 0 4px;
border-radius: 0.25rem;
font-size: 1.2rem;
text-align: center;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
    background-color: var( --button-color);
    color: #fff;
}`