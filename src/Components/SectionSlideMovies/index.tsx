import { styled } from "styled-components";
import { useState, useRef } from "react";

// Interface para as propriedades do componente
interface SectionOneSectionbuttonProps {
  title: string;
  children: React.ReactNode;
  onScrollLeft?: () => void;
  onScrollRight?: () => void;
}

// Estilos do contêiner principal do componente
const SectionbuttonContainer = styled.div`
  position: relative;
 
`;

// Estilos do contêiner de conteúdo do componente
const SectionbuttonStyled = styled.div`
  display: flex;
  max-width: 1100px;
 
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  margin-left: 16px;
`;

// Estilos do contêiner de rolagem horizontal
const ContentSectionbuttonStyled = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 24px 0;
 
  gap: 36px;
  position: relative;
  h1 {
    font-size: 24px;
  }
  &::-webkit-scrollbar {
    width: 2px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
 
    border-radius: 25px; /* Borda arredondada do polegar */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Tornando a pista da barra de rolagem transparente */
  }
  transition: 0.3s;
`;



// Estilos do botão de rolagem
const ScrollButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  height: 40px; /* Tornando o botão redondo */
  background:var(--color-gray);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: 50%; /* Tornando o botão redondo */
  margin: auto 24px;
  transition: 0.3s;
  font-weight: bold;
  &:hover {
    background-color: var(
      --primary
    ); /* Definindo a cor ao passar o mouse como var(--primary) */
  }

`;

export default function SectionSlideMovies({
  title,
  children,
  onScrollLeft,
  onScrollRight,
}: SectionOneSectionbuttonProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Função para lidar com a rolagem suave para a esquerda
  const handleScrollLeft = () => {
    if (contentRef.current) {
      const scrollAmount = contentRef.current.scrollLeft - 500;
      smoothScrollTo(contentRef.current, scrollAmount, 300); // duração
    }
  };

  // Função para lidar com a rolagem suave para a direita
  const handleScrollRight = () => {
    if (contentRef.current) {
      const scrollAmount = contentRef.current.scrollLeft + 500;
      smoothScrollTo(contentRef.current, scrollAmount, 300); // duração
    }
  };

  // Função para realizar a rolagem suave
  function smoothScrollTo(element: HTMLElement, to: number, duration: number) {
    const start = element.scrollLeft;
    const change = to - start;
    const increment = 10;

    const animateScroll = function (elapsedTime: number) {
      elapsedTime += increment;
      const position = easeInOut(elapsedTime, start, change, duration);
      element.scrollLeft = position;
      if (elapsedTime < duration) {
        setTimeout(function () {
          animateScroll(elapsedTime);
        }, increment);
      }
    };

    animateScroll(0);
  }

  // Função para suavizar a rolagem
  function easeInOut(
    currentTime: number,
    start: number,
    change: number,
    duration: number
  ): number {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return (change / 2) * currentTime * currentTime + start;
    }
    currentTime--;
    return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
  }

  return (
    <SectionbuttonContainer>
      <SectionbuttonStyled>
        <h1 className="titleSections">{title}</h1>
        <ContentSectionbuttonStyled  ref={contentRef}>
          {children}
        </ContentSectionbuttonStyled>
        <div className="Overlay"></div>
      </SectionbuttonStyled>
      <ScrollButton onClick={handleScrollLeft}>{"⇠"}</ScrollButton>
      <ScrollButton style={{ right: 0 }} onClick={handleScrollRight}>
        {"⇢"}
      </ScrollButton>
    </SectionbuttonContainer>
  );
}
