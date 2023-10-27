import { styled } from "styled-components";

const SidebarStyled = styled.div`
  padding-left: 32px;
  width: 18%;
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  background-color: var(--background-Buttons);
  color: var(--color-gray);
  
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 52px;
    transition: 0.3s;
  }
  .text-menu {
    color: var(--color-gray);
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
`;

export default SidebarStyled;
