import React from "react"
import { Canvas } from "@react-three/fiber"
import { Sparkles, Stars } from "@react-three/drei"

const SparkleSky = ({ count }) => {
  return (
    <>
      <Sparkles
        count={count}
        size={3}
        fade
        speed={0.03}
        opacity={1}
        scale={15}
        // color="#dbc593"
        color="#ffccf6"
        noise={3}
      />
      <Stars
        radius={100}
        depth={60}
        count={500}
        factor={4}
        saturation={1}
        fade
      />
    </>
  )
}

const SparklesOverlay = ({ count }) => {
  return (
    <Canvas frameloop="always">
      <mesh>
        <SparkleSky count={count} />
      </mesh>
    </Canvas>
  )
}

export default SparklesOverlay
