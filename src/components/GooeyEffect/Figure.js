import * as THREE from 'three'
import { gsap } from 'gsap'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

export default class Figure {
	constructor(scene, camera, element, hoverEl) {
		this.scene = scene
		this.camera = camera
		this.element = element
		this.hoverEl = hoverEl || null
		this.isHoverVideo = this.hoverEl instanceof HTMLVideoElement

		this.loader = new THREE.TextureLoader()
		this.loader.setCrossOrigin('anonymous')
		this.texture = this.loader.load(this.element.src)

		if (this.hoverEl) {
			if (this.isHoverVideo) {
				this.hoverTexture = new THREE.VideoTexture(this.hoverEl)
				this.hoverTexture.minFilter = THREE.LinearFilter
				this.hoverTexture.magFilter = THREE.LinearFilter
				this.hoverTexture.generateMipmaps = false
			} else {
				this.hoverTexture = this.loader.load(this.hoverEl.src)
				this.hoverTexture.minFilter = THREE.LinearFilter
				this.hoverTexture.magFilter = THREE.LinearFilter
				this.hoverTexture.generateMipmaps = false
			}
		} else {
			this.hoverTexture = this.texture // dummy binding, unused by shader when uHasHoverTexture is false
		}

		this.smoothMouse = { x: 0, y: 0 }
		this.hoverStrength = 0
		this.circleSharpness = 2
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
		const containerRect = this.element.parentElement.getBoundingClientRect()
		const { heightInUnits } = this.getViewportDimensions()
		const pixelToUnit = heightInUnits / containerRect.height

		const planeWidth = rect.width * pixelToUnit
		const planeHeight = rect.height * pixelToUnit

		this.sizeFactor = Math.max(rect.width, rect.height) / 300
		this.circleSharpness = 2 * this.sizeFactor

		const x = (rect.left - containerRect.left + rect.width / 2 - containerRect.width / 2) * pixelToUnit
		const y = -(rect.top - containerRect.top + rect.height / 2 - containerRect.height / 2) * pixelToUnit

		this.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, 32, 32)

		this.material = new THREE.ShaderMaterial({
			uniforms: {
				uTexture: { value: this.texture },
				uHoverTexture: { value: this.hoverTexture },
				uHasHoverTexture: { value: !!this.hoverEl },
				uMouse: { value: new THREE.Vector2(0.5, 0.5) },
				uHoverStrength: { value: 0 },
				uCircleSharpness: { value: this.circleSharpness },
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
		this.material.uniforms.uCircleSharpness.value = this.circleSharpness
	}

	addMouseListeners() {
		this.element.parentElement.addEventListener('mouseenter', this.onMouseEnter.bind(this))
		this.element.parentElement.addEventListener('mousemove', this.onMouseMove.bind(this))
		this.element.parentElement.addEventListener('mouseleave', this.onMouseLeave.bind(this))
	}

	onMouseEnter() {
		if (this.isHoverVideo) {
			this.hoverEl?.play().catch(() => {})
		}
		gsap.killTweensOf(this)
		gsap.to(this, { hoverStrength: 1, circleSharpness: 1 * this.sizeFactor, duration: 0.5, ease: 'power2.out' })
	}

	onMouseLeave() {
		if (this.isHoverVideo) {
			this.hoverEl?.pause()
		}
		gsap.killTweensOf(this)
		gsap.to(this, { hoverStrength: 0, circleSharpness: 1 * this.sizeFactor, duration: 0.5, ease: 'power2.out' })
	}

	onMouseMove(e) {
		gsap.killTweensOf(this.smoothMouse)
		const containerRect = this.element.parentElement.getBoundingClientRect()
		const x = (e.clientX - containerRect.left) / containerRect.width
		const y = (e.clientY - containerRect.top) / containerRect.height
		gsap.to(this.smoothMouse, { x, y, duration: 0.5, ease: 'power2.out' })
	}
}