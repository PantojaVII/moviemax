import React, { useState, useEffect } from 'react';
import IEpisodes from '../../Interfaces/IEpisodes';
import { SelectedStyled } from './SeasonAndEpisodesStyled';
import ISeason from '../../Interfaces/ISeason';
import SectionSlide from '../SectionSlide';
import CardModelThree from '../Cards/ModelThree';
import CardModelFour from '../Cards/ModelFour';

interface SeasonsAndEpisodesProps {
    seasons?: ISeason[];
    children: React.ReactNode;
    cover?: string
    episodeSelected?: IEpisodes;
    selectEpisode: (episode: IEpisodes) => void; // Correção aqui
}




export default function SeasonsAndEpisodes({ seasons, children, cover, episodeSelected, selectEpisode }: SeasonsAndEpisodesProps) {

    const [season, setSeason] = useState<ISeason | null>(null)//Temporada selecionada
    const [seasonSelected, setSeasonSelected] = useState<string | number>("");
    const [episodes, setEpisodes] = useState<IEpisodes[] | null>(null);//Pega os episodios da temporada selecionada
    const [EpisodeSelected, setEpisodeSelected] = useState<IEpisodes | null>(null)//episódio selecionado

    useEffect(() => {
        if (seasons && seasons.length > 0) {
            setSeasonSelected(1);
            setEpisodes(seasons[0].episodes);
        }
    }, [seasons]);
    useEffect(() => {
        if (episodeSelected) {
            setEpisodeSelected(episodeSelected)
        }

    }, [episodeSelected]);

    const selectSeason = (seasonSelected: ISeason) => {
        setSeasonSelected(seasonSelected.season)
        setEpisodes(seasonSelected.episodes)
    }


    return (
        <>
            <SectionSlide>
                {seasons?.map((seasonMap) => (
                    <CardModelThree
                        onClick={() => selectSeason(seasonMap)}
                        key={seasonMap.id}
                        title={`Temporada ${seasonMap.season}`}
                        backgroundColor={seasonMap.season == seasonSelected ? "var(--secondary)" : undefined}
                    />
                ))}
            </SectionSlide>
            {episodes && episodes.length > 0 ? (
                <SectionSlide>
                    {episodes?.map((EpisodeMap) => (
                        <p onClick={() => selectEpisode(EpisodeMap)}>
                            <CardModelFour key={EpisodeMap.id} episode={EpisodeMap} img={cover} />
                            {EpisodeMap === episodeSelected && <SelectedStyled />}


                        </p>
                    ))}
                </SectionSlide>
            ) : (
                <p>Não há episódios disponíveis.</p>
            )}

        </>
    );
};
