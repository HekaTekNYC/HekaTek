import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useCubeTexture } from "@react-three/drei"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import firebaseIcon from "../../assets/icons_png/test3.png"

import { useControls } from "leva"
import "./tech-services.scss"

const icons = [
  { src: firebaseIcon, orbitalOffset: 4 },
  { src: firebaseIcon, orbitalOffset: 1 },
  { src: firebaseIcon, orbitalOffset: 2 },
  // { src: "path/to/another/icon.png", orbitalOffset: 0.5 },
  // Add more icons as needed
]

const TechStack = ({
  position,
  color,
  intensity,
  orbitalOffset = 0,
  orbitalSpeed = 0.1,
  iconSrc,
}) => {
  const techRef = useRef()
  const texture = useLoader(TextureLoader, iconSrc) // Load the texture dynamically

  const fuckinTexture = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "assets/textures/" }
  )
  useFrame(() => {
    let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset
    techRef.current.position.set(
      Math.cos(date) * 2 + position[0], //X
      Math.sin(date) * 1 + position[0], //Y
      Math.sin(date) * 3 + position[0] //Z
    )
  })

  return (
    <>
      {/* <ambientLight args={["ebebeb", 0.2]} /> */}
      <mesh ref={techRef} position={[1, 2, 2]}>
        <sphereGeometry args={[0.2, 64, 64]} />
        {/* <meshBasicMaterial /> */}
        <meshBasicMaterial envMap={fuckinTexture} />
      </mesh>
    </>
  )
}

const Planet = () => {
  const planetRef = useRef()
  const texture = useLoader(
    TextureLoader,
    "https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg"
  )
  useFrame(() => {
    planetRef.current.rotation.y += 0.01
  })
  return (
    <>
      {/* <pointLight position={[-10, -10, -10]} /> */}

      <mesh ref={planetRef}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshPhysicalMaterial map={texture} />
      </mesh>
    </>
  )
}

const TechServices = () => {
  return (
    <>
      <Canvas>
        {/* <ambientLight args={["ffffff", 1]} /> */}
        <ambientLight args={[0xffffff, 0.5]} />
        <pointLight args={[0xffffff, 0.5]} position={[2, 3, 4]} />
        <directionalLight position={[6, 0, 2]} intensity={1.5} />
        <Planet />
        {icons.map((icon, index) => (
          <TechStack
            key={index}
            position={[0, 0, 0]}
            orbitalSpeed={0.5}
            iconSrc={icon.src}
            orbitalOffset={icon.orbitalOffset}
          />
        ))}
        {/* <TechStack
          position={[0, 0, -2]}
          orbitalSpeed={0.5}
          mappingTexture={fBtexture}
        /> */}
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
      </Canvas>
    </>
  )
}

export default TechServices
