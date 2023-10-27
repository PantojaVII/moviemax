import BackgroudImage from "../../../Components/BackgroudImage";
import FormSignUp from "../../../Components/Forms/FormSignUp";
 
import SignUpStyled from "./SignUpStyled";

export default function SignUp() {
  const img = "/movies/01.jpg";

  return (
    <SignUpStyled className="grid grid-cols-2">
      {/* LADO ESQUERDO */}
      <BackgroudImage
        backgroundImg={img}
        className="col-span-1 flex items-center justify-center "
      >
        <span className="shadow-inside"></span>
      </BackgroudImage>

      {/* lADO DIREITO */}
      <FormSignUp />
    </SignUpStyled>
  );
}
