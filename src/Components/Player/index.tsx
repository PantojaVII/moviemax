import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { ContainerPlayerStyled, PosterStyled, PlayerStyledShadow, StartStyled } from "./PlayerStyled";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  PlayToggle

} from 'video-react';
import 'video-react/dist/video-react.css';

interface MoviePlayerProps {
  urlPlayer: string;
  duration?:string;
  size?: number;
  poster: string;
  
}

export default function MoviePlayer({ poster, size, urlPlayer, duration }: MoviePlayerProps) {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  /* const urlVideo = urlPlayer; */
  const urlVideo = urlPlayer;

  const handleStartClick = () => {
    setVideoLoaded(true);
  };
  useEffect(() => {
    // Fazendo a requisição GET
    fetch('https://192.168.0.110/stream/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'urlPlayer': urlPlayer,
        'duration': duration ? duration.toString() : '', // Convertendo para string, se necessário
        'size': size ? size.toString() : '' // Convertendo para string, se necessário
      }
    })
    .then(response => {
      if (response.ok) {
        // Se a resposta estiver ok, pode prosseguir com o carregamento do vídeo
        setVideoLoaded(true);
      } else {
        // Se houver algum erro na resposta, trate-o de acordo com sua lógica
        console.error('Erro ao carregar o vídeo:', response.status);
      }
    })
    .catch(error => {
      // Se houver um erro de conexão, trate-o de acordo com sua lógica
      console.error('Erro de conexão:', error);
    });
  }, []); // Este efeito só é executado uma vez, quando o componente é montado


  return (
    <ContainerPlayerStyled>
      
      <Player poster={poster} autoPlay >
        <source src={urlVideo} />
        <BigPlayButton position="center" />
        <ControlBar>
          <PlayToggle />
          <ReplayControl seconds={10} />
          <ForwardControl seconds={10} />
          <VolumeMenuButton vertical />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
          <CurrentTimeDisplay order={4.1} />
        </ControlBar>
      </Player>

    </ContainerPlayerStyled>
  );
}
