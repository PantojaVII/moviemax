import { styled } from "styled-components";

interface CardMovieModelOneStyledProps {
  $backgroundImg?: string;
}

const CardMovieModelOneStyled = styled.div<CardMovieModelOneStyledProps>`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  .CardMovieModelOne-ImgMovie {
    width: 160px;
    height: 220px;
  }
  .CardMovieModelOne-ImgMovie img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
   
  }


  .CardMovieModelOne-Info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .CardMovieModelOne-Title {
    font-size: 18px;
    font-weight: bold;
    color: white;
    transition: 0.3s;
  }
  .CardMovieModelOne-Title:hover {
    cursor: pointer;

    color: var(--primary);
  }
  .CardMovieModelOne-Gender {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .CardMovieModelOne-age {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  .CardMovieModelOne-age span {
    padding: 0 16px;
    border-style: solid;
    border-radius: 25px;
    border-width: 1px;
    border-color: var(--color-gray);
  }
 
`;

export default CardMovieModelOneStyled;
