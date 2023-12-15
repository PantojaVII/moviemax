import ISeason from "./ISeason";

interface ISeries {
    id: number;
    synopsis: string;
    release_date: string;
    name: string;
    director: string;
    genres: string[]; // Array de IDs dos gêneros
    info: string[]; // Array de IDs dos gêneros
    rating: string;
    coverOne: string;
    coverTwo: string;
    highlight: string;
    playerTrailer: string;
    age_groups: string;
    season_set?: ISeason[]

  }
  export default ISeries;
  