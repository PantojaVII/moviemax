import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import { styled } from "styled-components";
import MoviePlayer from "../../../Components/Player";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";


const SectionOneSectionTopStyled = styled.div``;

interface PlayerProps { }
export default function PagePlayer({ }: PlayerProps) {
  // Use o hook useLocation para obter a localização (URL)
  const { movieId } = useParams();
  const [moviesRelated, setMoviesRelated] = useState<IMovies[]>([]);
  const [recent, setRecent] = useState<IMovies[]>([]);
  const [movie, setMovie] = useState<IMovies>();

  useEffect(() => {
    http.get(`Movies/${movieId}/`)
      .then(returnMovie => {
        setMovie(returnMovie.data);
      })
      .catch(erro => {
        
      });
  }, []);

  return (
    <Container>
      <SectionOneStyled>
        <SectionOneSectionTopStyled>
          <MoviePlayer
           /*  url={`${movie?.player}`} */
            poster = {`${movie?.highlight}`}
            size ={movie?.file_size}
          />
        </SectionOneSectionTopStyled>
      </SectionOneStyled>

      <SectionTwoStyled title={"Recomendados"}>
        {/*
         <CardMovieModelTwo
          width={"220px"}
          backgroundImg={imgHeig5}
        ></CardMovieModelTwo>
        <span className="divider"></span>
        <CardMovieModelTwo
          width={"220px"}
          backgroundImg={imgHeig3}
        ></CardMovieModelTwo>
        <span className="divider"></span>
        <CardMovieModelTwo
          width={"220px"}
          backgroundImg={imgHeig4}
        ></CardMovieModelTwo> 
        */}
      </SectionTwoStyled>
    </Container>
  );
}
