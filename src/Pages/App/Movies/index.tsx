import { useParams } from 'react-router-dom';
import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import CardMovieModelOne from "../../../Components/Cards/ModelOne";
import CardMovieModelTwo from "../../../Components/Cards/ModelTwo";
import { styled } from "styled-components";
import SectionSlide from "../../../Components/SectionSlide";
import Ranking from "../../../Components/Rank";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";
import ContainerMaster from "../../../Components/Container/ContainerMaster";
import CardModelThree from "../../../Components/Cards/ModelThree";
import IGenres from "../../../Interfaces/IGenre";
import ContainerModelOne from '../../../Components/Container/ContainerModelOne';
import MoreContent from '../../../Components/MoreResults';


const SectionOneSectionTopStyled = styled.div``;

interface PageMoviesProps { }
export default function PageMovies({ }: PageMoviesProps) {
  const [moviesByGenre, setMoviesByGenre] = useState<IMovies[]>([]);
  const [recentsmovies, setRecentsMovies] = useState<IMovies[]>([]);
  const [bestmovies, setBestMovies] = useState<IMovies[]>([]);
  const [actionMovies, setActionMovies] = useState<IMovies[]>([]);
  const [adventureMovies, setAdventureMovies] = useState<IMovies[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [genre, setGenre] = useState<IGenres>();
  const [moreMovies, setMoreMovies] = useState<string | null>("");
  const { genreURL } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {

        /* Searching movies */
        const recentsmoviesResponse = await http.get('Movies/');
        const bestmoviesResponse = await http.get('Movies/?search=&field=rating');
        const actionmoviesResponse = await http.get('Movies/?search=4c3b73f1b58a023ed4b778449d40d492f873490b147046eca3162f15c93b6f18&content=genres');
        const adventuremoviesResponse = await http.get('Movies/?search=642f6dfe13a7de8916a4230b7f3916b6490b0db48f058e531bca12a79c70605b&content=genres');
        const genresResponse = await http.get('Genres/');

        /* movies */
        setRecentsMovies(recentsmoviesResponse.data.results);
        setBestMovies(bestmoviesResponse.data.results);
        setActionMovies(actionmoviesResponse.data.results);
        setAdventureMovies(adventuremoviesResponse.data.results);
        setGenres(genresResponse.data);

        if (genreURL) {
          const genreResponse = await http.get(`Genres/Name/?name=${genreURL}`);
          const moviesByGenreResponse = await http.get(`Movies/?search=${genreURL}&field=genre`);
          setGenre(genreResponse.data.results)
          setMoviesByGenre(moviesByGenreResponse.data.results)

        }

      } catch (error) {
        if (error instanceof Error) {
          console.error('Erro na página inicial:', error.message);
        } else {
          console.error('Erro desconhecido na página inicial:', error);
        }
        // Trate o erro de acordo com os requisitos do seu aplicativo
      }
    };

    fetchMovies();
  }, []);

  // Chama a função de busca de filmes por gênero
  const selectGenre = (selectedGenre: IGenres) => {
    fetchMoviesByGenre(selectedGenre);
  };

  const fetchMoviesByGenre = async (selectedGenre: IGenres) => {
    try {
      const moviesByGenreResponse = await http.get(`Movies/?search=${selectedGenre.hashed_id}&content=genres`);
      // Atualiza o estado do gênero e dos filmes por gênero
      setGenre(selectedGenre);
      setMoviesByGenre(moviesByGenreResponse.data.results);
      setMoreMovies(moviesByGenreResponse.data.next)
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro na busca de filmes por gênero:', error.message);
      } else {
        console.error('Erro desconhecido na busca de filmes por gênero:', error);
      }
      // Trate o erro de acordo com os requisitos do seu aplicativo
    }
  };

  return (
    <ContainerMaster>
      <Container>
        {/* Sem seleção de gênero */}
        {(!genre) ? (
          <SectionOneStyled>
            {/* Genres */}
            <ContainerModelOne>
              <SectionSlide>
                {genres?.map((genreMap) => (
                  <CardModelThree
                    onClick={() => selectGenre(genreMap)}
                    key={genreMap.hashed_id}
                    title={`${genreMap.name}`}
                    backgroundColor={genreMap === genre ? "var(--secondary)" : undefined}
                  />
                ))}
              </SectionSlide>
            </ContainerModelOne>

            {/* Top Movies */}
            <SectionSlide title="Top Filmes">
              {bestmovies.map((movie, index) => (
                <Ranking title={index + 1} key={index}>
                  <CardMovieModelOne movie={movie}></CardMovieModelOne>
                </Ranking>
              ))}
            </SectionSlide>

            {/* Recents */}
            <SectionSlide title="Adicionados recentes">
              {recentsmovies.map((movie, index) => (
                <CardMovieModelTwo movie={movie}></CardMovieModelTwo>
              ))}
            </SectionSlide>

            {/* Action */}
            <SectionSlide title="Ação">
              {actionMovies.map((movie, index) => (
                <CardMovieModelTwo movie={movie}></CardMovieModelTwo>
              ))}
            </SectionSlide>

            {/* Adventure */}
            <SectionSlide title="Aventura">
              {adventureMovies.map((movie, index) => (
                <CardMovieModelTwo movie={movie}></CardMovieModelTwo>
              ))}
            </SectionSlide>

          </SectionOneStyled>
        ) : (
          <SectionOneStyled>
            {/* Genres */}
            <SectionSlide>
              {genres?.map((genreMap) => (
                <CardModelThree
                  onClick={() => selectGenre(genreMap)}
                  key={genreMap.hashed_id}
                  title={`${genreMap.name}`}
                  backgroundColor={genreMap.hashed_id === genre.hashed_id ? "var(--secondary)" : undefined}
                />
              ))}
            </SectionSlide>

            {/* Resultado de buscas por gênero */}
            <MoreContent
              Content={moviesByGenre}
              Genre={genre}
              ContentType='movie'
              MoreContent={moreMovies}
            ></MoreContent>

          </SectionOneStyled>
        )}
      </Container>

    </ContainerMaster>
  );
}
