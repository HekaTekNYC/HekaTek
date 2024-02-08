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
        speed={0.02}
        opacity={1}
        scale={15}
        color="#adc7e5"
        noise={3}
      />
      <Stars
        radius={200}
        depth={60}
        count={5000}
        factor={4}
        saturation={1}
        fade
        // speed={1}
        // colors={["#FF1212", "#ffffff"]}
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
