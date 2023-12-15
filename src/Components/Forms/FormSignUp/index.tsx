import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";
import InputText from "../../InputText";
import SignUpStyled from "./SignUpStyled";
import { useState } from "react";
import http from "../../../http";

export default function FormSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<string[]>([]); // Estado para armazenar a mensagem de erro

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      username: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      // Outros campos, se houver
    };

    http
      .post("Accounts/", user)
      .then((response) => {
        const userLogin = {
          email: email,
          password: password,
        };

        http
          .post("login/login/", userLogin)
          .then((response) => {
            sessionStorage.setItem("token", response.data.token);
            navigate("/app");
          })
          .catch((erro) => {
            if (
              erro &&
              erro.response &&
              erro.response.data &&
              erro.response.data.message
            ) {
              setError(erro.response.data.message); // Defina a mensagem de erro com base na resposta do erro
            } else {

              setError(
                "Aconteceu um erro inesperado ao efetuar o seu login! Entre em contato com o suporte."
              );
            }
          });

      })
      .catch((erro) => {

        const errors = erro.response.data.errors; // ou outro tipo adequado
        setErrors(errors); // Define o estado 'errors' com o array de mensagens de erro
        console.log(errors);

      });
  };

  return (
    <SignUpStyled className="section-reset-password">
      <div className="top-form-login">
        <div className="logo-form-login">
          <span className="h1">MOVIEMAX</span>
          <h1 className="highlight-large">Cadastre-se</h1>
        </div>
        <div className="SingUp">
          <form onSubmit={handleSubmit}>
            <InputText
              type="text"
              label="Seu primeiro nome"
              placeholder="Escolha um username"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              type="email"
              label="Email"
              placeholder="Digite seu email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="password"
              label="Sua senha"
              placeholder="Digite sua senha"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputText
              type="password"
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors && (
              <div className="error-message">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <Button type="submit" value="Confirmar" />
          </form>
          <div className="My-Account">
            <div className="texts-links mt-8 ">
              <span>Já tem uma conta?</span>
              <Link className="link" to={"../"}>
                Entrar
              </Link>
            </div>
          </div>
        </div>
        <form className="Reset-Password" action=""></form>
      </div>
    </SignUpStyled>
  );
}
