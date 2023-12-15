
import React from "react";
import { AgeStyled } from "./AgeStyled";

interface AgeProps {
  value: string | undefined;
}

const Age: React.FC<AgeProps> = ({ value }) => (
  <AgeStyled>
    <span>{value}</span>
  </AgeStyled>
);

export default Age;