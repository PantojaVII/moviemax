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
  VolumeMenuButton,
  PlayToggle

} from 'video-react';
import 'video-react/dist/video-react.css';

interface MoviePlayerProps {
  urlPlayer: string;
  size?: number;
  poster: string;
}

export default function MoviePlayer({ poster, size, urlPlayer }: MoviePlayerProps) {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  /* const urlVideo = urlPlayer; */
  const urlVideo = "https://coliseu.bitware.tec.br/m/1/player.mkv";

  const handleStartClick = () => {
    setVideoLoaded(true);
  };

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
