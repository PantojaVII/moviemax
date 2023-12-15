import { styled } from "styled-components";

const SectionTwoStyled = styled.div`
  flex: 1;
  flex-direction: column;
 
  h1{
    font-size: 24px;
    
  }
  .more-movie{
    margin: auto;
    width: 280px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export default SectionTwoStyled;
