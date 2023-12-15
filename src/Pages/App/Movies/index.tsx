import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/Cards/ModelOne";
import CardMovieModelTwo from "../../../Components/Cards/ModelTwo";
import { styled } from "styled-components";
import SectionSlide from "../../../Components/SectionSlide";
import Ranking from "../../../Components/Rank";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";
import ContainerMaster from "../../../Components/Container/ContainerMaster";


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
    <ContainerMaster>
      <Container>
        <SectionOneStyled>
          <SectionOneSectionTopStyled>
            <SectionSlide title="Top Semanal">
              {movies.map((movie) => (
                <Ranking title="1">
                  <CardMovieModelOne movie={movie}></CardMovieModelOne>
                </Ranking>
              ))}
            </SectionSlide>
            <SectionSlide title="Filmes">
              {movies.map((movie) => (
                <CardMovieModelTwo key={movie.id} movie={movie} />
              ))}
            </SectionSlide>
          </SectionOneSectionTopStyled>
        </SectionOneStyled>
        <SectionTwoStyled title={"Melhores filmes"}>
          {movies.map((movie) => (
            <CardMovieModelOne movie={movie}></CardMovieModelOne>
          ))}
        </SectionTwoStyled>
      </Container>
      
      <Container>
        <SectionOneStyled>
          <SectionOneSectionTopStyled>
            <SectionSlide title="Filmes">
              {movies.map((movie) => (
                <CardMovieModelTwo key={movie.id} movie={movie} />
              ))}
              {movies.map((movie) => (
                <CardMovieModelTwo key={movie.id} movie={movie} />
              ))}
              {movies.map((movie) => (
                <CardMovieModelTwo key={movie.id} movie={movie} />
              ))}
            </SectionSlide>
          </SectionOneSectionTopStyled>
        </SectionOneStyled>
      </Container>
    </ContainerMaster>
  );
}
