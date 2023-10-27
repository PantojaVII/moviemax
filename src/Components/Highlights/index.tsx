import Button from "../Button";
import HighlightsStyled from "./HighlightsStyled";
import { AiOutlinePlayCircle } from 'react-icons/ai';

interface HighlightsProps {
  backgroundImg?: string;
}

export default function Highlights({ backgroundImg }: HighlightsProps) {
  return (
    <HighlightsStyled $backgroundImg={backgroundImg}>
      <div className="HighLights-Content">
        <div className="HighLights-Button">
          <Button
            value="Filme"
            backgroundColor="var(--background-Buttons)"
          ></Button>
        </div>
        <div className="HighLights-title">
          <h2 className="highlight-large">Homem aranha sem volta pra casa</h2>
        </div>
        <div className="HighLights-info">
          <li className="h2">hd</li>
          <li className="h2">Fime</li>
          <li className="h2">Marvel</li>
          <li className="h2">Heróis</li>
        </div>
        <div className="HighLights-watch">
          {" "}
          <Button
            icon={<AiOutlinePlayCircle></AiOutlinePlayCircle>}
            value="Assistir"
            backgroundColor="var(--primary)"
          ></Button>
        </div>
      </div>
    </HighlightsStyled>
  );
}
