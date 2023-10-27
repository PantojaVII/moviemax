import { ReactNode } from "react";
import { styled } from "styled-components";

interface ContentProps {
  children: ReactNode;
}

const ContentStyled = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
 
`;

function Content({ children }: ContentProps) {
  return <ContentStyled>{children}</ContentStyled>;
}

export default Content;
