import { styled } from "styled-components";

interface RatingStyledProps {
    $backgroundColor?: string;
}

export const RatingStyled = styled.section<RatingStyledProps>`
display: flex;
gap: 12px;
font-size: 32px;
align-items: center;
color: yellow;
p{
    font-size: 24px;
    color: white;
    font-weight: 600;
}

`;


