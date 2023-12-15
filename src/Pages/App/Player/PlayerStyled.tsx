import { styled } from "styled-components";

interface InfoMoviePlayerProps {
    $backgroundColor?: string;
}

export const Season = styled.section`
margin-top: 24px;
`

export const InfoMoviePlayer = styled.section<InfoMoviePlayerProps>`
display: flex;
flex-direction: column;
gap: 16px;
margin-top: 36px;
padding: 0 12px;
.genres{
    display: flex;
    gap: 8px;
}
.Title-synopsis{
    font-size: 24px;
    font-weight: 600;
}
.synopsis{
    text-align: justify;
}
`;

export const MoviePlayerTitleOptions = styled.section`
 margin-top: 24px;
 display: flex;
 width: 100%;
 justify-content: space-between;
 align-items: center;
`;
export const MoviePlayerTitle = styled.section`
 font-size: 24px;
 font-weight: bold;

`;
export const MoviePlayerOptions = styled.section`
 display: flex;
 min-width:240px;
 justify-items: center;
 justify-content: space-around;
 gap: 8px;
 
`;


