import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";
import InputText from "../../InputText";
import FormLoginStyled from "./FormLoginStyled";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { useState, useContext } from "react";
import http from "../../../http";
import { useNotification  } from "../../../Context/notifications/NotificationContext";


export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para armazenar a mensagem de erro
  const { showToast, dismissToast, openLoad } = useNotification();
  
 
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    showToast('Aguarde, estamos carregando seu acesso !', ' 😎 ');
 
    const user = {
      email: email,
      password: password,
      // Outros campos, se houver
    };

    http
      .post("login/login/", user)
      .then((response) => {

        localStorage.setItem("token_moviemax", response.data.token);
        localStorage.setItem("name_user_moviemax", response.data.name);
        setEmail("");
        setPassword("");
        navigate("/app");
        dismissToast();
      })
      .catch((erro) => {
        if (
          erro &&
          erro.response &&
          erro.response.data &&
          erro.response.data.message
        ) {
          dismissToast();
          setError(erro.response.data.message); // Defina a mensagem de erro com base na resposta do erro
        } else {
          dismissToast();
          setError(
            "Aconteceu um erro inesperado ao efetuar o seu login! Entre em contato com o suporte."
          );
        }
      });
  };

  return (
    <FormLoginStyled>
      <div className="top-form-login">
        <div className="logo-form-login">
          <span className="h1">MOVIEMAX</span>
        </div>

        <h1 className="highlight-large">Olá, seja muito bem vindo(a)</h1>

        {/* Login social */}
        <div className="login-social">
          <Button
            value="Login com o google"
            icon={<FcGoogle></FcGoogle>}
            backgroundColor="--background-Buttons"
          />
          <Button
            value="Login com o Facebook"
            icon={<IoLogoFacebook></IoLogoFacebook>}
            backgroundColor="--background-Buttons"
          />
        </div>

        {/* Or login */}
        <div className="or-login">
          <div className="line"></div>
          <span>Ou faça login</span>
          <div className="line"></div>
        </div>
        {/* Login inpust */}
        <div>
          <form className="w-full" onSubmit={handleSubmit}>
            <InputText
              type="email"
              label="Email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Função para atualizar o valor
              required={true}
            />
            <InputText
              type="password"
              label="Sua senha"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Função para atualizar o valor
              required={true}
            />
            {error && <div className="error-message">{error}</div>}
            {/* {error && ...}: Esta é uma expressão condicional em JavaScript que verifica se a variável error possui um valor verdadeiro (ou seja, não é uma string vazia ou null). Se a variável error for verdadeira, o que estiver à direita de && será avaliado. */}
            <div className="section-ForgotPassword">
              <Link to={"forgot-password/"} className="ForgotPassword">
                Esqueci minha senha
              </Link>
            </div>
            <Button type="submit" value="Entrar" />
          </form>

          <div className="section-sign-up">
            <span>Não tem uma conta ?</span>
            <Link className="sign-up" to={"sign-up"}>
              Cadastrar-se
            </Link>
          </div>
        </div>
      </div>

    </FormLoginStyled>
  );
}
