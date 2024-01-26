import React from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"

// Single icon component
const Icon = ({ position, texturePath, size }) => {
  const texture = useLoader(TextureLoader, texturePath)

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1}
          itemSize={3}
          array={new Float32Array([...position])}
        />
      </bufferGeometry>
      <pointsMaterial size={size} map={texture} transparent />
    </points>
  )
}

// Parent component where you use the Icon component
const TechServices = () => {
  const icons = [
    {
      position: [1, 2, -1],
      texturePath: "assets/icons_png/firebase.png",
      size: 0.9,
    },
    // ... other icons
  ]

  return (
    <>
      {icons.map((icon, index) => (
        <Icon
          key={index}
          position={icon.position}
          texturePath={icon.texturePath}
          size={icon.size}
        />
      ))}
    </>
  )
}

export default TechStack
