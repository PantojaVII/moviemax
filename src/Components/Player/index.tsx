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
  const urlVideo = urlPlayer;
/*   const urlVideo = 'https://bucket.bitware.tec.br/movies/b095e90c1fa2baf/Godzilla%20vs.%20Kong%20WEB-DL%201080p%20DUAL%205.1.mkv'; */

  return (
    <ContainerPlayerStyled>
      <h1>{urlVideo}</h1>
        <Player poster={poster}>
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
