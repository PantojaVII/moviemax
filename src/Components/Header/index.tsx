import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import HeaderStyle from "./HeaderStyle";
import { BsSearch } from "react-icons/bs";
import { useAuthContext } from "../../Context/auth/AuthContext";

export default function Header() {
  const { user } = useAuthContext();
  let navigate = useNavigate();

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
    <HeaderStyle className="navbar bg-base-100">
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
          <BsSearch />
        </div>
        <details className="dropdown">
          <summary className="m-1 btn">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://github.com/pantojavii.png" alt="Avatar do Usuário" />
              </div>
            </div>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 right-0 left-auto">
            <li>
              <a onClick={() => onLogout()}>Sair</a>
            </li>
          </ul>
        </details>

      </div>
    </HeaderStyle>
  );
}
