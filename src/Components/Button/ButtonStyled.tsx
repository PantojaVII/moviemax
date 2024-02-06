import { styled } from "styled-components";

interface ButtonStyledProps {
  $backgroundColor?: string;
  $width?: string;
  $height?: string;
  $fontSize?: string;
}

const ButtonStyle = styled.button<ButtonStyledProps>`
  background-color: ${(props) => props.$backgroundColor || 'var(--primary)'};
  border-radius: 25px;
  height: ${(props) => props.$height || '45px'};
  width: ${(props) => props.$width || '100%'};;

  i {
    font-size: ${(props) => props.$fontSize || '24px'};;
  }

  .text-button {
    color: white;
    font-size: 12px;
  }
`;


export default ButtonStyle;
