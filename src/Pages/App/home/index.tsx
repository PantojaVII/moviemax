import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/Cards/ModelOne";
import { styled } from "styled-components";
import SectionSlide from "../../../Components/SectionSlide";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";
import CardMovieModelTwo from "../../../Components/Cards/ModelTwo";
import ContainerMaster from "../../../Components/Container/ContainerMaster";
import ISeries from "../../../Interfaces/ISeries";

const SectionOneSectionTopStyled = styled.div``;

interface HomeProps { }
export default function Home({ }: HomeProps) {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [series, setSeries] = useState<ISeries[]>([]);
  const [highlight, setHighlight] = useState<IMovies>();

  useEffect(() => {
    http.get('Movies/')
      .then(returnMovies => {
        setMovies(returnMovies.data);
        setHighlight(returnMovies.data[0]);
      })
      .catch(erro => {
        console.log('Erro index page');
      });
  }, []);
  useEffect(() => {
    http.get('Series/')
      .then(returnSeries => {
        setSeries(returnSeries.data);
      })
      .catch(erro => {
        console.log('Erro index page');
      });
  }, []);

  return (

    <ContainerMaster>
      <Container>
        <SectionOneStyled>
          <SectionOneSectionTopStyled>
            {highlight && <Highlights movieHighlight={highlight}></Highlights>}
          </SectionOneSectionTopStyled>
          <SectionSlide title="Filmes">
            {movies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
        </SectionOneStyled>
        <SectionTwoStyled title={"Melhores filmes"}>
          {movies.map((movie) => (
            <CardMovieModelOne movie={movie}></CardMovieModelOne>
          ))}
        </SectionTwoStyled>
      </Container>

      <Container>
        <SectionOneStyled>
          <SectionSlide title="Séries">
            {series.map((serie) => (
              <CardMovieModelTwo key={serie.id} serie={serie} />
            ))}

          </SectionSlide>
        </SectionOneStyled>
      </Container>
    </ContainerMaster>
  );
}
