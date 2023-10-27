import { Link } from "react-router-dom";
import Button from "../../Button";
import InputText from "../../InputText";
import FormForgotPasswordStyled from "./FormsForgotPassword";

export default function FormForgotPassword() {
  return (
    <FormForgotPasswordStyled className="section-reset-password">
      <div className="logo-form-login">
        <span className="h1">MOVIEMAX</span>
        <h1 className="highlight-large">Recuperar Conta</h1>
      </div>
      <div className="RecoverPassword">
        <form action="">
          <InputText
            type="Email"
            label="Email"
            placeholder="Digite seu email"
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
    </FormForgotPasswordStyled>
  );
}
