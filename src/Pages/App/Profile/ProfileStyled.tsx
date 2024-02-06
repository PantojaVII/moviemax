import { styled } from "styled-components";

export const ProfileStyled = styled.section`
 color: var(--color-gray);
 height: 400px;
 a{
    font-size: 16px;
    font-weight: 700;
 }
 li{
    margin-bottom: 24px;
 }
 .selected{
    color: var(--primary);
 }
 .btn-exit{
    border-radius: 25px;
    margin-bottom: 12px;
 }
 .btn-exit i{
    font-size: 16px;
 }
 .bg-exit{
    background-color: red;
    transition: ease-out 0.5s;
 }
 .bg-exit:hover{
    transition: ease-out 0.5s;
    background-color: #b17272;
 }

`;