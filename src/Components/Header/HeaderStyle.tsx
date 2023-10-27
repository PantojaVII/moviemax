import { styled } from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-items: center;
 
  padding: 16px  0;
  .navbar-start {
    max-width: 15%;
    
 
  }
  .navbar-center {
    width: 80%;
    justify-content: space-between;

    padding: 0 12px;
  }
  .navbar-center .navbar-link {
    margin-right: 48px;
  }
  .navbar-center .navbar-search {
    margin-right: 12px;
    font-size: 24px;
  }

  .navbar-end {
    width: 5%;
    justify-content: space-around;
  }
  .avatar {
    width: 24px;
  }

  /* Para o avatar */
  summary {
    background-color: transparent;
    border-style: none;
  }
`;

export default HeaderStyle;
