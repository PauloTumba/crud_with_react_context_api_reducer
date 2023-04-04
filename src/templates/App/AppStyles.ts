import { type } from "os";
import styled from "styled-components";

type BotaoProps={
    bg:string
}


export const Button=styled.button`
    background-color:yellow
    color:black;
    `;
export const Div=styled.div<BotaoProps>`
    background-color: red;
    background: ${props=>props.bg};


    @media (max-width:500px) {
        background-color:brown;
    }

`