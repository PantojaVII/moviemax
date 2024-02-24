import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import { styled } from "styled-components";
import MoviePlayer from "../../../Components/Player";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";
import CardMovieModelTwo from "../../../Components/Cards/ModelTwo";
import { InfoMoviePlayer, MoviePlayerOptions, MoviePlayerTitle, MoviePlayerTitleOptions, Season } from "./PlayerStyled";
import Button from "../../../Components/Button";
import Age from "../../../Components/Age";
import { AiFillLike } from "react-icons/ai";
import Rating from "../../../Components/Rating";
import { MdLocalMovies } from "react-icons/md";
import SectionSlide from "../../../Components/SectionSlide";
import ContainerMaster from "../../../Components/Container/ContainerMaster";
import ISeries from "../../../Interfaces/ISeries";
import IEpisodes from "../../../Interfaces/IEpisodes";
import ISeason from "../../../Interfaces/ISeason";
import CardModelThree from "../../../Components/Cards/ModelThree";
import CardModelFour from "../../../Components/Cards/ModelFour";
import SeasonsAndEpisodes from "../../../Components/SeasonsAndEpisodes";



const SectionOneSectionTopStyled = styled.div``;

interface PlayerProps { }
export default function PagePlayer({ }: PlayerProps) {
  // Use o hook useLocation para obter a localização (URL)
  const { type, id } = useParams();
  const [recent, setRecent] = useState<IMovies[]>([]);
  const [movie, setMovie] = useState<IMovies | null>(null);

  //em caso de série
  const [serie, setSerie] = useState<ISeries | null>(null);
  const [seasons, setSeasons] = useState<ISeason[]>([])//pega as temporadas
  const [season, setSeason] = useState<ISeason | null>(null)//Temporada selecionada
  const [episodes, setEpisodes] = useState<IEpisodes[] | null>(null);//Pega os episodios da temporada selecionada
  const [episode, setEpisode] = useState<IEpisodes>()//episódio selecionado
  const [player, setPlayer] = useState<String>("") // url do player
  const [viewEpisodes, setViewEpisodes] = useState<IEpisodes[] | null>(null);
  const [seasonSelected, setSeasonSelected] = useState<string | number>("");
  const [key, setKey] = useState<number>(0); // Chave única para forçar a recarga do player
  
  
  
  const baseUrl = "http://192.168.0.113:8000/"
  const selectEpisode = (episode: IEpisodes) => {
    setEpisode(episode);
    if (episode.player) {    
      setPlayer(episode.player);
    } else {
      setPlayer(`${episode.player}`);
    }
    // Atualiza a chave única para forçar a recarga do player
    setKey(prevKey => prevKey + 1);
  };
  useEffect(() => {
    // Use a chave única como uma dependência para forçar a recarga do player
  }, [key]);
  useEffect(() => {
    // Dependências movie e serie adicionadas
    if (type == "movie") {
      http.get(`Movies/?movie=${id}`) // pega o filme
        .then(returnMovie => {
          setMovie(returnMovie.data.results[0]);
          setPlayer(`${returnMovie.data.results[0].player}`)
        })
        .catch(erro => {

        });

      http.get('Movies/')
        .then(returnRecent => {
          setRecent(returnRecent.data.results);
        })
        .catch(erro => {
          console.log(erro);
        });

    } else if (type == "serie") {
      http.get(`Series/?serie=${id}`) // pega o filme
        .then(returnSerie => {
          setSerie(returnSerie.data.results[0]);
          setSeasons(returnSerie.data.results[0].season_set);
          setSeason(returnSerie.data.results[0].season_set[0]);
          setEpisodes(returnSerie.data.results[0].season_set[0].episodes);
          setViewEpisodes(returnSerie.data.results[0].season_set[0].episodes)
          setEpisode(returnSerie.data.results[0].season_set[0].episodes[0]);
          setPlayer(`${baseUrl}episode/stream/${returnSerie.data.results[0].season_set[0].episodes[0].id}`);
          setSeasonSelected(1)
        })
        .catch(erro => {
        });

    }
  }, [type, id]);


  return (
    <ContainerMaster>
      <Container>
        <SectionOneStyled>
          {/* Movie */}
          {movie ?
            <SectionOneSectionTopStyled>
              {/* PLayer */}
              <MoviePlayer
                urlPlayer={`${player}`}
                poster={`${movie?.highlight}`}
                size={movie?.file_size}
              />
              {/* End PLayer */}
              {/* Info */}
              <InfoMoviePlayer>
                <Age value={movie?.age_groups}></Age>

                <MoviePlayerTitleOptions>
                  <MoviePlayerTitle>{movie?.name}</MoviePlayerTitle>
                  <MoviePlayerOptions>
                    <Button
                      width="140px"
                      height="60px"
                      value="LIKE"
                      icon={<AiFillLike />
                      }
                      backgroundColor="grey"
                    ></Button>
                  </MoviePlayerOptions>
                </MoviePlayerTitleOptions>


                <section className="genres">
                  <MdLocalMovies className="icon"></MdLocalMovies>
                  {movie?.genres.map((genre, index) => (
                    <div className="inter-genre">
                      <a key={index} >
                        {genre}
                      </a>
                    </div>
                  ))}
                </section>


                <Rating value='7.1'></Rating>
                <h2 className="Title-synopsis">Sinopse</h2>
                <p className="synopsis">{movie?.synopsis}</p>

              </InfoMoviePlayer>
              {/* End info */}
            </SectionOneSectionTopStyled>

            /* Series */
            :
            <SectionOneSectionTopStyled>
              {/* PLayer */}
              <MoviePlayer
                key={key}
                urlPlayer={`${player}`}
                poster={`${serie?.highlight}`}
                size={episode?.file_size}
              />
              {/* Sessão das temporadas e episódeos */}

              <Season>
                <SeasonsAndEpisodes seasons={seasons} cover={serie?.coverOne} episodeSelected={episode} selectEpisode={selectEpisode} >
                </SeasonsAndEpisodes>
              </Season>

              {/* Info */}
              <InfoMoviePlayer>
                <Age value={serie?.age_groups}></Age>

                <MoviePlayerTitleOptions>
                  <MoviePlayerTitle>{serie?.name}</MoviePlayerTitle>
                  <MoviePlayerOptions>
                    <Button
                      width="140px"
                      height="60px"
                      value="LIKE"
                      icon={<AiFillLike />
                      }
                      backgroundColor="grey"
                    ></Button>
                  </MoviePlayerOptions>
                </MoviePlayerTitleOptions>


                <section className="genres">
                  <MdLocalMovies className="icon"></MdLocalMovies>
                  {serie?.genres.map((genre, index) => (
                    <div className="inter-genre">
                      <a key={index} >
                        {genre}
                      </a>
                    </div>
                  ))}
                </section>


                <Rating value={serie?.rating}></Rating>
                <h2 className="Title-synopsis">Sinopse</h2>
                <p className="synopsis">{serie?.synopsis}</p>

              </InfoMoviePlayer>
              {/* End info */}
            </SectionOneSectionTopStyled>
          }

        </SectionOneStyled>
        <SectionTwoStyled title={"Recomendados"}>
          {recent.slice(0, 3).map((movie) => (
            <CardMovieModelTwo key={movie.id} movie={movie} />
          ))}
        </SectionTwoStyled>
      </Container>
      <Container>
        {/*         <SectionOneStyled>
          <SectionSlide title="Filmes">
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
          <SectionSlide title="Filmes">
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
          <SectionSlide title="Filmes">
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
            {recent.map((movie) => (
              <CardMovieModelTwo key={movie.id} movie={movie} />
            ))}
          </SectionSlide>
        </SectionOneStyled> */}
      </Container>
    </ContainerMaster>

  );
}
