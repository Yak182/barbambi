import { useEffect, useRef } from 'react'
import Scene from './Scene'

export default function GooeyImage({ src, hoverSrc }) {
	const imageRef = useRef(null)
	const sceneRef = useRef(null)

	useEffect(() => {
		if (imageRef.current.complete) {
			sceneRef.current = new Scene(imageRef.current)
		} else {
			imageRef.current.onload = () => {
				sceneRef.current = new Scene(imageRef.current)
			}
		}

		return () => sceneRef.current?.destroy()
	}, [])

	return (
		<div className="relative w-[400px] h-[600px]">
			<img
				ref={imageRef}
				src={src}
				data-hover={hoverSrc}
				crossOrigin="anonymous"
				className="w-full h-full object-cover opacity-0"
			 	alt={""}
			/>
		</div>
	)
}
