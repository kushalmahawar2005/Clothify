import { useRef } from 'react';

export default function Video({ src }) {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
    };

    return (
        <div className="mt-10 ml-10">
            <div
                className="h-[350px] w-[190px] border overflow-hidden border-none "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
