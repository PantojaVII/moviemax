/* index.tsx */
import BackgroudImage from "../../../Components/BackgroudImage";
import FormSignUp from "../../../Components/Forms/FormSignUp";
import SignUpStyled from "./SignUpStyled";

export default function SignUp() {
  const img = "/cover-02.png";

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
