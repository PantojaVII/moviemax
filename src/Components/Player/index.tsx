import { useEffect, useState, useRef } from "react";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";
import http from '../../http';
import { FaPlay } from "react-icons/fa";
import { ContainerPlayerStyled, PlayerStyledShadow, PosterStyled, StartStyled } from "./PlayerStyled";
/* https://github.com/sampotts/plyr#the-source-setter */
interface MoviePlayerProps {
  size?: number;
  poster: string;
}

export default function MoviePlayer({ poster, size }: MoviePlayerProps) {
  const caminho = "http://192.168.0.113:8000/movies/1/stream";
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const ref = useRef<APITypes>(null);
  const [movie, setMovie] = useState<boolean>(false);


  // Defina as opções do vídeo (pode ser configurado conforme necessário)
  const videoOptions = {
    controls: ['play', 'progress', 'duration', 'mute', 'volume', 'settings', 'fullscreen'],
    autoplay: true,
    loop: { active: false },
    volume: 0.7,
    listeners: {
      seek: (event: Event) => {
        // Use um pequeno atraso para aguardar a conclusão da operação de busca
        setTimeout(() => {
          const currentTime = ref.current?.plyr.currentTime;
          if (currentTime !== undefined) {

          }
        }, 100);
      },
      timeupdate: () => {
        const currentTime = ref.current?.plyr.currentTime;
        if (currentTime !== undefined) {

        }
      },
    },
  };


  // Função a ser chamada quando o botão de iniciar é clicado
  const handlePlayButtonClick = async (clickTime: number, duration: number) => {

    if (size !== undefined && duration != 0) {
      const byte = (clickTime * size) / duration;
      let intervalo = (120 * size) / duration;
      let start = byte - intervalo;
      let end = byte + intervalo;

      if (start < 0) {
        start = 0;
      }
      if (end >= size) {
        end = size - 1;
      }
      try {
        // Aguarde a conclusão da função assíncrona antes de prosseguir
        await fetchVideoByRange(start, end);

        // Verifique se o estado foi atualizado corretamente
        setVideoBlob(response => {
          if (response) {
            const plyr = ref.current?.plyr;
            if (!movie && plyr !== undefined) {
              console.log(plyr.playing);
              // Inicie o vídeo apenas se não estiver em execução

            }
          } else {
            console.log('Não entrei');
          }

          return response; // Mantenha o valor original
        });
      } catch (error) {
        console.error('Erro ao buscar vídeo:', error);
      }
    } else {

      let start = 0;
      let end = 5000000;
 
        // Aguarde a conclusão da função assíncrona antes de prosseguir
        await fetchVideoByRange(start, end);
        // Verifique se o estado foi atualizado corretamente
        setVideoBlob(response => {
          if (response) {
            const plyr = ref.current?.plyr;
            if (!movie && plyr !== undefined) {
              console.log(plyr.playing);
              // Inicie o vídeo apenas se não estiver em execução

            }
          } else {
            console.log('Não entrei');
          }

          return response; // Mantenha o valor original
        });
      
    }
  };

  const fetchVideoByRange: (start: number, end: number) => Promise<void> = async (start, end) => {
    
    try {
            
      const response = await http.get(caminho, {
        headers: {
          Range: `bytes=${start}-${end}`
        },
        responseType: 'blob',
      });

      setVideoBlob(response.data);
      setMovie(true);
    } catch (erro) {
      console.error('Erro ao buscar vídeo', erro);
    }
  };

  const chamarFilme = () => {
    handlePlayButtonClick(0, 0);
  }



  const plyrVideo = caminho ? (
    <Plyr
      ref={ref}
      options={videoOptions}
      poster={poster}
      source={{
        type: "video",
        sources: [
          {
            src: caminho,
          }
        ]
      }}


    />
  ) : null;

  // Renderiza o componente principal
  return (
    <ContainerPlayerStyled>
      {!movie ? (
        <PosterStyled onClick={chamarFilme}>
          <img src={poster} />
          <PlayerStyledShadow></PlayerStyledShadow>
          <StartStyled><FaPlay /></StartStyled>
        </PosterStyled>
      ) : (
        plyrVideo
      )}
    </ContainerPlayerStyled>
  );
}