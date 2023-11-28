import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/CardsMovies/ModelOne";
import CardMovieModelTwo from "../../../Components/CardsMovies/ModelTwo";
import { styled } from "styled-components";
import SectionSlideMovies from "../../../Components/SectionSlideMovies";
import Ranking from "../../../Components/Rank";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";


const SectionOneSectionTopStyled = styled.div``;

interface PageMoviesProps { }
export default function PageMovies({ }: PageMoviesProps) {
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
          <SectionSlideMovies title="Top Semanal">
            {movies.map((movie) => (
              <Ranking title="1">
                <CardMovieModelOne movie={movie}></CardMovieModelOne>
              </Ranking>
            ))}
          </SectionSlideMovies>

          <SectionSlideMovies title="Filmes">
            {movies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {movies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlideMovies>
          <SectionSlideMovies title="Filmes">
            {movies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {movies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlideMovies>
          <SectionSlideMovies title="Filmes">
            {movies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {movies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlideMovies>


        </SectionOneSectionTopStyled>
      </SectionOneStyled>

      <SectionTwoStyled title={"Melhores filmes"}>
        {movies.map((movie) => (
          <CardMovieModelOne movie={movie}></CardMovieModelOne>
        ))}
      </SectionTwoStyled>
    </Container>
  );
}
