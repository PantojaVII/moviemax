import Button from "../Button";
import SectionTwoStyled from "./SectionTwoStyled";

interface NavegationBoardProps {
  children: React.ReactNode;
  title: string;
}
export default function NavegationBoard({
  children,
  title,
}: NavegationBoardProps) {
  return (
    <SectionTwoStyled>
      <h1 className="titleSections">{title}</h1>
      {children}
      <div className="more-movie">
        <Button backgroundColor="var(--background-grey)" value="Ver mais" />
      </div>
    </SectionTwoStyled>
  );
}
