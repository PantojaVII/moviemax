import { HighlightSpanKind } from "typescript";
import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/CardsMovies/ModelOne";
import CardMovieModelTwo from "../../../Components/CardsMovies/ModelTwo";
import { styled } from "styled-components";
import SectionSlideMovies from "../../../Components/SectionSlideMovies";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";


const img = "/movies/capahomem.png";
const img1 = "/movies/01.jpg";
const img2 = "/movies/02.jpg";
const img3 = "/movies/03.jpg";

const imgHeig1 = "/movies/1.jpg";


const SectionOneSectionTopStyled = styled.div``;

interface HomeProps { }
export default function Home({ }: HomeProps) {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [highlight, setHighlight] = useState<IMovies>();

  useEffect(() => {
    http.get('Movies/')
      .then(returnMovies => {
        setMovies(returnMovies.data);
        setHighlight(returnMovies.data[0]);
      })
      .catch(erro => {
        console.log(erro);
      });
  }, []);

  return (

    <Container>
      <SectionOneStyled>
        <SectionOneSectionTopStyled>
          {highlight && <Highlights movieHighlight={highlight}></Highlights>}
        </SectionOneSectionTopStyled>
        <SectionSlideMovies title="Filmes" movies={movies}/>
        
      </SectionOneStyled>
      <SectionTwoStyled title={"Melhores filmes"}>
        {movies.map((movie) => (
          <CardMovieModelOne movie={movie}></CardMovieModelOne>
        ))}
      </SectionTwoStyled>
    </Container>
  );
}
