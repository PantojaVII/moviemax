import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import HeaderStyle from "./HeaderStyle";
import { BsSearch } from "react-icons/bs";
import { useAuthContext } from "../../Context/auth/AuthContext";
import { HamburgerIcon } from "../Sidebar/SidebarStyled";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useSidebarContext } from "./../../Context/menu/menuContext";
import { IoSettingsOutline } from "react-icons/io5";


export default function Header() {
  const { isOpenMenu, toggleMenu } = useSidebarContext();
  const { user } = useAuthContext();
  let navigate = useNavigate();

  // Obtém o nome do usuário armazenado no localStorage
  const nameUser = localStorage.getItem("name_user_moviemax");

  // Verifica se o nome do usuário está definido
  const initials = nameUser ? nameUser.slice(0, 2).toUpperCase() : '';

  const onLogout = () => {
    const token = localStorage.getItem("token_moviemax");

    if (token) {
      console.log("Usuário está logado. Realize o logout.");
      localStorage.removeItem("token_moviemax");
      localStorage.removeItem("name_user");
      navigate("/");
    } else {
      console.log("Usuário não está logado.");
      navigate("/");
    }
  };


  return (
    <HeaderStyle className="navbar bg-base-100">
      <div className="navbar-mobile-menu">
        <HamburgerIcon onClick={toggleMenu}>
          {isOpenMenu ? <IoMdClose size={20} /> : <FiMenu size={20} />}
        </HamburgerIcon>
      </div>
      <div className="navbar-start">
        <h1 className="h1 logo">
          <Link to="/app/">MOVIEMAX</Link>
        </h1>
      </div>
      <div className="navbar-center">
        <div className="navbar-links">
          <Link className="h2 navbar-link" to="filmes/">
            Filmes
          </Link>
          <Link className="h2 navbar-link" to="filmes/">
            Séries
          </Link>
          <Link className="h2 navbar-link" to="filmes/">
            Animações
          </Link>
          <Link className="h2 navbar-link" to="filmes/">
            Gêneros
          </Link>
        </div>

      </div>
      <div className="navbar-end">
        <div className="navbar-search">
          <Link to={"search"}> <BsSearch /></Link>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn avatar-block">

            <div className="avatar placeholder">
              <div className="bg-primary text-white rounded-full w-8">
                <span className="text-avatar">{initials}</span>
              </div>
            </div>
            

          </div>
          <ul className="p-2  shadow menu dropdown-content z-[1] bg-secondary rounded-box w-52 right-0 left-auto">
            <li className="options">
              <Link to="profile/" >
                <IoSettingsOutline /> Configurações
              </Link>
            </li>
            <li className="options">
              <a href="#" onClick={() => onLogout()}> <IoSettingsOutline /> Sair</a>
            </li>
          </ul>
        </div>

      </div>
    </HeaderStyle>
  );
}
