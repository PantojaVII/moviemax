import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/CardsMovies/ModelOne";
import { styled } from "styled-components";
import SectionSlideMovies from "../../../Components/SectionSlideMovies";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";
import CardMovieModelTwo from "../../../Components/CardsMovies/ModelTwo";

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
        <SectionSlideMovies title="Filmes">
          {movies.map((movie) => (
            <CardMovieModelTwo key={movie.id} movie={movie} />
          ))}
        </SectionSlideMovies>
      </SectionOneStyled>
      <SectionTwoStyled title={"Melhores filmes"}>
        {movies.map((movie) => (
          <CardMovieModelOne movie={movie}></CardMovieModelOne>
        ))}
      </SectionTwoStyled>
    </Container>
  );
}
