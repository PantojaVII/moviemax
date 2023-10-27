import MoviePlayerStyled from "./MoviePlayerStyled";

interface MoviePlayerProps {
  url: string;
}

export default function MoviePlayer({ url }: MoviePlayerProps) {
  return (
    <MoviePlayerStyled
      width="100%"
      height="600px"
      src={`${url}?autoplay=1`} // Use a propriedade url que é passada como argumento
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen // Use allowFullScreen em vez de allowfullscreen
    ></MoviePlayerStyled>
  );
}
