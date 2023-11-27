import { styled } from "styled-components";
import { useState, useRef, useEffect } from "react";

interface SectionOneSectionbuttonProps {
  title: string;
  children: React.ReactNode;
  onScrollLeft?: () => void;
  onScrollRight?: () => void;
}

const SectionbuttonContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
 

`;

const SectionbuttonStyled = styled.div<{ containerWidth: number }>`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  max-width: ${(props) => props.containerWidth}px;
 

`;

const ContentSectionbuttonStyled = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 64px 0;
  gap: 36px;

  position: relative;
 
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  transition: 0.3s;
`;

const ScrollButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 50%; /* Adicionado para centralizar verticalmente */
  width: 40px;
  height: 40px;
  background: var(--color-gray);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  margin: auto 24px;
  transition: 0.3s;
  font-weight: bold;
  transform: translateY(-50%); /* Adicionado para centralizar verticalmente */
  &:hover {
    background-color: var(--primary);
  }
  @media (max-width: 789px) {
    display: none;
  }
`;


const SectionSlideMovies = ({
  title,
  children,
  onScrollLeft,
  onScrollRight,
}: SectionOneSectionbuttonProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleScrollLeft = () => {
    if (contentRef.current) {
      const scrollAmount = contentRef.current.scrollLeft - 500;
      smoothScrollTo(contentRef.current, scrollAmount, 300);
    }
  };

  const handleScrollRight = () => {
    if (contentRef.current) {
      const scrollAmount = contentRef.current.scrollLeft + 500;
      smoothScrollTo(contentRef.current, scrollAmount, 300);
    }
  };

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
    <SectionbuttonContainer ref={containerRef}>
      <SectionbuttonStyled containerWidth={containerWidth}>
        <h1 className="titleSections">{title}</h1>
        <ContentSectionbuttonStyled ref={contentRef}>
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
};

export default SectionSlideMovies;
