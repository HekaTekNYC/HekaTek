import React from "react"
import { Canvas } from "@react-three/fiber"
import { Sparkles, Stars } from "@react-three/drei"

const SparkleSky = ({ sparklesCount }) => {
  return (
    <>
      <Sparkles
        count={sparklesCount}
        size={2}
        fade
        speed={0.02}
        // opacity={1}
        opacity={0.5}
        scale={10}
        color="#adc7e5"
        noise={3}
      />
      <Stars
        radius={200}
        depth={60}
        count={1300}
        factor={4}
        saturation={1}
        fade
        // speed={1}
        // colors={["#FF1212", "#ffffff"]}
      />
    </>
  )
}

const SparklesOverlay = ({ sparklesCount }) => {
  return (
    <Canvas frameloop="always">
      <mesh>
        <SparkleSky sparklesCount={sparklesCount} />
      </mesh>
    </Canvas>
  )
}

export default SparklesOverlay
