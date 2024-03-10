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
  PlayToggle,

} from 'video-react';
import 'video-react/dist/video-react.css';

interface MoviePlayerProps {
  urlPlayer: string;
  duration?: string;
  size?: number;
  poster: string;

}

export default function MoviePlayer({ poster, size, urlPlayer, duration }: MoviePlayerProps) {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const urlVideo = `${urlPlayer}`;

  return (
    <ContainerPlayerStyled>
      <Player
        poster={poster}
        autoPlay={true}
      
      >
        <source src={urlVideo} type="video/mp4" />
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
