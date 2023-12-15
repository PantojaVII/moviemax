import IEpisodes from "./IEpisodes";

interface ISeason {
    id: number;
    season: string;
    synopsis: string;
    release_date: string;
    episodes: IEpisodes[];
   

  }
  export default ISeason
;