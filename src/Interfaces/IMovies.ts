interface IMovies {
  id: number;
  genres: string[]; // Array de IDs dos gêneros
  info: string[]; // Array de IDs dos gêneros
  name: string;
  age_groups: string;
  rating: string;
  synopsis: string;
  duration: string;
  coverOne: string;
  coverTwo: string;
  highlight: string;
  playerTrailer: string;
  player: string;
  release_date: string;
  director: string;
  created_at: string;
  updated_at: string;
  hash_id_player: string;
  file_size: number;
}
export default IMovies;
