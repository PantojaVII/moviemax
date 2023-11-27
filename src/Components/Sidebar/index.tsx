import { SidebarStyled, HamburgerIcon } from "./SidebarStyled";
import { styled } from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { GiStarShuriken } from "react-icons/gi";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HamburgerIcon onClick={handleToggle}>
        {isOpen ? <IoMdClose size={20} /> : <FiMenu size={20} />}
      </HamburgerIcon>
      <SidebarStyled isOpen={isOpen}>
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
    </>
  );
}
