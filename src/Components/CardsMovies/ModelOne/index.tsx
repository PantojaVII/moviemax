import CardMovieModelOneStyled from "./CardMovieModelOneStyled";
import { MdLocalMovies } from "react-icons/md";
import { BiSolidTimer } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import IMovies from "../../../Interfaces/IMovies";
import { useEffect, useState, useRef } from "react";
interface CardMovieModelOneProps {
  movie: IMovies;
  children?: React.ReactNode;
}

export default function CardMovieModelOne({
  children,
  movie,
}: CardMovieModelOneProps) {
  const timeoutRef = useRef<number | null>(null);
  const handleMouseEnter = () => {
    // Limpa qualquer timeout pendente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      const cardMovieElement = document.getElementById("CardMovieModelOneStyled");
      if (cardMovieElement) {
        cardMovieElement.style.zIndex = "200";
      }
    }, 500);
  };

  const handleMouseLeave = () => {
    // Limpa qualquer timeout pendente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      const cardMovieElement = document.getElementById("CardMovieModelOneStyled");
      if (cardMovieElement) {
        cardMovieElement.style.zIndex = "0";
      }
    }, 200);
  };
  return (
    <CardMovieModelOneStyled
      id="CardMovieModelOneStyled"
      $backgroundImg={movie.coverTwo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CardMovieModelOne-ImgMovie">
        <Link to="/app/player">
          <img src={movie.coverTwo} alt={movie.name} />
        </Link>
      </div>
      <div className="CardMovieModelOne-Info">
        <div className="CardMovieModelOne-Title">{movie.name}</div>
        <Link to={"filmes/"}>
          <div className="CardMovieModelOne-Gender">

            <div className="genrer">
              {movie.genres.map((genre, index) => (
                <div className="inter-genre">
                  <MdLocalMovies className="icon"></MdLocalMovies>
                  <a key={index} >
                    {genre}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Link>
        <div className="CardMovieModelOne-age">
          <span>{movie.age_groups}</span>
        </div>
        <div className="CardMovie-Rating">
          <BsFillStarFill className="icon mr-2"></BsFillStarFill>
          <div className="Rating">9,5</div>
        </div>
      </div>
    </CardMovieModelOneStyled>
  );
}
