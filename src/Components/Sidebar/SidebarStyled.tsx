import { styled } from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarStyled = styled.div<SidebarProps>`
  
  padding-left: 32px;
  transition: width 0.3s ease, opacity 0.3s ease; /* Adicionando transição para opacity */
  width: '240px';
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  background-color: var(--background-Buttons);
  color: var(--color-gray);

  .links {
    display: flex;
    width: auto;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 52px;
    transition: 0.3s;
    padding-right: 8px;
  }

  .text-menu {
    color: var(--color-gray);
    flex-wrap: wrap;
    max-width: auto;
    margin-left: 8px;
    font-size: 16px;
    transition: 0.3s;
    
  }

  .iconMenu {
    font-size: 24px;
    font-weight: bold;
    transition: 0.3s;
  }

  .links.hover:hover * {
    color: var(--primary);
    transition: 0.3s;
  }

  @media (max-width: 900px) {
  position: fixed;
  padding-left: 32px;
  transition: width 0.3s ease, opacity 0.3s ease;  
  width: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; 
  padding-top: 64px;
  background-color: var(--background-Buttons);
  color: var(--color-gray);
  height: 100%;
  z-index: 3;

  /* Adicione esta linha para desativar a interação com os botões quando o menu está fechado */
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
} 
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    top: 15px;
    left: 25px;
    z-index: 1000;
    transition: left 0.3s ease;  
  }
`;
