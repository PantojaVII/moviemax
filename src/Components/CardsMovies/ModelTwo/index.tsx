import { Link } from "react-router-dom";
import CardMovieModelTwoStyled from "./CardMovieModelTwoStyled";
import { BsFillStarFill } from "react-icons/bs";
import IMovies from "../../../Interfaces/IMovies";
import { useState, useEffect, useRef } from "react";

interface CardMovieModelTwoProps {
  movie: IMovies;
  children?: React.ReactNode;
  width?: string;
}

export default function CardMovieModelTwo({
  movie,
  children,
  width = "250px",
}: CardMovieModelTwoProps) {
  const [showTrailer, setShowTrailer] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    // Limpa qualquer timeout pendente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Define showTrailer como true após um atraso de 2 segundos
    timeoutRef.current = window.setTimeout(() => {
      setShowTrailer(true);
      const cardMovieElement = document.getElementById("CardMovieModelTwoStyled");
      if (cardMovieElement) {
        cardMovieElement.style.zIndex = "100";
      }
    }, 500);
  };

  const handleMouseLeave = () => {
    // Limpa qualquer timeout pendente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Define showTrailer como false após um pequeno atraso
    timeoutRef.current = window.setTimeout(() => {
      setShowTrailer(false);
      const cardMovieElement = document.getElementById("CardMovieModelTwoStyled");
      if (cardMovieElement) {
        cardMovieElement.style.zIndex = "0";
      }
    }, 200);
  };

  useEffect(() => {
    // Cleanup the state when the component unmounts
    return () => setShowTrailer(false);
  }, []);
  return (
    <CardMovieModelTwoStyled
      id="CardMovieModelTwoStyled"
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CardMovieModeltwo-movie">
        <Link to={`/app/player/${movie.id}`}>
          {showTrailer ? (
            <div className="zoom">
              <iframe
                className="trailer"
                src={`${movie.playerTrailer}?autoplay=0&controls=0&modestbranding=1`}
                title={movie.name}
                allowFullScreen
              ></iframe>
              {/* <img src={movie.coverOne} alt={movie.name} /> */}
              <div className="CardMovie-Title ml-2 mt-4">
                {movie.name}
              </div>
              <div className="CardMovieModeltwo-info">
                <div className="CardMovie-Rating">
                  <BsFillStarFill className="icon mr-2"></BsFillStarFill>
                  <div className="Rating">9,5</div>
                  <span className="divider">|</span>
                  {movie.info.includes('FILME') ? 'Filme' : movie.info.includes('SERIE') ? 'Série' : ''}
                </div>
                <p className="synopsis">{movie.synopsis}</p>
              </div>
            </div>
          ) : (
            <>
              <img src={movie.coverOne} alt={movie.name} />
              <div className="CardMovie-Title ml-2 mt-4">
                {movie.name}
              </div>
              <div className="CardMovieModeltwo-info">
                <div className="CardMovie-Rating">
                  <BsFillStarFill className="icon mr-2"></BsFillStarFill>
                  <div className="Rating">9,5</div>
                  <span className="divider">|</span>
                  {movie.info.includes('FILME') ? 'Filme' : movie.info.includes('SERIE') ? 'Série' : ''}
                  <span className="divider">|</span>
                  <div className="CardMovie-age">
                    <span>{movie.age_groups}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </Link>
      </div>
    </CardMovieModelTwoStyled>
  );
}
