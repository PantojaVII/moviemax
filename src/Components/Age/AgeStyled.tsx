import { styled } from "styled-components";

interface AgeStyledProps {
    $backgroundColor?: string;
}

export const AgeStyled = styled.div<AgeStyledProps>`
 
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
 
   span {
    
    padding: 0 16px;
    border-style: solid;
    border-radius: 25px;
    border-width: 1px;
    border-color: var(--color-gray);
  }
`;


