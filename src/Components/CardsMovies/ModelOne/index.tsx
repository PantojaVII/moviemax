import CardMovieModelOneStyled from "./CardMovieModelOneStyled";
import { MdLocalMovies } from "react-icons/md";
import { BiSolidTimer } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import IMovies from "../../../Interfaces/IMovies";
interface CardMovieModelOneProps {
  movie: IMovies;
  children?: React.ReactNode;
}

export default function CardMovieModelOne({
  children,
  movie,
}: CardMovieModelOneProps) {
  return (
    <CardMovieModelOneStyled
      className="ModelOne"
      $backgroundImg={movie.coverTwo}
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
