import { styled } from "styled-components";

export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12px;
  color: white;
`;

export const InputTextStyled = styled.input`
  width: 100%;
  height: 45px;
  padding: 8px;
  border: 1px solid #ccc; /* Adicione uma borda padrão */
  border-radius: 25px;
  background-color: var(--background-Buttons);
  outline: none;
  border: none;
  transition: outline 0.3s;

  &:focus {
    border: none;
    transition: outline 0.3s;
    outline: 2px solid var(--primary); /* Adicione uma borda externa em foco */
  }
`;
