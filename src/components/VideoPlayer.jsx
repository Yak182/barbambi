import { twMerge } from "tailwind-merge";

const VideoPlayer = ({
						 src,
						 sources,
						 type = "video/mp4",
						 poster,
						 
						 className = "",
						 frameClassName = "",
						 videoClassName = "",
						 
						 controls = false,
						 autoPlay = false,
						 loop = false,
						 muted = true,
						 playsInline = true,
						 preload = "auto",
						 
						 ...rest
					 }) => {
	const list = sources ?? (src ? [{ src, type }] : []);
	
	return (
		<div className={twMerge("flex justify-center w-full my-10 px-4", className)}>
			<div
				className={twMerge(
					"w-full max-w-4xl h-full aspect-video bg-black/10 rounded-lg overflow-hidden flex items-center justify-center border border-bar-bambi-gold/30",
					frameClassName
				)}
			>
				<video
					className={twMerge("w-full h-full object-cover", videoClassName)}
					poster={poster}
					controls={controls}
					autoPlay={autoPlay}
					loop={loop}
					muted={muted}
					playsInline={playsInline}
					preload={preload}
					{...rest}
				>
					{list.map((s) => (
						<source key={s.src + s.type} src={s.src} type={s.type} />
					))}
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
};

export default VideoPlayer;