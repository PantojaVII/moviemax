import React from "react"; // Importe o React
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  value: string;
  backgroundColor?: string;
  icon?: React.ReactElement;
}

export default function Button({ value, backgroundColor, icon }: ButtonProps) {
  return (
    <ButtonStyled
      $backgroundColor={backgroundColor}
      className="btn btn-wide w-full border-none hover:bg-blue-800 "
    >
      <i>{icon}</i>
      <span className="text-button">{value}</span>
    </ButtonStyled>
  );
}
