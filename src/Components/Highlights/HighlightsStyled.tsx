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
  background-position: center;
  background-size: cover;
  margin-bottom: 24px;

  .HighLights-Content {
    height: 100%;
    padding: 16px; /* Reduzi o padding para ocupar menos espaço */
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .HighLights-Button {
    width: 120px; /* Reduzi o tamanho do botão */
   
  }

  .HighLights-title {
    width: 300px; /* Reduzi a largura do título */
     
  }

  .HighLights-info {
    display: flex;
    gap: 8px; /* Reduzi o espaço entre os itens do flex container */
  }

  .HighLights-info .h2 {
    color: var(--color-gray);
    font-weight: bold;
    font-size: 14px; /* Reduzi o tamanho da fonte do elemento com classe h2 */
  }

  .HighLights-watch {
    width: 220px; /* Reduzi a largura do bloco HighLights-watch */
 
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto; /* Ajustei a altura automaticamente conforme o conteúdo */
  }
`;

export default HighlightsStyled;
