import React from "react";
import { styled } from "styled-components";

interface ContainerModelOneProps {
    children: React.ReactNode
}

const ContainerModelOneStyled = styled.div`
   margin-top: 24px;
   flex-direction: column;
   flex: 3; 
`;
export default function ContainerModelOne({ children }: ContainerModelOneProps) {
    return (
        <ContainerModelOneStyled>
            {children}
        </ContainerModelOneStyled>
    );
}
