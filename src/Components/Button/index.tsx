import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  value?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  icon?: React.ReactElement;
  type?: "button" | "submit" | "reset"; // Adicione as opções aceitáveis para o tipo
 
  /* A notação onClick?: () => void; é uma definição de propriedade em TypeScript que indica que a propriedade onClick deve ser uma função que não recebe nenhum argumento (() =>) e não retorna nenhum valor (void). */
}

export default function Button({ value, backgroundColor, icon, type, width, height  }: ButtonProps) {
  return (
    <ButtonStyled
      type={type || "button"} // Defina um valor padrão caso 'type' seja undefined
      $backgroundColor={backgroundColor}
      $width={width}
      $height={height}
      className="btn btn-wide w-full border-none hover:bg-blue-800 "
    >
      <i>{icon}</i>
      <span className="text-button">{value}</span>
    </ButtonStyled>
  );
}
