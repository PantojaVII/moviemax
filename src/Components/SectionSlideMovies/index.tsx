import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import CardMovieModelTwo from "../CardsMovies/ModelTwo";
import IMovies from "../../Interfaces/IMovies";

interface SectionOneSectionbuttonProps {
  title: string;
  movies: IMovies[];
}

const SectionbuttonContainer = styled.div<{ isHovered: boolean }>`
  display: flex;
  gap: 16px;
  max-width: 100%;
  margin-bottom: 400px;
  position: relative;
  z-index: ${(props) => (props.isHovered ? 10 : 1)};
`;

const Movie = styled.div`
  position: relative;
`;

const MoviesContainer = styled.div<{ containerWidth: number }>`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  max-width: ${(props) => props.containerWidth}px;

  &::-webkit-scrollbar {
    width: none;
    display: none;
  }

  scrollbar-width: none;
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const SectionSlideMovies = ({ title, movies }: SectionOneSectionbuttonProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <h1 className="titleSections">{title}</h1>
      <SectionbuttonContainer
        ref={containerRef}
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MoviesContainer containerWidth={containerWidth}>
          {movies.map((movie) => (
            <Movie key={movie.id}>
              <CardMovieModelTwo movie={movie} />
            </Movie>
          ))}
        </MoviesContainer>
        <div className="Overlay"></div>
      </SectionbuttonContainer>
    </div>
  );
};

export default SectionSlideMovies;
