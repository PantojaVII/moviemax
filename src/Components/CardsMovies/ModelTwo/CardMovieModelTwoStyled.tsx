import { styled } from "styled-components";
interface CardMovieModelTwoStyledProps {
  width?: string;
}
const CardMovieModelTwoStyled = styled.div<CardMovieModelTwoStyledProps>`

    min-width: ${(props) => props.width};
    max-width: ${(props) => props.width};
    margin-left: 4px;
    margin-right: 4px;
    overflow: visible; // Adicione esta linha
    transition: 0.3s;
    
&:hover {
    position: relative;
    background-color: var(--background-grey);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    transform: scale(1.3);
    cursor: pointer;

    transition: background-color 0.3s, transform 0.3s,  z-index 0.3s; 
    transition-delay: 0.5s;
}
  .CardMovieModeltwo-movie {
    max-width: ${(props) => props.width};
   }
  .trailer {
    max-width: ${(props) => props.width};
    border: none;
    border-radius: 8px;
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
  .synopsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}
`;

export default CardMovieModelTwoStyled;
