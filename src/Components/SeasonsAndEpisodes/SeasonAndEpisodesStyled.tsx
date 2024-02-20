import { styled, keyframes } from 'styled-components';

export const growFromLeft = keyframes`
  0% {
    width: 0;
  }
  90% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SelectedStyled = styled.div`
  width: 80%;
  height: 8px;
  margin: 4px auto;
  border-radius : 25px ;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 25px;
    height: 100%;
    background-color: var(--secondary);
    animation: ${growFromLeft} 0.5s ease-in-out forwards, ${fadeIn} 0.5s ease-in-out;
  }
`;