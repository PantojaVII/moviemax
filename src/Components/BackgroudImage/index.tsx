import { ReactNode } from "react";
import BackgroudImageStyled from "./BackgroudImageStyled";

interface BackgroudImageProps {
    backgroundImg: string;
    children: ReactNode;
    className?: string;
}

export default function BackgroudImage({ backgroundImg, children, className }: BackgroudImageProps) {
    return (
        <BackgroudImageStyled
            $backgroundImg={backgroundImg}
            className={className}
        >
            {children}
        </BackgroudImageStyled>
    );
}
