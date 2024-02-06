import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../Components/Container";
import SectionOneStyled from "../../../Components/SectionOne";
import { styled } from "styled-components";
import ContainerMaster from "../../../Components/Container/ContainerMaster";
import { ProfileStyled } from "./ProfileStyled";
import SectionTwoStyled from "../../../Components/SectionTwoStyled/SectionTwoStyled";
import { CgProfile } from "react-icons/cg";
import { MdPassword } from "react-icons/md";
import Button from "../../../Components/Button";
import { IoMdExit } from "react-icons/io";
import FormUser from "../../../Components/Forms/FormUser";
import http from "../../../http";

const SectionOneSectionTopStyled = styled.div``;

interface ProfileProps { }

export default function Profile({ }: ProfileProps) {
    const [selectedSection, setSelectedSection] = useState("profile");
    let navigate = useNavigate();
    const [idUser, setIdUser] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        http.get('userProfile/')
            .then(returnMovies => {
                setIdUser(returnMovies.data.id);
                setName(returnMovies.data.first_name);
                setEmail(returnMovies.data.email);
            })
            .catch(erro => {
                console.log('Erro index page');
            });
    }, []);

    // Use um estado para rastrear se os dados do usuário foram carregados
    const [userDataLoaded, setUserDataLoaded] = useState(false);
    // Atualize os estados quando os dados do usuário forem carregados
    useEffect(() => {
        if (idUser && name && email) {
            setUserDataLoaded(true);
        }
    }, [idUser, name, email]);

    // Verifique se os dados do usuário foram carregados antes de renderizar os componentes
    if (!userDataLoaded) {
        return <div>Carregando...</div>;
    }
    const onLogout = () => {
        const token = sessionStorage.getItem("token");

        if (token) {
            console.log("Usuário está logado. Realize o logout.");
            sessionStorage.removeItem("token");
            navigate("/");
        } else {
            console.log("Usuário não está logado.");
            navigate("/");
        }
    };
    return (
        <ContainerMaster>
            <Container>
                <SectionTwoStyled>
                    <ProfileStyled>
                        <ul className="menu bg-base-200 rounded-box">
                            <li>
                                <a
                                    className={selectedSection === "profile" ? "selected" : ""}
                                    onClick={() => setSelectedSection("profile")}
                                >
                                    <CgProfile />
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <a
                                    className={selectedSection === "password" ? "selected" : ""}
                                    onClick={() => setSelectedSection("password")}
                                >
                                    <MdPassword />
                                    Senha
                                </a>
                            </li>
                            <div className="divider"></div>
                            <button className="btn btn-outline btn-error btn-exit">
                                <i> <IoMdExit /></i>
                                Deletar conta
                            </button>
                            <button onClick={() => onLogout()} className="btn btn-exit bg-exit">
                                <i> <IoMdExit /></i>
                                Sair
                            </button>
                        </ul>
                    </ProfileStyled>
                </SectionTwoStyled>
                <SectionOneStyled>
                    {selectedSection === "profile" && (
                        <FormUser IdUser={idUser} Name={name} Email={email} action="profile" />
                    )}
                    {selectedSection === "password" && (
                        <FormUser IdUser={idUser} Name={name} Email={email} action="password" />
                    )}
                </SectionOneStyled>
            </Container>
        </ContainerMaster>
    );
}
