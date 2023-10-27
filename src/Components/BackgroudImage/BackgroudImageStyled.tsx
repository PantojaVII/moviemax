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
 `;

export default BackgroudImageStyled;
