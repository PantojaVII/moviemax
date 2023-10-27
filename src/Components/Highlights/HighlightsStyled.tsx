import { styled } from "styled-components";

interface HighlightsStyledProps {
  $backgroundImg?: string;
}

const HighlightsStyled = styled.div<HighlightsStyledProps>`
  width: 100%;
  height: 550px;
  border-radius: 24px;
  background-image: linear-gradient(
      to left,
      transparent 10%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${(props) => props.$backgroundImg});
  background-repeat: no-repeat;
  background-position: center; /* Centraliza a imagem horizontal e verticalmente */
  background-size: cover; /* Faz a imagem ocupar todo o espaço da div mantendo a proporção */

  .HighLights-Content {
    height: 100%;
    padding: 56px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .HighLights-Button {
    width: 160px;
  }
  .HighLights-title {
    width: 400px;
  }
  .HighLights-info {
    display: flex;
    gap: 12px;
  }
  .HighLights-info .h2 {
    color: var(--color-gray);
    font-weight: bold;
  }
  .HighLights-watch {
    width: 320px;
  }
`;
export default HighlightsStyled;
