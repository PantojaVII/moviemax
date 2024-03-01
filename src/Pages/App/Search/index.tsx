import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import SectionTwoStyled from "../../../Components/SectionTwoStyled";
import Highlights from "../../../Components/Highlights";
import CardMovieModelOne from "../../../Components/Cards/ModelOne";
import { styled } from "styled-components";
import SectionSlideMovies from "../../../Components/SectionSlide";
import { useEffect, useState } from "react";
import IMovies from "../../../Interfaces/IMovies";
import http from "../../../http";
import CardMovieModelTwo from "../../../Components/Cards/ModelTwo";
import ContainerMaster from "../../../Components/Container/ContainerMaster";
import { SearchStyled, ButtonSearch } from "./SearchStyled";
import InputText from "../../../Components/InputText";
import { BsSearch } from "react-icons/bs";
import Button from "../../../Components/Button";

const SectionOneSectionTopStyled = styled.div``;

interface SearchProps { }
// ... (importações e código existente)

export default function Search({ }: SearchProps) {
    const [search, setSearch] = useState<string>("");
    const [Results, setResults] = useState<IMovies[]>([]);

    const searchData = () => {
        http.get(`search/?q=${search}`)  // Adiciona a query de busca ao URL
            .then(returnMovies => {
                setResults(returnMovies.data.results);
            })
            .catch(erro => {
                console.log(erro);
            });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();  // Evita que o formulário seja enviado
        // Chama a função de busca
        searchData();
    };

    return (
        <ContainerMaster>
            <Container>
                <SectionOneStyled>
                    <SearchStyled>
                        <h1>O que está procurando ?</h1>
                        <section className="search">
                            <form onSubmit={handleSearch}>
                                <div className="form-search">
                                    <InputText
                                        type="text"
                                        placeholder="Digite sua busca"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        required={true}
                                    />
                                </div>
                                <div className="button-search">
                                    <ButtonSearch type="submit">
                                        <BsSearch />
                                    </ButtonSearch>
                                </div>
                            </form>
                        </section>
                        <h1>Buscando por: {search}</h1>
                        <section className="search-result">
                            {Results.length > 0 ? (
                                Results.map((result) => (
                                    <div key={result.id}>
                                        {result.info && result.info.includes('FILME') ? (
                                            <CardMovieModelTwo movie={result} />
                                        ) : (
                                            <CardMovieModelTwo serie={result} />
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>Nada encontrado.</p>
                            )}
                        </section>

                    </SearchStyled>
                </SectionOneStyled>
            </Container>
        </ContainerMaster>
    );
}

