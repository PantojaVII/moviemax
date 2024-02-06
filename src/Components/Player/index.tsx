import React, { useState } from "react";
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
  VolumeMenuButton

} from 'video-react';
import 'video-react/dist/video-react.css';

interface MoviePlayerProps {
  urlPlayer: string;
  size?: number;
  poster: string;
}

export default function MoviePlayer({ poster, size, urlPlayer }: MoviePlayerProps) {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const urlVideo = "http://192.168.0.113:8000/" + urlPlayer;

  const handleStartClick = () => {
    setVideoLoaded(true);
  };

  return (
    <ContainerPlayerStyled>
      {videoLoaded ? (
        <Player poster={poster}>
          <source src={urlVideo} />
          <BigPlayButton position="center" />
          <ControlBar>
            <ReplayControl seconds={5} />
          </ControlBar>
        </Player>
      ) : (
        <PosterStyled>
          <img src={poster} alt="Movie Poster" />
          <PlayerStyledShadow />

          <StartStyled onClick={handleStartClick}><FaPlay /></StartStyled>
        </PosterStyled>
      )}
    </ContainerPlayerStyled>
  );
}
