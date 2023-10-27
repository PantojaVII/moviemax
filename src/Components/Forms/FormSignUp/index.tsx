import { Link } from "react-router-dom";
import Button from "../../Button";
import InputText from "../../InputText";
import SignUpStyled from "./SignUpStyled";

export default function FormSignUp() {
  return (
    <SignUpStyled className="section-reset-password">
      <div className="logo-form-login">
        <span className="h1">MOVIEMAX</span>
        <h1 className="highlight-large">Cadastre-se</h1>
      </div>
      <div className="SingUp">
        <form action="">
          <InputText
            type="Text"
            label="Nome"
            placeholder="Digite seu Nome"
          />
          <InputText
            type="Email"
            label="Email"
            placeholder="Digite seu email"
          />
          <InputText
            type="password"
            label="Sua senha"
            placeholder="Digite sua senha"
          />
          <InputText
            type="password"
            label="Confirme sua senha"
            placeholder="Confirme sua senha"
          />
          <Button value="Confirmar" />
        </form>
        <div className="My-Acount">
          <div className="texts-links">
            <span>Já tem uma conta ?</span>
            <Link className="link" to={"../"}>
              Entrar
            </Link>
          </div>
        </div>
      </div>

      <form className="Reset-Password" action=""></form>
    </SignUpStyled>
  );
}
