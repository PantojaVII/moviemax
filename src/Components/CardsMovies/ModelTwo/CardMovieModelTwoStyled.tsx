import { styled } from "styled-components";
interface CardMovieModelTwoStyledProps{
  width?: string;
}
const CardMovieModelTwoStyled = styled.div<CardMovieModelTwoStyledProps>`
    max-width: ${(props) => props.width};
  .CardMovieModeltwo-movie {
    max-width: ${(props) => props.width};
    max-height: 273px;
  }
 
  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  .CardMovieModeltwo-info {
    display: flex;
 
  }
`;

export default CardMovieModelTwoStyled;
