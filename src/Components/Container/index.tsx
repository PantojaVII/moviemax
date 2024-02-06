import { styled } from "styled-components";

interface ConteinerProps {
  children: React.ReactNode;
}

const ContainerStyled = styled.section`
  display: flex;
  
  padding: 0 24px 0 12px;
  gap: 16px;
  margin-top: 50px;
 

  @media (max-width: 768px) {
    display: block;
    padding: 0;
    
  }
`;
export default function Container({ children }: ConteinerProps) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
}
