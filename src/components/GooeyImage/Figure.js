import * as THREE from 'three'
import { gsap } from 'gsap'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

export default class Figure {
	constructor(scene, camera, element) {
		this.scene = scene
		this.camera = camera
		this.element = element

		this.loader = new THREE.TextureLoader()
		this.loader.setCrossOrigin('anonymous')
		this.texture = this.loader.load(this.element.src)
		this.hoverTexture = this.loader.load(this.element.dataset.hover)

		this.smoothMouse = { x: 0, y: 0 }
		this.hoverStrength = 0
		this.startTime = Date.now()

		this.createMesh()
		this.addMouseListeners()
		this.animate()
	}

	getViewportDimensions() {
		const vFov = (this.camera.fov * Math.PI) / 180
		const heightInUnits = 2 * Math.tan(vFov / 2) * this.camera.position.z
		const widthInUnits = heightInUnits * this.camera.aspect
		return { widthInUnits, heightInUnits }
	}

	createMesh() {
		const rect = this.element.getBoundingClientRect()
		const { heightInUnits } = this.getViewportDimensions()
		const pixelToUnit = heightInUnits / window.innerHeight

		const planeWidth = rect.width * pixelToUnit
		const planeHeight = rect.height * pixelToUnit

		const x = (rect.left + rect.width / 2 - window.innerWidth / 2) * pixelToUnit
		const y = -(rect.top + rect.height / 2 - window.innerHeight / 2) * pixelToUnit

		this.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, 32, 32)

		this.material = new THREE.ShaderMaterial({
			uniforms: {
				uTexture: { value: this.texture },
				uHoverTexture: { value: this.hoverTexture },
				uMouse: { value: new THREE.Vector2(0.5, 0.5) },
				uHoverStrength: { value: 0 },
				uTime: { value: 0 },
				uResolution: { value: new THREE.Vector2(planeWidth, planeHeight) }
			},
			vertexShader,
			fragmentShader,
			transparent: true
		})

		this.mesh = new THREE.Mesh(this.geometry, this.material)
		this.mesh.position.set(x, y, 0)
		this.scene.add(this.mesh)
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this))

		this.material.uniforms.uTime.value = (Date.now() - this.startTime) / 1000
		this.material.uniforms.uMouse.value.set(this.smoothMouse.x, 1.0 - this.smoothMouse.y)
		this.material.uniforms.uHoverStrength.value = this.hoverStrength
	}

	addMouseListeners() {
		this.element.addEventListener('mouseenter', this.onMouseEnter.bind(this))
		this.element.addEventListener('mousemove', this.onMouseMove.bind(this))
		this.element.addEventListener('mouseleave', this.onMouseLeave.bind(this))
	}

	onMouseEnter() {
		gsap.killTweensOf(this)
		gsap.to(this, { hoverStrength: 1, duration: 0.5, ease: 'power2.out' })
	}

	onMouseLeave() {
		gsap.killTweensOf(this)
		gsap.to(this, { hoverStrength: 0, duration: 0.5, ease: 'power2.out' })
	}

	onMouseMove(e) {
		gsap.killTweensOf(this.smoothMouse)
		const rect = this.element.getBoundingClientRect()
		const x = (e.clientX - rect.left) / rect.width
		const y = (e.clientY - rect.top) / rect.height
		gsap.to(this.smoothMouse, { x, y, duration: 0.5, ease: 'power2.out' })
	}
}