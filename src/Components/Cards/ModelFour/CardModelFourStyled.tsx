import { styled } from "styled-components";
interface CardModelFourStyledProps {
  width?: string;
}
const CardModelFourStyled = styled.div<CardModelFourStyledProps>`

    min-width: ${(props) => props.width};
    max-width: ${(props) => props.width};
    margin-left: 4px;
    margin-right: 4px;
    overflow: visible; // Adicione esta linha
    transition: 0.3s;
  .CardModelFour-info{
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 8px;
    padding: 4px;
  }
&:hover {
    
    background-color: var(--background-grey);
 
}

  
  img {
    width: 100%;
    border-radius: 25px;
  }
 
  @media (max-width: 1500px) {
    margin-top: 24px;
    width: 250px;
    .CardMovieModeltwo-movie {
      width: 250px;
    }
  }
 
@media (max-width: 1065px) {
      min-width: auto;
      max-width: 180px;
      margin-left: 4px;
      margin-right: 4px;
      &:hover {
      position: relative;
      background-color: var(--background-black);
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      transform: scale(1);
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s,  z-index 0.3s; 
      transition-delay: 0.5s;
    }
    img{
      width: 180px;
    }
     
  }
`;

export default CardModelFourStyled;
