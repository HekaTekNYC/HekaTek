import React, { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { PointLight } from "@react-three/fiber"
import { useControls } from "leva"
import SpaceAbout from "../../assets/images/Celestial.png"

const icons = [
  {
    texturePath: "assets/icons/firebase.svg",
    position: [-1, -1, 1],
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.2,
  },
  {
    texturePath: "assets/icons/typescript.svg",
    position: [-1, 1, 1],
    size: 0.3,
    orbitRadius: 2,
    orbitSpeed: 0.2,
  },
  {
    texturePath: "assets/icons/react3.svg",
    position: [-2, 0, -1],
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.1,
  },
  {
    texturePath: "assets/icons/d3js-icon.svg",
    position: [-2, -1, -2],
    size: 0.7,
    orbitRadius: 2,
    orbitSpeed: 0.1,
  },
  {
    texturePath: "assets/icons/node1js.svg",
    position: [-1, 1, -2],
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.8,
  },
  {
    texturePath: "assets/icons/sass.svg",
    position: [2, 1, -2],
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.4,
  },
  {
    texturePath: "assets/icons/javascriptColor.svg",
    position: [2, 0, 1],
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.5,
  },
  {
    texturePath: "assets/icons/mongodb.svg",
    position: [2, -1, 0],
    size: 0.9,
    orbitRadius: 2.8,
    orbitSpeed: 0.4,
  },
  {
    texturePath: "assets/icons/github-icon.svg",
    position: [-2, -1, 0],
    size: 0.9,
    orbitRadius: 2.8,
    orbitSpeed: 0.4,
  },
]
const TechStack = ({
  texturePath,
  position,
  size,
  orbitRadius,
  orbitSpeed,
}) => {
  const techRef = useRef()

  useFrame((_, delta) => {
    techRef.current.rotation.y += delta * orbitSpeed
  })

  const texture = useLoader(TextureLoader, texturePath)

  return (
    <points ref={techRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={1}
          itemSize={3}
          array={new Float32Array(position)}
        />
      </bufferGeometry>
      <pointsMaterial size={size} map={texture} transparent depthTest={true} />
    </points>
  )
}

const Planet = ({ icons }) => {
  const planetRef = useRef()
  const texture = useLoader(TextureLoader, SpaceAbout)

  useFrame(() => {
    planetRef.current.rotation.y += 0.001
  })

  return (
    <>
      <ambientLight intensity={2} color={"0xffffff"} />
      <pointLight
        decay={2}
        color={"#00fbff"}
        intensity={1.2}
        position={[1, 1, 1]}
      />
      <directionalLight intensity={2} />

      <mesh ref={planetRef} renderOrder={-1}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.6} />
        {icons.map((icon, index) => (
          <TechStack
            key={index}
            position={icon.position}
            texturePath={icon.texturePath}
            size={icon.size}
            orbitRadius={icon.orbitRadius}
            orbitSpeed={icon.orbitSpeed}
          />
        ))}
      </mesh>
    </>
  )
}

const TechServices = () => {
  return (
    <>
      <Canvas
        linear
        flat
        camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 6] }}
      >
        <ambientLight args={[0.5]} />
        <pointLight args={[0xffffff, 0.5]} position={[2, 3, 4]} />
        <directionalLight position={[0, 1, 10]} />
        <Planet icons={icons} />
      </Canvas>
    </>
  )
}

export default TechServices
