import React, { useRef } from "react"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"

import PlanetSpace from "../../assets/images/planet_space.png"

const Sphere = () => {
  const planetRef = useRef()
  const texture = useLoader(TextureLoader, PlanetSpace)

  useFrame(() => {
    planetRef.current.rotation.y += 0.002
  })

  return (
    <>
      <ambientLight intensity={2} color={"0xffffff"} />
      <pointLight
        decay={2}
        color={"#0xffffff"}
        intensity={2}
        position={[0, 2, 2]}
      />
      <directionalLight intensity={2} />

      <mesh ref={planetRef} renderOrder={-1}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.6} />
      </mesh>
    </>
  )
}

const PlanetSphere = () => {
  return (
    <>
      <Canvas
        linear
        flat
        camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 0, 6] }}
      >
        <ambientLight args={[0.5]} />
        <pointLight args={[0xffffff, 0.5]} position={[2, 3, 4]} />
        <directionalLight position={[0, 1, 10]} />
        <Sphere />
      </Canvas>
    </>
  )
}

export default PlanetSphere
