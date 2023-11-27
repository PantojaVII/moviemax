import { styled } from "styled-components";

interface CardMovieModelOneStyledProps {
  $backgroundImg?: string;
}

const CardMovieModelOneStyled = styled.div<CardMovieModelOneStyledProps>`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  transition: transform 0.3s;
  border-radius: 25px;
 
 padding-right: 50px;

  &:hover {
  position: relative;
  z-index: 300;
  transform: scale(1.4);
  cursor: pointer;
  background-color: var(--secondary);
}
  .CardMovieModelOne-ImgMovie {
    min-width: 160px;
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
    font-size: 14px;
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
    font-size: 12px;
    transition: 0.3s;
  }
  .CardMovieModelOne-Gender .genrer .inter-genre{
    display: flex;
    width : auto ;
    align-items: center;
    transition: 0.3s;
  }
  .CardMovieModelOne-Gender .genrer a{
    padding-left: 2px;
    margin-top: 4px;
  }
  .CardMovieModelOne-Gender .genrer :hover{
    transition: 0.3s;
    color: var(--secondary);
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
