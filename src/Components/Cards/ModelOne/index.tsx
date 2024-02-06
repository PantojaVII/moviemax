import CardModelOneStyled from "./CardModelOneStyled";
import { MdLocalMovies } from "react-icons/md";
import { BiSolidTimer } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import IMovies from "../../../Interfaces/IMovies";
import ISeries from "../../../Interfaces/ISeries";
import { useEffect, useState, useRef } from "react";
interface CardMovieModelOneProps {
  movie?: IMovies;
  serie?: ISeries;
  children?: React.ReactNode;
}

export default function CardModelOne({
  children,
  movie,
  serie,
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
  const [content, setContent] = useState<IMovies | ISeries | null>(null);
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    // Dependências movie e serie adicionadas
    if (movie) {
      setContent(movie)
      setType("movie")
    } else if (serie) {

      setContent(serie)
      setType("serie")
    }
  }, [movie, serie]);

  return (
    <CardModelOneStyled
      id="CardModelOneStyled"
      $backgroundImg={content?.coverTwo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={`/app/player/${type}/${content?.id}`}>
        <div className="CardMovieModelOne-ImgMovie">

          <img src={content?.coverTwo} alt={content?.name} />

        </div>
        <div className="CardMovieModelOne-Info">
          <div className="CardMovieModelOne-Title">{content?.name}</div>
          <div className="CardMovieModelOne-Gender">
            <div className="genrer">
              {content?.genres.map((genre, index) => (
                <div className="inter-genre" key={index}>
                  <MdLocalMovies className="icon"></MdLocalMovies>
                  <a>{genre}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="CardMovieModelOne-age">
            <span>{content?.age_groups}</span>
          </div>
          <div className="CardMovie-Rating">
            <BsFillStarFill className="icon mr-2"></BsFillStarFill>
            <div className="Rating">9,5</div>
          </div>
        </div>
      </a>
    </CardModelOneStyled>

  );
}
