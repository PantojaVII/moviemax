import { Link } from "react-router-dom";
import CardMovieModelTwoStyled from "./CardMovieModelTwoStyled";
import { BsFillStarFill } from "react-icons/bs";
interface CardMovieModelTwoProps {
  backgroundImg: string;
  children?: React.ReactNode;
  width?: string;
}

export default function CardMovieModeltwo({
  backgroundImg,
  children,
  width = "394px",
}: CardMovieModelTwoProps) {
  return (
    <CardMovieModelTwoStyled width={width}>
      <div className="CardMovieModeltwo-movie CardMovie">
        <Link to="/app/player">
          <img src={backgroundImg} alt={backgroundImg} />
        </Link>
      </div>
      <div className="CardMovie-Title ml-2 mt-4">
        Homem aranha sem volta pra casa
      </div>
      <div className="CardMovieModeltwo-info">
        <div className="CardMovie-Rating">
          <BsFillStarFill className="icon mr-2"></BsFillStarFill>
          <div className="Rating">9,5</div>
          <span className="divider">|</span>
          <div className="type"> Filme </div>
          <span className="divider">|</span>
          <div className="CardMovie-age">
            <span>+16</span>
          </div>
        </div>
      </div>
    </CardMovieModelTwoStyled>
  );
}
