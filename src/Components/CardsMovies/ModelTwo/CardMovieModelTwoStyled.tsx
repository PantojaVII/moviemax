import { styled } from "styled-components";
interface CardMovieModelTwoStyledProps {
  width?: string;
}
const CardMovieModelTwoStyled = styled.div<CardMovieModelTwoStyledProps>`

    min-width: ${(props) => props.width};
    max-width: ${(props) => props.width};
    overflow: visible; // Adicione esta linha
    
  .CardMovieModeltwo-movie {
    max-width: ${(props) => props.width};
   }
  .trailer {
    max-width: ${(props) => props.width};
    border: none;
    border-radius: 8px;
  }
  &:hover {
    z-index: 100;
  }
  img {
    width: 100%;
    border-radius: 25px;
  }
  .CardMovieModeltwo-info {
  display: flex;
  flex-direction: column; /* Adiciona esta linha para colocar os itens em coluna */
}
  .CardMovie-Title{
    display: flex;
    flex-wrap: wrap; /* Permite que o conteúdo quebre para a próxima linha se não couber */
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .zoom .CardMovieModeltwo-info{
    padding: 8px;
  }
  .zoom .CardMovie-Title{
    font-size: 12px;
  }
  .zoom .CardMovie-Rating{
    font-size: 6px;
  }
  .zoom .Rating{
    font-size: 6px;
  }

  .zoom .icon{
    width: 15px;
  }
  .zoom p{
    font-size: 8px;
  }
  
  @media (max-width: 1500px) {
    width: 250px;
    .CardMovieModeltwo-movie {
      width: 250px;
    }
  }
`;

export default CardMovieModelTwoStyled;
