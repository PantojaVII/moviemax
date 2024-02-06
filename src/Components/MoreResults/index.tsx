import IGenres from "../../Interfaces/IGenre";
import IMovies from "../../Interfaces/IMovies";
import ISeries from "../../Interfaces/ISeries";
import http from "../../http";
import Button from "../Button";
import CardMovieModelTwo from "../Cards/ModelTwo";
import { useEffect, useState } from "react";



interface MoreContentProps {
    Content: IMovies[] | ISeries[];
    Genre: IGenres;
    ContentType: 'movie' | 'serie';
    MoreContent: string | null;
}


export default function MoreContent({ Content, Genre, ContentType, MoreContent }: MoreContentProps) {
    const [content, setContent] = useState<IMovies[] | ISeries[]>([]);
    const [moreMovies, setMoreMovies] = useState<string | null>();

    useEffect(() => {
        setContent(Content)
        setMoreMovies(MoreContent)
    }, [Content]); // Observa as mudanças em Content e atualiza content quando Content muda


    // Função handleMoreMovies
    const handleMore = async (genreHash: string) => {


        try {
            const moreMoviesSearch = await http.get(`${moreMovies}`);
            setContent(content => [...content, ...moreMoviesSearch.data.results]);
            setMoreMovies(moreMoviesSearch.data.next)
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erro na busca de filmes por gênero:', error.message);
            } else {
                console.error('Erro desconhecido na busca de filmes por gênero:', error);
            }
            // Trate o erro de acordo com os requisitos do seu aplicativo
        }

    }
    return (
        <>
            <h1
                className=" titleSections ml-4 mt-8">
                    
                Buscando por {ContentType == "movie" ? "Filmes" : "Series"} de {Genre.name}
            </h1>
            {content.length !== 0 ? (
                <>

                    <div className='search-result'>
                        {content.map((result) => (
                            ContentType == "movie" ? (
                                <CardMovieModelTwo key={result.id} movie={result as IMovies} />
                            ) : (
                                <CardMovieModelTwo key={result.id} serie={result as ISeries} />
                            )
                        ))}

                    </div>
                    {moreMovies !== null && (
                        <div>
                            <Button
                                type='button'
                                onClick={() => handleMore(Genre.hashed_id)}
                                backgroundColor="var(--background-grey)"
                                value="Ver mais"
                            />
                        </div>
                    )}
                </>
            ) : (
                <p className="text-center mt-8">Nada encontrado.</p>
            )}
        </>
    )
}