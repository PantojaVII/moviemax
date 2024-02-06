import { useParams, useNavigate } from 'react-router-dom';
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
import http from "../../../http";
import ContainerMaster from "../../../Components/Container/ContainerMaster";
import CardModelThree from "../../../Components/Cards/ModelThree";
import IGenres from "../../../Interfaces/IGenre";
import ContainerModelOne from '../../../Components/Container/ContainerModelOne';
import ISeries from '../../../Interfaces/ISeries';
import MoreContent from '../../../Components/MoreResults';


const SectionOneSectionTopStyled = styled.div``;

interface PageSeriesProps { }
export default function PageSeries({ }: PageSeriesProps) {
  const [seriesByGenre, setSeriesByGenre] = useState<ISeries[]>([]);
  const [recentsSeries, setRecentsSeries] = useState<ISeries[]>([]);
  const [bestSeries, setBestSeries] = useState<ISeries[]>([]);
  const [actionSeries, setActionSeries] = useState<ISeries[]>([]);
  const [adventureSeries, setAdventureSeries] = useState<ISeries[]>([]);
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [genre, setGenre] = useState<IGenres>();
  const [moreSeries, setMoreSeries] = useState<string | null>("");
  const { genreURL } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {

        /* Searching Series */
        const recentsSeriesResponse = await http.get('Series/');
        const bestSeriesResponse = await http.get('Series/?search=&field=rating');
        const actionmoviesResponse = await http.get('Series/?search=4c3b73f1b58a023ed4b778449d40d492f873490b147046eca3162f15c93b6f18&content=genres');
        const adventureSeriesResponse = await http.get('Series/?search=642f6dfe13a7de8916a4230b7f3916b6490b0db48f058e531bca12a79c70605b&content=genres');
        const genresResponse = await http.get('Genres/');

        /* movies */
        setRecentsSeries(recentsSeriesResponse.data.results);
        setBestSeries(bestSeriesResponse.data.results);
        setActionSeries(actionmoviesResponse.data.results);
        setAdventureSeries(adventureSeriesResponse.data.results);
        setGenres(genresResponse.data);

        if (genreURL) {
          const genreResponse = await http.get(`Genres/Name/?name=${genreURL}`);
          const moviesByGenreResponse = await http.get(`Series/?search=${genreURL}&field=genre`);
          setGenre(genreResponse.data.results)
          setSeriesByGenre(moviesByGenreResponse.data.results)

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

  const selectGenre = (selectedGenre: IGenres) => {
    fetchMoviesByGenre(selectedGenre);
  };

  const fetchMoviesByGenre = async (selectedGenre: IGenres) => {
    try {
      console.log(selectedGenre);
      // Realiza a busca de filmes por gênero
      const seriesByGenreResponse = await http.get(`Series/?search=${selectedGenre.hashed_id}&content=genres`);

      // Atualiza o estado do gênero e dos filmes por gênero
      setGenre(selectedGenre);
      setSeriesByGenre(seriesByGenreResponse.data.results);
      setMoreSeries(seriesByGenreResponse.data.next)
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro na busca de Series por gênero:', error.message);
      } else {
        console.error('Erro desconhecido na busca de Series por gênero:', error);
      }
      // Trate o erro de acordo com os requisitos do seu aplicativo
    }
  };

  return (
    <ContainerMaster>
      <Container>
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
            <SectionSlide title="Top Séries">
              {bestSeries.map((serie, index) => (
                <Ranking title={index + 1} key={index}>
                  <CardMovieModelOne serie={serie}></CardMovieModelOne>
                </Ranking>
              ))}
            </SectionSlide>

            {/* Recents */}
            <SectionSlide title="Adicionados recentes">
              {recentsSeries.map((serie, index) => (
                <CardMovieModelTwo serie={serie}></CardMovieModelTwo>
              ))}
            </SectionSlide>

            {/* Action */}
            <SectionSlide title="Ação">
              {actionSeries.map((serie, index) => (
                <CardMovieModelTwo serie={serie}></CardMovieModelTwo>
              ))}
            </SectionSlide>

            {/* Adventure */}
            <SectionSlide title="Aventura">
              {adventureSeries.map((serie, index) => (
                <CardMovieModelTwo serie={serie}></CardMovieModelTwo>
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
              Content={seriesByGenre}
              Genre={genre}
              ContentType='serie'
              MoreContent={moreSeries}
            ></MoreContent>
          </SectionOneStyled>
        )}
      </Container>

    </ContainerMaster>
  );
}
