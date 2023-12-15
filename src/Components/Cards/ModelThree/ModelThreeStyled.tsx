import { styled } from "styled-components";

interface Props {
    $width?: string;
    $height?: string;
    $backgroundColor?: string
}

export const ModelThreeStyled = styled.div<Props>` 
display: flex;
align-items: center;
justify-content: center;
width: ${(props) => props.$width || '180px'};
height: ${(props) => props.$height || '45px'};
background-color: ${(props) => `${props.$backgroundColor}` || ''};
font-size: 18px;
font-weight: bold;
border-style: inherit;
border-width: 2px;
border-color:${(props) => props.$backgroundColor ? props.$backgroundColor : 'var(--color-gray)'};
color: ${(props) => props.$backgroundColor ? 'white' : 'var(--color-gray)'};
border-radius: 25px;
min-width: 180px;
transition: ease-in 0.15s;
cursor: pointer;

&:hover{
    background-color: var(--secondary);
    color:white;
    border-color: var(--secondary);
}


`