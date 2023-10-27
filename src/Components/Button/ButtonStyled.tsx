import { styled } from "styled-components";

interface ButtonStyledProps {
  $backgroundColor?: string;
}

const ButtonStyle = styled.button<ButtonStyledProps>`
  background-color: ${(props) => props.$backgroundColor || 'var(--primary)'};
  margin-top: 24px;
  border-radius: 25px;
  height: 45px;

  i {
    font-size: 24px;
  }

  .text-button {
    color: white;
    font-size: 12px;
  }
`;


export default ButtonStyle;
