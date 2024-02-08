import React, { useRef } from "react"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { PointLight } from "@react-three/fiber"
import { useControls } from "leva"

import PlanetSpace from "../../assets/images/planet_space.png"
import "./planet.scss"

const Sphere = ({ icons }) => {
  const planetRef = useRef()
  const texture = useLoader(TextureLoader, PlanetSpace)

  useFrame(() => {
    planetRef.current.rotation.y += 0.004
  })

  return (
    <>
      <ambientLight intensity={2} color={"0xffffff"} />
      <pointLight
        // distance={distance}
        decay={2}
        color={"#0xffffff"}
        intensity={2}
        position={[0, 2, 2]}
      />
      <directionalLight intensity={2} />

      <mesh ref={planetRef} renderOrder={-1}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.5}
          roughness={0.6}
          // alphMap={"0xffffff"}
          // emmissiveMap={"#0xffffff"}
        />
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
        {/* <pointLight intensity={intensity} /> */}
        <ambientLight args={[0.5]} />
        <pointLight args={[0xffffff, 0.5]} position={[2, 3, 4]} />
        <directionalLight position={[0, 1, 10]} />
        <Sphere />
        <OrbitControls />
        {/* <axesHelper args={[5]} />
        <gridHelper /> */}
      </Canvas>
    </>
  )
}

export default PlanetSphere
