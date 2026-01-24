import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Cube({ initialPosition, mousePos }) {
  const meshRef = useRef()
  const velocity = useRef(new THREE.Vector3(0, 0, 0))
  const originalPos = useRef(new THREE.Vector3(...initialPosition))
  const floatOffset = useRef(Math.random() * Math.PI * 2)
  const rotationSpeed = useRef({
    x: 0.003 + Math.random() * 0.005,
    y: 0.004 + Math.random() * 0.006
  })
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.elapsedTime
    
    // 1. FLOATING
    const floatY = Math.sin(time * 0.8 + floatOffset.current) * 0.4
    
    // 2. ROTATION
    meshRef.current.rotation.x += rotationSpeed.current.x
    meshRef.current.rotation.y += rotationSpeed.current.y
    
    // 3. MOUSE REPULSION
    const mouseX = mousePos.x * 12
    const mouseY = mousePos.y * 8
    
    const dx = meshRef.current.position.x - mouseX
    const dy = meshRef.current.position.y - mouseY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    const repulsionRadius = 5
    if (distance < repulsionRadius && distance > 0) {
      const force = ((repulsionRadius - distance) / repulsionRadius) * 0.8
      velocity.current.x += (dx / distance) * force
      velocity.current.y += (dy / distance) * force
    }
    
    // 4. RETURN TO ORIGINAL
    velocity.current.x += (originalPos.current.x - meshRef.current.position.x) * 0.015
    velocity.current.y += (originalPos.current.y + floatY - meshRef.current.position.y) * 0.015
    velocity.current.z += (originalPos.current.z - meshRef.current.position.z) * 0.015
    
    // 5. FRICTION
    velocity.current.multiplyScalar(0.94)
    
    // 6. APPLY
    meshRef.current.position.x += velocity.current.x
    meshRef.current.position.y += velocity.current.y
    meshRef.current.position.z += velocity.current.z
  })
  
  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[0.35, 0.35, 0.35]} />
      <meshStandardMaterial 
        color="#0052FF"
        transparent 
        opacity={0.85}
        roughness={0.2}
        metalness={0.7}
      />
    </mesh>
  )
}

function Scene({ mousePos }) {
  const cubes = useMemo(() => {
    const temp = []
    // 12 cubes à GAUCHE
    for (let i = 0; i < 12; i++) {
      const x = -(3 + Math.random() * 5)
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 6 - 2
      temp.push([x, y, z])
    }
    // 12 cubes à DROITE
    for (let i = 0; i < 12; i++) {
      const x = 3 + Math.random() * 5
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 6 - 2
      temp.push([x, y, z])
    }
    return temp
  }, [])
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#0052FF" />
      {cubes.map((pos, i) => (
        <Cube key={i} initialPosition={pos} mousePos={mousePos} />
      ))}
    </>
  )
}

export default function FloatingCubes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene mousePos={mousePos} />
      </Canvas>
    </div>
  )
}

