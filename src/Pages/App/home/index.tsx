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
  /* Movies */
  const [highlight, setHighlight] = useState<IMovies>();
  const [recentsmovies, setRecentsMovies] = useState<IMovies[]>([]);
  const [bestmovies, setBestMovies] = useState<IMovies[]>([]);
  const [actionMovies, setActionMovies] = useState<IMovies[]>([]);
  const [adventureMovies, setAdventureMovies] = useState<IMovies[]>([]);
  /* Series */
  const [bestSeries, setBestSeries] = useState<ISeries[]>([]);
  const [dramaSeries, setDramaSeries] = useState<ISeries[]>([]);




  useEffect(() => {
    const fetchMovies = async () => {
      try {
        /* Searching movies */
        const recentsmoviesResponse = await http.get('Movies/');
        const bestmoviesResponse = await http.get('Movies/?search=&content=rating');
        const actionmoviesResponse = await http.get('Movies/?search=4c3b73f1b58a023ed4b778449d40d492f873490b147046eca3162f15c93b6f18&content=genres');
        const adventuremoviesResponse = await http.get('Movies/?search=642f6dfe13a7de8916a4230b7f3916b6490b0db48f058e531bca12a79c70605b&content=genres');

        
        /* Searching series */
        const bestSeriesResponse = await http.get('Series/?search=&content=rating');
        const dramaSeriesResponse = await http.get('Series/?search=03699bddc4d3df28c9ceb2280d1d264e61e82cee01dad16ff7910e455623dd4c&content=genres');
        
        /* movies */
        setRecentsMovies(recentsmoviesResponse.data.results);
        setBestMovies(bestmoviesResponse.data.results);
        setActionMovies(actionmoviesResponse.data.results);
        setAdventureMovies(adventuremoviesResponse.data.results);
        
        /* Series */
        setBestSeries(bestSeriesResponse.data.results);
        setDramaSeries(dramaSeriesResponse.data.results);
        
        /* Highlight */
        setHighlight(recentsmoviesResponse.data.results[0]);

      } catch (error) {
 
      }
    };

    fetchMovies();
  }, []);

  



  return (

    <ContainerMaster>
      <Container>
        <SectionOneStyled>
          <SectionOneSectionTopStyled>
            {highlight && <Highlights movieHighlight={highlight}></Highlights>}
          </SectionOneSectionTopStyled>
          <SectionSlide title="Destaques Recentes:">
            {recentsmovies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
        </SectionOneStyled>
        <SectionTwoStyled title={"Melhores filmes"}>
          {bestmovies.map((movie) => (
            <CardMovieModelOne movie={movie}></CardMovieModelOne>
          ))}
        </SectionTwoStyled>
      </Container>
      <Container>
        <SectionOneStyled>

          {/* Movies */}
          <SectionSlide title="Melhores Avaliados">
            {bestmovies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
          <SectionSlide title="Filmes de Ação">
            {actionMovies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
          <SectionSlide title="Canais de TV">
            {adventureMovies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
          <SectionSlide title="Filmes de Aventura">
            {adventureMovies.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>

          {/* Series */}
          <SectionSlide title="Melhores Séries">
            {bestSeries.map((serie) => (
              <CardMovieModelTwo key={serie.id} serie={serie} />
            ))}
          </SectionSlide>
          <SectionSlide title="Series dramáticas">
            {dramaSeries.map((serie) => (
              <CardMovieModelTwo key={serie.id} serie={serie} />
            ))}
          </SectionSlide>

        </SectionOneStyled>
      </Container>
    </ContainerMaster>
  );
}
