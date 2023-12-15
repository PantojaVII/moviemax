import { useEffect, useState } from "react";
import { ModelThreeStyled } from "./ModelThreeStyled";
interface CardModelThreeProps {
    /* Ou recebe um ou outro, nunca os dois pois ficará na tela como destaque o que receber */
    title?: string
    logo?: string;
    width?: string
    height?: string
    backgroundColor?: string
    onClick: () => void;
}
export default function CardModelThree({
    title,
    logo,
    width,
    height,
    backgroundColor,
    onClick
}: CardModelThreeProps) {
    const [card, setCard] = useState<string | null>(null)

    useEffect(() => {
        // Dependências movie e serie adicionadas
        if (title) {
            setCard(title)
        } else if (logo) {
            setCard(`<img src=${logo} alt="" />`)
        }
    }, []);

    return (
        <ModelThreeStyled
            onClick={onClick}
            $width={width}
            $height={height}
            $backgroundColor={backgroundColor}
        >
            {card}
        </ModelThreeStyled>
    )

}