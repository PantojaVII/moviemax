import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface SectionAppProps {
  children: ReactNode;
}
const AppStyled = styled.div`
   flex: 1; 
`
export default function SectionApp({ children }: SectionAppProps) {
  return <AppStyled>{children}</AppStyled>;
}
