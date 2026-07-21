import * as THREE from 'three'
import Figure from './Figure'

export default class Scene {
	constructor(element) {
		this.element = element

		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
		this.renderer.setPixelRatio(window.devicePixelRatio)

		document.body.appendChild(this.renderer.domElement)

		this.renderer.domElement.style.position = 'fixed'
		this.renderer.domElement.style.top = 0
		this.renderer.domElement.style.left = 0
		this.renderer.domElement.style.width = '100vw'
		this.renderer.domElement.style.height = '100vh'
		this.renderer.domElement.style.zIndex = 10
		this.renderer.domElement.style.pointerEvents = 'none'

		this.scene = new THREE.Scene()

		this.camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			0.001,
			1000
		)
		this.camera.position.z = 600

		this.renderer.setSize(window.innerWidth, window.innerHeight)

		this.figure = new Figure(this.scene, this.camera, this.element)

		this.animate()
		window.addEventListener('resize', this.onResize.bind(this))
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this))
		this.renderer.render(this.scene, this.camera)
	}

	onResize() {
		this.renderer.setSize(window.innerWidth, window.innerHeight)
		this.camera.aspect = window.innerWidth / window.innerHeight
		this.camera.updateProjectionMatrix()
	}

	destroy() {
		this.renderer.domElement.remove()
		window.removeEventListener('resize', this.onResize.bind(this))
	}
}