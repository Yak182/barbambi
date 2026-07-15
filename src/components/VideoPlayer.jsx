const VideoPlayer = ({ src, className = "" }) => {
    return (
        <div className={`flex justify-center w-full my-10 px-4 ${className}`}>
            <div className={"w-full max-w-4xl aspect-video bg-black/10 rounded-lg overflow-hidden flex items-center justify-center border border-bar-bambi-gold/30"}>
                <video 
                    className={"w-full h-full object-cover"}
                    controls 
                    playsInline
                    muted
                    preload="auto"
                >
                    <source src={src} type="video/mp4" />
                    <source src={src} type="video/quicktime" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoPlayer;
