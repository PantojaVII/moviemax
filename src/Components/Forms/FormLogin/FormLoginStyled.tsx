import { styled } from "styled-components";

/* interface BackgroudImageStyledProps {
    $backgroundImg?: string;
} */

const FormLoginStyled = styled.div`
  /* < BackgroudImageStyledProps >  */
  display: flex;

  justify-content: center;

  .top-form-login {
    text-align: center;
    width: 400px;
    margin: 68px 0;
  }
  .login-social {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    gap: 8px;
  }
  .highlight-large {
    margin-top: 24px;
  }
  .or-login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    font-size: 16px;
  }

  .line {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
    margin: 0 8px;
    display: inline-block; /* Adicione essa propriedade */
  }

  span {
    color: #666;
    font-weight: bold;
  }

  .section-ForgotPassword {
    text-align: right;
    margin-bottom: 12px;
  }
  .ForgotPassword {
    font-weight: bold;
    font-size: 12px;
    color: var(--secondary);
    margin-right: 4px;

  }
  .section-sign-up {
    font-size: 14px;
    margin: 24px;
  }
  .section-sign-up .sign-up {
    margin-left: 8px;
    font-weight: bold;
    color: var(--secondary);
  }
`;

export default FormLoginStyled;
