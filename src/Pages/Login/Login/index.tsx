import BackgroudImage from "../../../Components/BackgroudImage";
import FormLogin from "../../../Components/Forms/FormLogin";
import LoginStyled from "./LoginStyled";

export default function Login() {
  const img = "/movies/02.jpg";

  return (
    <LoginStyled className="grid grid-cols-2">
      {/* LADO ESQUERDO */}
      <BackgroudImage
        backgroundImg={img}
        className="col-span-1 flex items-center justify-center "
      >
        <span className="shadow-inside"></span>
      </BackgroudImage>

      {/* lADO DIREITO */}
      <FormLogin />
    </LoginStyled>
  );
}
