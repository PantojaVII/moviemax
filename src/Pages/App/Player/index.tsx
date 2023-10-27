import { HighlightSpanKind } from "typescript";
import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/CardsMovies/ModelOne";
import CardMovieModelTwo from "../../../Components/CardsMovies/ModelTwo";
import { styled } from "styled-components";
import SectionSlideMovies from "../../../Components/SectionSlideMovies";
import MoviePlayer from "../../../Components/Player";

const img = "/movies/capahomem.png";
const img1 = "/movies/01.jpg";
const img2 = "/movies/02.jpg";
const img3 = "/movies/03.jpg";

const imgHeig1 = "/movies/1.jpg";
const imgHeig2 = "/movies/2.jpg";
const imgHeig3 = "/movies/3.jpg";
const imgHeig4 = "/movies/4.jpg";
const imgHeig5 = "/movies/homemaranha.jpeg";

const SectionOneSectionTopStyled = styled.div``;

interface PlayerProps {}
export default function PagePlayer({}: PlayerProps) {
  return (
    <Container>
      <SectionOneStyled>
        <SectionOneSectionTopStyled>
          <MoviePlayer
            url={
              "https://www.youtube.com/embed/x6oF3Jxu7X0?si=nC3OjmeRmGL-yCjz"
            }
          />
        </SectionOneSectionTopStyled>
      </SectionOneStyled>

      <SectionTwoStyled title={"Recomendados"}>
        <CardMovieModelTwo
          width={"220px"}
          backgroundImg={imgHeig5}
        ></CardMovieModelTwo>
        <span className="divider"></span>
        <CardMovieModelTwo
          width={"220px"}
          backgroundImg={imgHeig3}
        ></CardMovieModelTwo>
        <span className="divider"></span>
        <CardMovieModelTwo
          width={"220px"}
          backgroundImg={imgHeig4}
        ></CardMovieModelTwo>
      </SectionTwoStyled>
    </Container>
  );
}
