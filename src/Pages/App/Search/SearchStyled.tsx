import { styled } from "styled-components";

export const SearchStyled = styled.section`
margin-top: 24px;
h1{
    font-size: 18px;
    font-weight: bold;
    margin-left: 16px;
    margin-bottom: 12px;
  }
.search{
   display: flex;
   margin: 24px 8px;
   form{
   width: 100%;
   gap: 12px;
   display: flex;
 

   align-items: center;
   .form-search{
    flex: 2;
   }
   .button-search{
 
 margin-bottom: 4px;
 
   }
 }
}
`;

export const ButtonSearch = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in 0.3s;

  &:hover {
    background-color: var(--secondary);
  }
`;