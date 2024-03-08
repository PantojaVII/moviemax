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
import IGenres from "../../../Interfaces/IGenre";

const SectionOneSectionTopStyled = styled.div``;

interface MovieType {
  genre: string;
  movies: IMovies[];
}
interface SerieType {
  genre: string;
  series: ISeries[];
}
interface HomeProps { }
export default function Home({ }: HomeProps) {
  /* Movies */
  const [highlight, setHighlight] = useState<IMovies>();
  const [recentsmovies, setRecentsMovies] = useState<IMovies[]>([]);
  const [bestmovies, setBestMovies] = useState<IMovies[]>([]);
  const [Movies, setMovies] = useState<MovieType[]>([]);

  /* Series */
  const [bestSeries, setBestSeries] = useState<ISeries[]>([]);
  const [series, setSeries] = useState<SerieType[]>([]);




  // Função para adicionar um novo filme ao estado Movies
  const addMovie = (genreMovies: MovieType) => {
    // Verifica se já existem 3 filmes no estado
    if (Movies.length < 3) {
      setMovies(prevMovies => [...prevMovies, genreMovies]);
    }
  };
  // Função para adicionar um novo filme ao estado Movies
  const addSerie = (genreSeries: SerieType) => {
    if (series.length < 3) {
      setSeries(prevSeries => [...prevSeries, genreSeries]);
    }
  };



  useEffect(() => {
    const fetchMovies = async () => {
      try {
        /* Movies */
        const recentsmoviesResponse = await http.get('Movies/');
        const bestmoviesResponse = await http.get('Movies/?search=&content=rating');
        const bestMoviesLimited = bestmoviesResponse.data.results.slice(0, 4);
        setHighlight(recentsmoviesResponse.data.results[0]);
        setRecentsMovies(recentsmoviesResponse.data.results);
        setBestMovies(bestMoviesLimited);

        /* Series */
        const bestSeriesResponse = await http.get('Series/?search=&content=rating');
        setBestSeries(bestSeriesResponse.data.results)

        /* Search movies for category */
        if (Movies.length < 3) {
          /* Escolhendo um gênero aleatório */
          const genresResponse = await http.get<IGenres[]>('Genres/');
          const genres: IGenres[] = genresResponse.data;
          /* Verificando quantos gêneros existem */
          const availableGenresCount = Math.min(genres.length, 3);

          // Escolhe até 3 gêneros aleatórios
          const randomIndexes: number[] = [];
          while (randomIndexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * genres.length);
            if (!randomIndexes.includes(randomIndex)) {
              randomIndexes.push(randomIndex);
            }
          }
          for (const randomIndex of randomIndexes) {
            const randomGenre = genres[randomIndex];
            const MoviesGenre = await http.get(`Movies/?search=${randomGenre.hashed_id}&content=genres`);
            const SeriesGenre = await http.get(`Series/?search=${randomGenre.hashed_id}&content=genres`);
            // Adiciona um objeto ao array temporário com o nome do gênero e os filmes encontrados
            const genreMovies: MovieType = {
              genre: randomGenre.name,
              movies: MoviesGenre.data.results
            };
            const genreSeries: SerieType = {
              genre: randomGenre.name,
              series: SeriesGenre.data.results
            };
            if (Movies.length < 3) {
              // Adiciona o novo filme ao estado
              addMovie(genreMovies);
            }
            if (series.length < 3) {
              // Adiciona o novo filme ao estado
              addSerie(genreSeries);
            }
          }
        }

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
          {Movies.map((genreItem, index) => (
            genreItem.movies.length > 0 && (
              index % 2 === 0 ? (
                <SectionSlide key={index} title={genreItem.genre}>
                  {genreItem.movies.map((movie, movieIndex) => (
                    <CardMovieModelOne movie={movie} />
                  ))}
                </SectionSlide>
              ) : (
                <SectionSlide key={index} title={genreItem.genre}>
                  {genreItem.movies.map((movie, movieIndex) => (
                    <CardMovieModelTwo movie={movie} />
                  ))}
                </SectionSlide>
              )
            )
          ))}


          {/* Series */}
          <SectionSlide title="Melhores Séries">
            {bestSeries.map((serie) => (
              <CardMovieModelTwo key={serie.id} serie={serie} />
            ))}
          </SectionSlide>
          {/* Movies */}
          {series.map((genreItem, index) => (
            genreItem.series.length > 0 && (
              index % 2 === 0 ? (
                <SectionSlide key={index} title={genreItem.genre}>
                  {genreItem.series.map((serie, movieIndex) => (
                    <CardMovieModelOne serie={serie} />
                  ))}
                </SectionSlide>
              ) : (
                <SectionSlide key={index} title={genreItem.genre}>
                  {genreItem.series.map((serie, movieIndex) => (
                    <CardMovieModelTwo serie={serie} />
                  ))}
                </SectionSlide>
              )
            )
          ))}
        </SectionOneStyled>
      </Container>
    </ContainerMaster>
  );
}
