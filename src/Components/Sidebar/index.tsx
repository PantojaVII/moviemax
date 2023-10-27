import { Link } from "react-router-dom";
import SidebarStyled from "./SidebarStyled";
import { BiHomeAlt } from "react-icons/bi";
import { GiStarShuriken } from "react-icons/gi";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
 

export default function Sidebar() {
  return (
    <SidebarStyled>
      <span className="titleSections mb-12">Menu</span>
      <Link to={"/app/"}>
        <div className="links hover">
          <BiHomeAlt className="text-menu iconMenu"></BiHomeAlt>
          <span className="text-menu hover">Início</span>
        </div>
      </Link>
      <Link to={"filmes/"}>
        <div className="links hover ">
          <GiStarShuriken className="text-menu iconMenu"></GiStarShuriken>
          <span className="text-menu">Melhores filmes</span>
        </div>
      </Link>
      <Link to={"filmes/"}>
        <div className="links hover ">
          <BsFillBrightnessHighFill className="text-menu iconMenu"></BsFillBrightnessHighFill>
          <span className="text-menu">Destaques</span>
        </div>
      </Link>
      <span className="titleSections mb-12">Biblioteca</span>
      <Link to={"filmes/"}>
        <div className="links hover ">
          <AiFillClockCircle className="text-menu iconMenu"></AiFillClockCircle>
          <span className="text-menu">Recentes</span>
        </div>
      </Link>
      <Link to={"filmes/"}>
        <div className="links hover ">
          <BsFillCheckCircleFill className="text-menu iconMenu"></BsFillCheckCircleFill>
          <span className="text-menu">Assistidos</span>
        </div>
      </Link>
      <Link to={"filmes/"}>
        <div className="links hover ">
          <CiCircleList className="text-menu iconMenu"></CiCircleList>
          <span className="text-menu">Minha lista</span>
        </div>
      </Link>
    </SidebarStyled>
  );
}
