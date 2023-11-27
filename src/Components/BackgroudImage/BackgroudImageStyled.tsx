import { styled } from "styled-components";

interface BackgroudImageStyledProps {
    $backgroundImg?: string;
}

const BackgroudImageStyled = styled.main < BackgroudImageStyledProps > `
         background-image: url(
            ${(props) => props.$backgroundImg}
            );
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
    @media screen and (max-width: 790px) {
    /* Adjust styles for smaller screens */
    display: none;
 

    /* Reset height for smaller screens */
 
  }
 `;

export default BackgroudImageStyled;
