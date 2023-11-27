import { styled } from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
 
  .navbar-start {
    display: flex;
    flex: 0.5;
    justify-content: center;
   }

  .navbar-center {
     flex: 1.5;
     padding: 0 12px;
  }
  
  .navbar-end {
    padding-right: 6px;
  }

  .navbar-links {
    display: flex;
    gap: 48px;  // Espaçamento entre os links
  }  

  .navbar-search {
    margin-right: 12px;
    font-size: 24px;
  }

  .avatar {
    width: 24px;
  }
  
  /* Para o avatar */
  summary {
    background-color: transparent;
    border-style: none;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    position: fixed;
    .navbar-start {
    display: flex;
    flex: 2;
    justify-content: flex-end;
    padding-right: 12px;
   }
    .navbar-center {
      display: none;  
    }
    .navbar-end {
    flex: 1;
    padding-right: 6px;
  }
 
  }
`;

export default HeaderStyle;
