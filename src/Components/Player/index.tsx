import React, { useState, useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { ContainerPlayerStyled, PosterStyled, PlayerStyledShadow, StartStyled } from "./PlayerStyled";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";
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
  const ref = useRef<APITypes>(null);

  const handleStartClick = () => {
    setVideoLoaded(true);
  };
  const videoOptions = {
    controls: ['play', 'progress', 'duration', 'mute', 'volume', 'settings', 'fullscreen', "displayDuration",],
    autoplay: false,
    loop: { active: false },
    volume: 0.7,
    displayDuration: true,
    loading: "<div class='plyr__loading'><span class='plyr__sr-only'>Carregando</span><div class='plyr__spinner'><div class='plyr__double-bounce1'></div><div class='plyr__double-bounce2'></div></div></div>"
  };
  const plyrVideo = (
    urlPlayer && (
      <Plyr
        ref={ref}
        options={videoOptions}
        poster={poster}
        source={{
          type: "video",
          sources: [
            {
              src: urlPlayer,
            },
          ],
        }}
      />
    )
  );
  
  return (
    <ContainerPlayerStyled>
      {plyrVideo}
    </ContainerPlayerStyled>
  );
}
