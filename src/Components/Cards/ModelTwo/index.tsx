import { Link } from "react-router-dom";
import CardModelTwoStyled from "./CardModelTwoStyled";
import { BsFillStarFill } from "react-icons/bs";
import IMovies from "../../../Interfaces/IMovies";
import { useState, useEffect, useRef } from "react";
import PlayTrailer from "../../PlayTrailer";
import ISeries from "../../../Interfaces/ISeries";

interface CardMovieModelTwoProps {
  movie?: IMovies;
  serie?: ISeries;
  children?: React.ReactNode;
  width?: string;
}

export default function CardMovieModelTwo({
  movie,
  serie,
  children,
  width = "250px",
}: CardMovieModelTwoProps) {
  const [showTrailer, setShowTrailer] = useState(false);
  const timeoutRef = useRef<number | null>(null);
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

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        const cardMovieElement = document.getElementById("CardModelTwoStyled");
        if (cardMovieElement) {
          cardMovieElement.style.zIndex = "100";
          setShowTrailer(true);

        }
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    // Limpa qualquer timeout pendente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Define showTrailer como false após um pequeno atraso
    timeoutRef.current = window.setTimeout(() => {
      setShowTrailer(false);
      const cardMovieElement = document.getElementById("CardModelTwoStyled");
      if (cardMovieElement) {
        cardMovieElement.style.zIndex = "0";
      }
    }, 200);
    // Adicione a condição para remover a classe zoom se a largura da tela for menor ou igual a 768 pixels

  };


  useEffect(() => {
    // Cleanup the state when the component unmounts
    return () => setShowTrailer(false);
  }, []);

  return (
    <CardModelTwoStyled
      id="CardModelTwoStyled"
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content && (
        <div className="CardMovieModeltwo-movie" >
          <a href={`/app/player/${type}/${content.id}`}>
            {showTrailer ? (
              <div className="zoom">
                <PlayTrailer url={content?.playerTrailer}></PlayTrailer>
                <div className="CardMovie-Title ml-2 mt-4">{content.name}</div>
                <div className="CardMovieModeltwo-info">
                  <div className="CardMovie-Rating">
                    <BsFillStarFill className="icon mr-2"></BsFillStarFill>
                    <div className="Rating">9,5</div>
                    <span className="divider">|</span>
                    {content.info?.includes('FILME') ? 'Filme' : content.info?.includes('SERIE') ? 'Série' : ''}
                  </div>
                  <p className="synopsis">{content.synopsis}</p>
                </div>
              </div>
            ) : (
              <>
                <img src={content.coverOne} alt={content.name} />
                <div className="CardMovie-Title ml-2 mt-4">{content.name}</div>
                <div className="CardMovieModeltwo-info">
                  <div className="CardMovie-Rating">
                    <BsFillStarFill className="icon mr-2"></BsFillStarFill>
                    <div className="Rating">{content.rating}</div>
                    <span className="divider">|</span>
                    {content.info?.includes('FILME') ? 'Filme' : content.info?.includes('SERIE') ? 'Série' : ''}
                    <span className="divider">|</span>
                    <div className="CardMovie-age">
                      <span>{content.age_groups}</span>
                    </div>
                  </div>
                </div>
              </>
            )
            }
          </a>
        </div>
      )}
    </CardModelTwoStyled>
  );
}
