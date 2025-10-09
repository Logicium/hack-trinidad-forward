<template>
  <canvas ref="canvasRef" class="three-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// Canvas reference
const canvasRef = ref<HTMLCanvasElement>()

// Three.js variables
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let model: THREE.Object3D
let animationId: number

// Mouse tracking for interaction
const mouse = { x: 0, y: 0 }
const targetRotation = { x: 0, y: 0 }
const currentRotation = { x: 0, y: 0 }

// Gyroscope/device orientation tracking
const deviceOrientation = { alpha: 0, beta: 0, gamma: 0 }
const gyroTargetRotation = { x: 0, y: 0 }
const isMobile = ref(false)
const gyroPermissionGranted = ref(false)

// Detect if device is mobile
const detectMobile = () => {
  // Check for specific mobile user agents, excluding Windows tablets/2-in-1s
  const userAgent = navigator.userAgent.toLowerCase()
  
  // Exclude Windows devices (including Surface, 2-in-1s, etc.)
  if (userAgent.includes('windows')) {
    return false
  }
  
  // Check for actual mobile devices
  const mobilePatterns = [
    /android/i,
    /webos/i,
    /iphone/i,
    /ipad/i,
    /ipod/i,
    /blackberry/i,
    /iemobile/i,
    /opera mini/i,
    /mobile/i
  ]
  
  return mobilePatterns.some(pattern => pattern.test(userAgent))
}

// Linear interpolation function for smooth rotation
const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor
}

// Initialize Three.js scene
const initThree = () => {
  if (!canvasRef.value) return

  // Get container dimensions
  const container = canvasRef.value.parentElement
  const width = container ? container.clientWidth : window.innerWidth
  const height = container ? container.clientHeight : window.innerHeight
  
  console.log('Container dimensions:', width, 'x', height)

  // Create scene
  scene = new THREE.Scene()

  // Create camera
  camera = new THREE.PerspectiveCamera(
    70, // Increased FOV for wider view
    width / height,
    0.1,
    1000
  )
  camera.position.set(0, 0.5, 2.5) // Much closer to the model
  camera.lookAt(0, 0, 0)

  console.log('Camera initialized:', camera.position)

  // Create renderer with transparent background
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  })
  
  // Set size and pixel ratio for crisp rendering
  const pixelRatio = Math.min(window.devicePixelRatio, 2) // Cap at 2 for performance
  renderer.setSize(width, height)
  renderer.setPixelRatio(pixelRatio)
  renderer.setClearColor(0x000000, 0) // Transparent background
  
  console.log('Renderer initialized with size:', width, 'x', height, 'pixelRatio:', pixelRatio)

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(10, 10, 5)
  scene.add(directionalLight)

  console.log('Scene and lighting initialized')

  // Load GLTF model
  loadModel()

  // Start animation loop
  animate()
}

// Load and process the 3D model
const loadModel = () => {
  const loader = new GLTFLoader()
  
  loader.load(
    '/fishers-peak-3d.glb',
    (gltf) => {
      console.log('Model loaded successfully:', gltf)
      model = gltf.scene
      
      // Log model information
      console.log('Model children count:', model.children.length)
      console.log('Model:', model)
      
      // Process the model materials and geometry
      model.traverse((child) => {
        console.log('Traversing child:', child.type, child)
        if (child instanceof THREE.Mesh) {
          console.log('Found mesh:', child.name, child.geometry, child.material)
          
          // Ensure the mesh has a proper material
          if (!child.material) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x888888,
              roughness: 0.7,
              metalness: 0.3
            })
          }
          
          // Try to process geometry colors, but don't fail if it doesn't work
          if (child.geometry) {
            try {
              processGeometryColors(child.geometry)
              // Update material to use vertex colors only if processing succeeded
              child.material = new THREE.MeshStandardMaterial({
                vertexColors: true,
                roughness: 0.7,
                metalness: 0.3
              })
              console.log('Applied vertex colors to:', child.name)
            } catch (error) {
              console.warn('Failed to process vertex colors for:', child.name, error)
              // Fallback to a simple material with sage green theme color
              child.material = new THREE.MeshStandardMaterial({
                color: 0x8fbc8f, // Sage green theme color
                roughness: 0.7,
                metalness: 0.3
              })
            }
          }
        }
      })

      // Calculate bounding box and center the model
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      
      console.log('Model bounding box:', { center, size })
      
      // Center the model
      model.position.x = -center.x
      model.position.y = -center.y
      model.position.z = -center.z
      
      // Scale the model to fill most of the viewport
      const maxDim = Math.max(size.x, size.y, size.z)
      console.log('Max dimension:', maxDim)
      
      if (maxDim > 0) {
        // Make it even bigger - scale to fill most of the container
        const scale = 30 / maxDim // Increased from 25 to 40 for larger mountain
        model.scale.setScalar(scale)
        console.log('Applied scale:', scale)
      }

      // Set initial rotation: keep your Z-rotation tilt, remove the Y rotation
      model.rotation.y = 0  // Back to original (no 45-degree rotation)
      model.rotation.z = Math.PI / 12 // Keep your desired tilt angle

      // Add the model to the scene
      scene.add(model)
      console.log('Model added to scene. Scene children:', scene.children.length)
      
      // Position camera to look at the model center
      camera.lookAt(model.position)
    },
    (progress) => {
      const percentComplete = (progress.loaded / progress.total * 100)
      console.log('Loading progress:', percentComplete + '%')
    },
    (error) => {
      console.error('Error loading model:', error)
      
      // Fallback: create a simple geometric mountain if model fails to load
      createFallbackMountain()
    }
  )
}

// Create a fallback mountain geometry if the GLTF fails to load
const createFallbackMountain = () => {
  console.log('Creating fallback mountain geometry')
  
  // Create a much larger cone geometry as a mountain
  const geometry = new THREE.ConeGeometry(8, 10, 8) // Even larger fallback
  const material = new THREE.MeshStandardMaterial({
    color: 0x8fbc8f, // Sage green theme color
    roughness: 0.8,
    metalness: 0.2
  })
  
  model = new THREE.Mesh(geometry, material)
  model.position.set(0, -2, 0) // Lower it more
  
  // Set initial rotation for fallback mountain too
  model.rotation.y = 0  // Back to original (no 45-degree rotation)
  model.rotation.z = Math.PI / 8 // Keep your desired tilt angle
  
  scene.add(model)
  console.log('Fallback mountain created and added to scene')
}

// Process geometry to add height-based vertex colors
const processGeometryColors = (geometry: THREE.BufferGeometry) => {
  const positionAttribute = geometry.getAttribute('position')
  if (!positionAttribute) {
    console.warn('No position attribute found in geometry')
    return
  }

  console.log('Processing geometry colors for', positionAttribute.count, 'vertices')

  // Calculate bounding box to get min/max heights
  geometry.computeBoundingBox()
  const boundingBox = geometry.boundingBox
  if (!boundingBox) {
    console.warn('Could not compute bounding box')
    return
  }
  
  const minY = boundingBox.min.y
  const maxY = boundingBox.max.y
  const heightRange = maxY - minY

  console.log('Height range:', { minY, maxY, heightRange })

  if (heightRange === 0) {
    console.warn('Height range is zero, cannot create gradient')
    return
  }

  // Create colors array
  const colors = new Float32Array(positionAttribute.count * 3)

  // Define dynamic gradient colors with depth - cream, golden, teal, sage green
  const baseColor = new THREE.Color(0x2d3d2d)     // Deep sage/forest base
  const lowColor = new THREE.Color(0x4a6741)      // Sage green
  const midLowColor = new THREE.Color(0x6b8e23)   // Olive/sage green
  const midColor = new THREE.Color(0x8fbc8f)      // Light sage green
  const midHighColor = new THREE.Color(0x20b2aa)  // Teal accent
  const highColor = new THREE.Color(0xdaa520)     // Golden rod
  const peakColor = new THREE.Color(0xf5f5dc)     // Cream/beige peak

  // Assign colors based on height with more dynamic transitions
  for (let i = 0; i < positionAttribute.count; i++) {
    const y = positionAttribute.getY(i)
    const normalizedHeight = (y - minY) / heightRange
    
    // Clamp normalized height between 0 and 1
    const clampedHeight = Math.max(0, Math.min(1, normalizedHeight))
    
    // Create complex multi-layer gradient for depth
    let color: THREE.Color
    if (clampedHeight < 0.15) {
      // Deep base: dark sage to sage green
      const t = clampedHeight / 0.15
      color = baseColor.clone().lerp(lowColor, t)
    } else if (clampedHeight < 0.35) {
      // Lower slopes: sage to olive green
      const t = (clampedHeight - 0.15) / 0.2
      color = lowColor.clone().lerp(midLowColor, t)
    } else if (clampedHeight < 0.55) {
      // Mid slopes: olive to light sage
      const t = (clampedHeight - 0.35) / 0.2
      color = midLowColor.clone().lerp(midColor, t)
    } else if (clampedHeight < 0.75) {
      // Upper slopes: light sage with teal accents
      const t = (clampedHeight - 0.55) / 0.2
      color = midColor.clone().lerp(midHighColor, t)
    } else if (clampedHeight < 0.9) {
      // High elevation: teal to golden
      const t = (clampedHeight - 0.75) / 0.15
      color = midHighColor.clone().lerp(highColor, t)
    } else {
      // Peak: golden to cream
      const t = (clampedHeight - 0.9) / 0.1
      color = highColor.clone().lerp(peakColor, t)
    }
    
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  // Add color attribute to geometry
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  console.log('Vertex colors applied successfully')
}

// Handle mouse movement for interactive rotation
const handleMouseMove = (event: MouseEvent) => {
  // Only use mouse on non-mobile devices
  if (isMobile.value) return
  
  // Normalize mouse position to -1 to 1 range
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  // Set target rotation based on mouse position
  // Mouse Y controls Z rotation for front-to-back tilt
  targetRotation.y = mouse.x * 0.3  // Keep X mouse controlling Y rotation (left-right)
  targetRotation.x = mouse.y * 0.2  // Mouse Y controls Z rotation via targetRotation.x
}

// Handle device orientation for mobile gyroscope
const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
  if (!isMobile.value || !gyroPermissionGranted.value) return
  
  // Get orientation values
  const alpha = event.alpha || 0  // Z axis (0-360)
  const beta = event.beta || 0    // X axis (-180 to 180)
  const gamma = event.gamma || 0  // Y axis (-90 to 90)
  
  // Store raw values
  deviceOrientation.alpha = alpha
  deviceOrientation.beta = beta
  deviceOrientation.gamma = gamma
  
  // Convert to rotation values for the mountain
  // Gamma (left-right tilt) controls Y rotation
  // Beta (front-back tilt) controls Z rotation
  
  // Normalize gamma (-90 to 90) to rotation range
  gyroTargetRotation.y = (gamma / 90) * 0.4  // Left-right rotation
  
  // Normalize beta, but offset to make neutral position feel natural
  // Beta of 0-30 degrees should be the neutral zone
  const adjustedBeta = beta - 15  // Offset so 15 degrees is neutral
  gyroTargetRotation.x = Math.max(-0.3, Math.min(0.3, (adjustedBeta / 45) * 0.3))  // Front-back tilt
  
  console.log('Gyro data:', { alpha, beta, gamma, targetY: gyroTargetRotation.y, targetX: gyroTargetRotation.x })
}

// Request permission for device orientation on iOS 13+
const requestGyroscopePermission = async () => {
  if (!isMobile.value) return true
  
  try {
    // Check if DeviceOrientationEvent.requestPermission exists (iOS 13+)
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      const permission = await (DeviceOrientationEvent as any).requestPermission()
      if (permission === 'granted') {
        gyroPermissionGranted.value = true
        console.log('Gyroscope permission granted')
        return true
      } else {
        console.log('Gyroscope permission denied')
        return false
      }
    } else {
      // For Android and older iOS, assume permission is granted
      gyroPermissionGranted.value = true
      console.log('Gyroscope available (no permission required)')
      return true
    }
  } catch (error) {
    console.error('Error requesting gyroscope permission:', error)
    return false
  }
}

// Initialize gyroscope if available
const initGyroscope = async () => {
  if (!isMobile.value) {
    console.log('Not a mobile device, skipping gyroscope init')
    return
  }
  
  const hasPermission = await requestGyroscopePermission()
  
  if (hasPermission) {
    window.addEventListener('deviceorientation', handleDeviceOrientation, true)
    console.log('Gyroscope event listener added')
    
    // Show a brief instruction to mobile users
    const instruction = document.createElement('div')
    instruction.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(74, 222, 128, 0.9);
      color: #0a0f0a;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      z-index: 1000;
      pointer-events: none;
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
    `
    instruction.textContent = 'Tilt your device to explore the mountain!'
    document.body.appendChild(instruction)
    
    // Remove instruction after 4 seconds
    setTimeout(() => {
      document.body.removeChild(instruction)
    }, 4000)
  }
}

// Handle window resize
const handleResize = () => {
  if (!camera || !renderer || !canvasRef.value) return

  // Get container dimensions
  const container = canvasRef.value.parentElement
  const width = container ? container.clientWidth : window.innerWidth
  const height = container ? container.clientHeight : window.innerHeight
  
  // Update camera aspect ratio
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  
  // Update renderer size
  const pixelRatio = Math.min(window.devicePixelRatio, 2)
  renderer.setSize(width, height)
  renderer.setPixelRatio(pixelRatio)
  
  console.log('Resized to:', width, 'x', height, 'pixelRatio:', pixelRatio)
}

// Animation loop
const animate = () => {
  animationId = requestAnimationFrame(animate)

  if (model) {
    // Choose rotation source based on device type
    let activeTargetRotation = targetRotation
    
    if (isMobile.value && gyroPermissionGranted.value) {
      // Use gyroscope data on mobile
      activeTargetRotation = gyroTargetRotation
    }
    
    // Smooth rotation interpolation
    currentRotation.x = lerp(currentRotation.x, activeTargetRotation.x, 0.05)
    currentRotation.y = lerp(currentRotation.y, activeTargetRotation.y, 0.05)
    
    // Apply rotations - gyroscope/mouse Y controls Z rotation for front-to-back tilt
    model.rotation.x = 0 // No X rotation
    model.rotation.y = currentRotation.y // Gyroscope/mouse X controls Y rotation (left-right)
    model.rotation.z = Math.PI / 8 + currentRotation.x // Base tilt + gyroscope/mouse Y controls Z rotation (front-to-back)
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

// Component lifecycle
onMounted(() => {
  console.log('ThreeCanvas component mounted')
  
  // Detect mobile device
  isMobile.value = detectMobile()
  console.log('Mobile device detected:', isMobile.value)
  
  initThree()
  
  // Add event listeners
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
  
  // Initialize gyroscope for mobile devices
  if (isMobile.value) {
    initGyroscope()
  }
  
  console.log('Event listeners added')
})

onUnmounted(() => {
  // Clean up
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
  
  // Remove gyroscope listener
  if (isMobile.value) {
    window.removeEventListener('deviceorientation', handleDeviceOrientation, true)
  }
  
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<style scoped>
.three-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>