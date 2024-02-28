import { styled } from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  z-index: 100;
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
    margin-right: 24px;
    font-size: 24px;
  }

  .avatar-block {
 
    width: 24px;
    margin-right: 16px;
  }
  .text-avatar{
    color: white;
  }
  .options{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    font-weight: 700;
  }
  
  /* Para o avatar */
  summary {
    background-color: white;
    width: 100%;
    height: 100%;
    border-style: none;
    display: flex;
    justify-content: center;
    
  }
  
  @media (max-width: 900px) {
    justify-content: space-between;
    position: fixed;
    .navbar-mobile-menu {
 
 flex: 1;
 justify-content: center;
}
    .navbar-start {
 
    flex: 1;
    justify-content: center;
   }
    .navbar-center {
      display: none;  
    }
    .navbar-end {
       
    flex: 1;
    justify-content: end;
    
    }
  }
 
`;

export default HeaderStyle;
