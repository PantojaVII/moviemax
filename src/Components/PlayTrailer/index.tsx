import Plyr, { APITypes } from "plyr-react";
import { useRef } from "react";
import styled from "styled-components";

interface PlayTrailerProps {
    url: string;
}

const PlyrContainer = styled.div`
    width: 100%; /* Ajuste a largura conforme necessário */
    height: 100%; /* Ajuste a altura conforme necessário */
    overflow: hidden;
`;

export default function PlayTrailer({ url }: PlayTrailerProps) {
    const ref = useRef<APITypes>(null);

    const videoOptions = {
        controls: [''],
        autoplay: true,
        loop: { active: false },
        volume: 0.4,
    };

    return (
        <PlyrContainer>
            <Plyr
                ref={ref}
                options={videoOptions}
                source={{
                    type: "video",
                    sources: [
                        {
                            src: url,
                            provider: "youtube"
                        }
                    ]
                }}
            />
        </PlyrContainer>
    );
}
