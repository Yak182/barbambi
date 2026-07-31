import { useEffect, useRef, useMemo } from 'react'
import Scene from './Scene'

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.ogg', '.ogv']

export default function GooeyEffect({
										src,
										hoverSrc,
										isHoverVideo,
										className,
										children,
										childrenClassName,
										style,
									}) {
	const imageRef = useRef(null)
	const hoverImageRef = useRef(null)
	const hoverVideoRef = useRef(null)
	const containerRef = useRef(null)
	const sceneRef = useRef(null)

	const hoverIsVideo = useMemo(() => {
		if (typeof isHoverVideo === 'boolean') return isHoverVideo
		if (!hoverSrc) return false
		const clean = hoverSrc.split('?')[0].toLowerCase()
		return VIDEO_EXTENSIONS.some(ext => clean.endsWith(ext))
	}, [hoverSrc, isHoverVideo])

	const hoverRef = hoverIsVideo ? hoverVideoRef : hoverImageRef

	useEffect(() => {
		const initScene = () => {
			if (!sceneRef.current && imageRef.current) {
				sceneRef.current = new Scene(imageRef.current, containerRef.current, hoverRef.current)
			}
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					if (imageRef.current && imageRef.current.complete) {
						initScene()
					} else if (imageRef.current) {
						imageRef.current.onload = initScene
					}
					if (hoverIsVideo) {
						hoverVideoRef.current?.load()
					}
				} else {
					sceneRef.current?.destroy()
					sceneRef.current = null
					if (hoverIsVideo) {
						hoverVideoRef.current?.pause()
					}
				}
			},
			{ threshold: 0.1 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			observer.disconnect()
			sceneRef.current?.destroy()
			sceneRef.current = null
		}
	}, [hoverIsVideo])

	return (
		<div ref={containerRef} className={`relative ${className}`} style={style}>
			<img
				ref={imageRef}
				src={src}
				crossOrigin="anonymous"
				className="absolute inset-0 w-full h-full opacity-0 object-center object-contain "
				alt={""}
			/>
			{hoverSrc && (
				hoverIsVideo ? (
					<video
						ref={hoverVideoRef}
						src={hoverSrc}
						crossOrigin="anonymous"
						muted
						loop
						playsInline
						preload="auto"
						className="absolute inset-0 w-full h-full opacity-0 object-center"
					/>
				) : (
					<img
						ref={hoverImageRef}
						src={hoverSrc}
						crossOrigin="anonymous"
						className="absolute inset-0 w-full h-full opacity-0 object-center object-contain"
						alt={""}
					/>
				)
			)}
			{children && (
				<div className={`relative z-50 ${childrenClassName}`}>
					{children}
				</div>
			)}
		</div>
	)
}