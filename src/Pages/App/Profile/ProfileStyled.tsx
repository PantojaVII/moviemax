import { styled } from "styled-components";

export const ProfileStyled = styled.section`
    display: flex;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
 color: var(--color-gray);
 height: auto; /* Alterado para altura automática */
 padding: 20px; /* Adicionado preenchimento para melhor espaçamento */
 .content-users{
   width: 100%;
   margin-left: 8px;
 }
 a {
    font-size: 16px;
    font-weight: 700;
 }

 li {
    margin-bottom: 24px;
 }

 .selected {
    color: var(--primary);
 }


 .buttons{
   display: flex;
   flex-direction: column;
   gap: 24px;
   justify-content: center;
 }
  .btn-exit {
    border-radius: 25px; 
    color: white; /* Adicionado para definir a cor do texto */
}

 .btn-exit i {
    font-size: 16px;
}

 .bg-exit {
    background-color: red;
    transition: ease-out 0.5s;
}

 .bg-exit:hover {
    transition: ease-out 0.5s;
    background-color: #b17272;
}

 @media screen and (max-width: 768px) {
    /* Estilos para telas menores que 768px */
    padding: 10px; /* Reduzir o preenchimento */
    a {
        font-size: 14px; /* Reduzir o tamanho da fonte */
    }
    .btn-exit {
        padding: 8px 16px; /* Reduzir o preenchimento */
        font-size: 14px; /* Reduzir o tamanho da fonte */
    }
 }
`;
