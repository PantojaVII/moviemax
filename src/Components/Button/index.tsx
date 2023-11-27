import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  value: string;
  backgroundColor?: string;
  icon?: React.ReactElement;
  type?: "button" | "submit" | "reset"; // Adicione as opções aceitáveis para o tipo
}

export default function Button({ value, backgroundColor, icon, type }: ButtonProps) {
  return (
    <ButtonStyled
      type={type || "button"} // Defina um valor padrão caso 'type' seja undefined
      $backgroundColor={backgroundColor}
      className="btn btn-wide w-full border-none hover:bg-blue-800 "
    >
      <i>{icon}</i>
      <span className="text-button">{value}</span>
    </ButtonStyled>
  );
}
