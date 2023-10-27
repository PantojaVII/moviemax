import { HighlightSpanKind } from "typescript";
import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/CardsMovies/ModelOne";
import CardMovieModelTwo from "../../../Components/CardsMovies/ModelTwo";
import { styled } from "styled-components";
import SectionSlideMovies from "../../../Components/SectionSlideMovies";

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

interface HomeProps {}
export default function Home({}: HomeProps) {
  return (
    <Container>
      <SectionOneStyled>
        
        <SectionOneSectionTopStyled>
          <Highlights backgroundImg={img}></Highlights>
        </SectionOneSectionTopStyled>

        <SectionSlideMovies title="Mais assistidos">
          <CardMovieModelTwo backgroundImg={imgHeig1}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig2}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig3}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig4}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig5}></CardMovieModelTwo>
        </SectionSlideMovies>
        
        <SectionSlideMovies title="Mais assistidos">
          <CardMovieModelTwo backgroundImg={imgHeig5}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig3}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig4}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig1}></CardMovieModelTwo>
          <CardMovieModelTwo backgroundImg={imgHeig2}></CardMovieModelTwo>
        </SectionSlideMovies>
      
      </SectionOneStyled>

      
      <SectionTwoStyled title={"Melhores filmes"}>
        <CardMovieModelOne backgroundImg={img1}></CardMovieModelOne>
        <CardMovieModelOne backgroundImg={img2}></CardMovieModelOne>
        <CardMovieModelOne backgroundImg={img3}></CardMovieModelOne>
      </SectionTwoStyled>
    </Container>
  );
}
