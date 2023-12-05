import { useEffect, useState, useRef } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import http from '../../http';
import { ContainerControllsStyled, ContainerPlayerStyled, Fullscreen, Play, PlayerStyled, PlayerStyledShadow, Range, Volume } from "./PlayerStyled";

interface MoviePlayerProps {
  size?: number;
  poster: string;
}

export default function MoviePlayer({ poster, size }: MoviePlayerProps) {
  const caminho = "http://192.168.0.113:8000/movies/2/stream";
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Adiciona ouvinte para o evento 'loadedmetadata'
      video.addEventListener('loadedmetadata', () => {
        setDuration(video.duration);
      });

      // Adiciona ouvinte para o evento 'timeupdate'
      video.addEventListener('timeupdate', () => {
        setCurrentTime(video.currentTime);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('loadedmetadata', () => { });
        video.removeEventListener('timeupdate', () => { });
      }
    };
  }, []);

  // Função para lidar com o clique no botão de reprodução
  const togglePlay = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const handleRangeClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const progressElement = e.currentTarget.querySelector('.range') as HTMLDivElement;
    const video = videoRef.current;

    if (progressElement && video) {
      // Obtém a largura total do elemento <Range>
      const rangeWidth = progressElement.clientWidth;

      // Calcula a posição do clique em relação à largura total do <Range>
      const clickPosition = e.clientX - progressElement.getBoundingClientRect().left;

      // Calcula a porcentagem de posição do clique em relação à largura total do <Range>
      const percentage = (clickPosition / rangeWidth) * 100;

      // Calcula o tempo correspondente no vídeo com base na porcentagem
      const newTime = (percentage / 100) * duration;

      // Define a nova posição do vídeo
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  const handleVolumeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const video = videoRef.current;
    if (video) {
      const newVolume = parseFloat(e.target.value);
      video.volume = newVolume;
    }
  };
  // Função para alternar o modo de tela cheia
  const handleFullscreenToggle = () => {
    const video = videoRef.current;
    if (video) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        video.requestFullscreen();
      }
    }
  };

  return (
    <div>
      {videoBlob ? (
        <></>
      ) : (
        <>
          <ContainerPlayerStyled>
            <PlayerStyled ref={videoRef} poster={poster}>
              <source src="http://192.168.0.113:8000/movies/2/stream" />
            </PlayerStyled>

            <PlayerStyledShadow />

            <ContainerControllsStyled>
              <Play onClick={togglePlay} >
                {isPlaying ? <FaStop /> : <FaPlay />}
              </Play>

              <Range onClick={handleRangeClick}>
                <input type="range" min={0} max={duration} value={currentTime} className="range range-info range-xs" />

                <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
              </Range>

              <Volume>
                <FaVolumeHigh className="icons-volume" />
                <input
                  type="range"
                  className="progress progress-info"
                  value={100}
                  max="100"
                  onChange={handleVolumeChange}
                />
              </Volume>

              <Fullscreen onClick={handleFullscreenToggle}>
                <SlSizeFullscreen />
              </Fullscreen>
            </ContainerControllsStyled>
          </ContainerPlayerStyled>
        </>
      )}
    </div>
  );
}

// Função para formatar o tempo no formato mm:ss
const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};


/* onSeeked={handleVideoSeeked}    */
/*   const fetchVideoByRange: (start: number, end: number) => Promise<void> = async (start, end) => {
    try {
      const response = await http.get(caminho, {

        responseType: 'blob',
      });

      setVideoBlob(response.data);
    } catch (erro) {
      console.error('Erro ao buscar vídeo', erro);
    }
  };
  const togglePlay2 = async (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setIsPlaying(!isPlaying);
    console.log('vou iniciar');
    if (videoRef.current && size !== undefined) {
      // Obtém o tempo atual do vídeo em segundos após a busca
      const currentTimeInSeconds = Math.round(videoRef.current.currentTime);
      const durationInSeconds = Math.round(videoRef.current.duration);
      const byte = (currentTimeInSeconds * size) / durationInSeconds;
      let intervalo = (120 * size) / durationInSeconds;
      let start = byte - intervalo;
      let end = byte + intervalo;

      if (end >= size) {
        end = size - 1;
      }
      const previousCurrentTime = videoRef.current.currentTime;
      await fetchVideoByRange(start, end);
      videoRef.current.currentTime = previousCurrentTime;
    }
  };
 */