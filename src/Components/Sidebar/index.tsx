import { SidebarStyled, HamburgerIcon } from "./SidebarStyled";
import { styled } from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { GiStarShuriken } from "react-icons/gi";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSidebarContext } from "./../../Context/menu/menuContext";


export default function Sidebar() {
  const { isOpenMenu, toggleMenu } = useSidebarContext();
  return (
    <>

      <SidebarStyled isOpen={isOpenMenu}>
        <span className="titleSections mb-12">Menu</span>
        <Link to={"/app/"}>
          <div className="links hover">
            <BiHomeAlt className="text-menu iconMenu"></BiHomeAlt>
            <span onClick={toggleMenu} className="text-menu hover">Início</span>
          </div>
        </Link>
        <Link to={"filmes/"}>
          <div className="links hover ">
            <GiStarShuriken className="text-menu iconMenu"></GiStarShuriken>
            <span onClick={toggleMenu} className="text-menu">Filmes</span>
          </div>
        </Link>
        <Link to={"Series/"}>
          <div className="links hover ">
            <BsFillBrightnessHighFill className="text-menu iconMenu"></BsFillBrightnessHighFill>
            <span onClick={toggleMenu} className="text-menu">Séries</span>
          </div>
        </Link>
        <span className="titleSections mb-12">Biblioteca</span>
        <Link to={"filmes/"}>
          <div className="links hover ">
            <AiFillClockCircle className="text-menu iconMenu"></AiFillClockCircle>
            <span onClick={toggleMenu} className="text-menu">Recentes</span>
          </div>
        </Link>
        <Link to={"filmes/"}>
          <div className="links hover ">
            <BsFillCheckCircleFill className="text-menu iconMenu"></BsFillCheckCircleFill>
            <span onClick={toggleMenu} className="text-menu">Assistidos</span>
          </div>
        </Link>
        <Link to={"filmes/"}>
          <div className="links hover ">
            <CiCircleList className="text-menu iconMenu"></CiCircleList>
            <span onClick={toggleMenu} className="text-menu">Minha lista</span>
          </div>
        </Link>

      </SidebarStyled>
    </>
  );
}
