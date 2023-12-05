import { styled } from "styled-components";

interface PlayerStyledProps {
  $backgroundImg?: string;
}
interface PosterStyledProps {
  poster?: string;
}
export const ContainerPlayerStyled = styled.section`
 border-radius: 25%;
 
 `
export const PlayerStyledShadow = styled.div`
position: absolute;
top: 0px;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.767));
`
export const StartStyled = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  font-size: 42px;
  padding-left: 8px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary);
  }
`;


export const ContainerControllsStyled = styled.section<PlayerStyledProps>`
position: absolute;
 bottom: 0;  /* Ajuste a posição conforme necessário */
 left: 0;  /* Ajuste a posição conforme necessário */
  /* Ou use 'bottom' e 'left' dependendo da sua preferência */
 display: flex;
 width: 100%;
 align-items: center;
 justify-content: space-around;
 padding: 2px 24px;
 gap:6px;

  /* Ajuste as cores e opacidades conforme necessário */
`;
export const PosterStyled = styled.section<PosterStyledProps>`
  position: relative;
  background: url(${props => props.poster}) center/cover;
  width: 100%;
  height: 100%;
  img{
    width: 100%;
  }
`;
export const PlayerStyled = styled.video<PlayerStyledProps>`
 
`;

export const Play = styled.button<PlayerStyledProps>`
   font-size: 24px;
   border: none;
   cursor: pointer;
    transition: color 0.3s ease;
  &:hover {
    color: var(--secondary);
  }
`;
export const Range = styled.div`
   display: flex;
   align-items: center;
   gap: 4px;
   width: 55%;
   padding-bottom: 2px;
    
    progress{
        cursor: pointer;
    }
   p{
    font-size: 12px;
    font-weight: 800;
    white-space: nowrap;
   }
    transition: color 0.3s ease;
 
`;
export const Volume = styled.div<PlayerStyledProps>`
   margin-left: 12px;
   display: flex;
   align-items: center;
 
   font-size: 42px;
   width: 100px;
   gap: 4px;
   progress{
    
    transition: color 0.3s ease;
    &:hover {
    color: var(--secondary);
  }
   }
   padding-bottom: 2px;


`;

export const Fullscreen = styled.div<PlayerStyledProps>`
  font-size: 22px;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: var(--secondary);
  }
  padding-bottom: 4px;

`;
