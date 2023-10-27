import React from "react";
import RankingStyled from "./RankingStyled";

interface RankingProps {
  children?: React.ReactNode;
  title: string;
}
export default function Ranking({ children, title }: RankingProps) {
  return (
    <RankingStyled>
      <span className="Ranking">{title}</span>
      {children}
    </RankingStyled>
  );
}
