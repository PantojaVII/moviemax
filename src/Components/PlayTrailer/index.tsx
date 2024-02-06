import Plyr, { APITypes } from "plyr-react";
import { useRef } from "react";
import PlayTrailerStyled from "./PlayTrailer";
interface PlayTrailerProps {
    url: string
}
export default function PlayTrailer({ url }: PlayTrailerProps) {

    const ref = useRef<APITypes>(null);

    const videoOptions = {
        controls: [''],
        autoplay: true,
        loop: { active: false },
        volume: 0.4,
    };
    const plyrVideo = url ? (
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
    ) : null;
    return (
        plyrVideo
/*         <PlayTrailerStyled
            src={`${url}modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
            
        /> */
    );
}
