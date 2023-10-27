import CardMovieModelOneStyled from "./CardMovieModelOneStyled";
import { MdLocalMovies } from "react-icons/md";
import { BiSolidTimer } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
interface CardMovieModelOneProps {
  backgroundImg: string;
  children?: React.ReactNode;
}

export default function CardMovieModelOne({
  children,
  backgroundImg,
}: CardMovieModelOneProps) {
  return (
    <CardMovieModelOneStyled
      className="CardMovie"
      $backgroundImg={backgroundImg}
    >
      <div className="CardMovieModelOne-ImgMovie">
        <Link to="/app/player">
          <img src={backgroundImg} alt={backgroundImg} />
        </Link>
      </div>
      <div className="CardMovieModelOne-Info">
        <div className="CardMovieModelOne-Title">Top Gun Maverick </div>
        <Link to={"filmes/"}>
          <div className="CardMovieModelOne-Gender">
            <MdLocalMovies className="icon"></MdLocalMovies>Ação
          </div>
        </Link>
        <div className="CardMovieModelOne-age">
          <span>+16</span>
        </div>
        <div className="CardMovie-Rating">
          <BsFillStarFill className="icon mr-2"></BsFillStarFill>
          <div className="Rating">9,5</div>
        </div>
      </div>
    </CardMovieModelOneStyled>
  );
}
