import { styled } from "styled-components";

interface ConteinerProps {
  children: React.ReactNode;
}

const ContainerStyled = styled.section`
  display: flex;
  padding: 0 24px 0 12px;
  flex: 1;
  gap: 8px;
  margin-top: 50px;
`;
export default function Container({ children }: ConteinerProps) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
}
