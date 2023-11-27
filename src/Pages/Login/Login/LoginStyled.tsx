/* LoginStyled.tsx */
import { styled } from "styled-components";

interface HomeStyledProps {
  $backgroundImg?: string;
}

const LoginStyled = styled.main<HomeStyledProps>`
  height: 100vh;

  @media screen and (max-width: 790px) {
    /* Adjust styles for smaller screens */
    display: flex;
    flex-direction: column;
    
    /* Reset height for smaller screens */
    height: auto;
  }
`;

export default LoginStyled;
