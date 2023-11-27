import IMovies from "../../Interfaces/IMovies";
import Button from "../Button";
import HighlightsStyled from "./HighlightsStyled";
import { AiOutlinePlayCircle } from 'react-icons/ai';

interface HighlightsProps {
  movieHighlight: IMovies;
}

export default function Highlights({ movieHighlight }: HighlightsProps) {
  console.log(movieHighlight);
  return (
    <>
      <HighlightsStyled $backgroundImg={movieHighlight.highlight}>
        <div className="HighLights-Content">
          <div className="HighLights-Button">
            <Button
              value="Filme"
              backgroundColor="var(--background-Buttons)"
            ></Button>
          </div>
          <div className="HighLights-title">
            <h2 className="highlight-large">{movieHighlight.name}</h2>
          </div>
          <div className="HighLights-info">
            {movieHighlight.info.map((infoItem, index) => (
              <li key={index} className="h2">{infoItem}</li>
            ))}
          </div>
          <div className="HighLights-watch">
            <Button
              icon={<AiOutlinePlayCircle></AiOutlinePlayCircle>}
              value="Assistir"
              backgroundColor="var(--primary)"
            ></Button>
          </div>
        </div>
      </HighlightsStyled>
    </>
  );
}
