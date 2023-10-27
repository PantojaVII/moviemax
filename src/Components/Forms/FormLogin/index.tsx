import { Link } from "react-router-dom";
import Button from "../../Button";
import InputText from "../../InputText";
import FormLoginStyled from "./FormLoginStyled";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
/* 
interface FormLoginProps {
    children: ReactNode;
}

 */

export default function FormLogin() {
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
          <form className="w-full" action="">
            <InputText
              type="email"
              label="Email"
              placeholder="Digite seu email"
            />
            <InputText
              type="password"
              label="Senha"
              placeholder="Digite seu email"
            />
            <div className="section-ForgotPassword">
              <Link to={"forgot-password/"} className="ForgotPassword">
                Esqueci minha senha
              </Link>
            </div>
            <Link to={"app"}>
              <Button value="Entrar" />
            </Link>
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
