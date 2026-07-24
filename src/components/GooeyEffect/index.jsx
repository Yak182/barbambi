import { useEffect, useRef } from 'react'
import Scene from './Scene'

export default function GooeyEffect({
									   src,
									   hoverSrc,
									   className,
									   children,
									   childrenClassName,
									   overlay,
									   overlayClassName = "absolute inset-0"
								   }) {
	const imageRef = useRef(null)
	const containerRef = useRef(null)
	const sceneRef = useRef(null)

	useEffect(() => {
		const initScene = () => {
			if (!sceneRef.current && imageRef.current) {
				sceneRef.current = new Scene(imageRef.current, containerRef.current)
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
				} else {
					sceneRef.current?.destroy()
					sceneRef.current = null
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
	}, [])

	return (
		<div ref={containerRef} className={`relative ${className}`}>
			<img
				ref={imageRef}
				src={src}
				data-hover={hoverSrc}
				crossOrigin="anonymous"
				className="absolute inset-0 w-full h-full opacity-0 object-contain"
				alt={""}
			/>
			{children && (
				<div className={`relative z-50 ${childrenClassName}`}>
					{children}
				</div>
			)}
		</div>
	)
}