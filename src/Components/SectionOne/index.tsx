import SectionOneStyled from "./SectionOneStyled";

interface HighlightsProps{
  children: React.ReactNode
}

export default function SectionOne({children}: HighlightsProps ) {
  return (
    <SectionOneStyled>
      {children}
    </SectionOneStyled>
  );
}
