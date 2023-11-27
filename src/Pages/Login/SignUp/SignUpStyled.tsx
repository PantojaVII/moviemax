import { styled } from "styled-components";

interface SignUpProps {
  $backgroundImg?: string;
}

const SignUpStyled = styled.main<SignUpProps>`
height: 100vh;

@media screen and (max-width: 790px) {
  /* Adjust styles for smaller screens */
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  /* Reset height for smaller screens */
  height: auto;
}
`;

export default SignUpStyled;
