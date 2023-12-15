import { styled } from "styled-components";

interface ContainerMasterProps {
    children: React.ReactNode;
}

const ContainerMasterStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  @media (max-width: 768px) {
    display: flex;
  flex-direction: column;
  padding: 0 0;
  }
`;
export default function ContainerMaster({ children }: ContainerMasterProps) {
    return (
        <ContainerMasterStyled>
            {children}
        </ContainerMasterStyled>
    );
}
