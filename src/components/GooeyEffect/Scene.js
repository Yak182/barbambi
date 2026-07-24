import * as THREE from 'three'
import Figure from './Figure'

export default class Scene {
	constructor(element, container) {
		this.element = element
		this.container = container

		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
		this.renderer.setPixelRatio(window.devicePixelRatio)

		this.container.appendChild(this.renderer.domElement)

		this.renderer.domElement.style.position = 'absolute'
		this.renderer.domElement.style.top = 0
		this.renderer.domElement.style.left = 0
		this.renderer.domElement.style.width = '100%'
		this.renderer.domElement.style.height = '100%'
		this.renderer.domElement.style.zIndex = 10
		this.renderer.domElement.style.pointerEvents = 'none'

		this.scene = new THREE.Scene()

		this.camera = new THREE.PerspectiveCamera(
			70,
			this.container.offsetWidth / this.container.offsetHeight,
			0.001,
			1000
		)
		this.camera.position.z = 600

		this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)

		this.figure = new Figure(this.scene, this.camera, this.element)

		this.animate()
		window.addEventListener('resize', this.onResize.bind(this))
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this))
		this.renderer.render(this.scene, this.camera)
	}

	onResize() {
		this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
		this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight
		this.camera.updateProjectionMatrix()
	}

	destroy() {
		this.renderer.domElement.remove()
		window.removeEventListener('resize', this.onResize.bind(this))
	}
}