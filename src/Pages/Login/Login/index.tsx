/* index.tsx */
import BackgroudImage from "../../../Components/BackgroudImage";
import FormLogin from "../../../Components/Forms/FormLogin";
import LoginStyled from "./LoginStyled";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

export default function Login() {
  const img = "/cover01.png";
  const token = localStorage.getItem("token_moviemax");
  const navigate = useNavigate();



  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        console.log("Token encontrado. Redirecionando para /app");
        navigate("/app");
      }else{
        console.log('Nada encontrado');
        
      }
    };

    checkToken();
  }, [token, navigate]);
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
