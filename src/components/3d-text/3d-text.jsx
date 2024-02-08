import React, { useRef } from "react"
import { Text3D, Center, useCubeTexture } from "@react-three/drei"
import { Canvas, useThree, useFrame } from "@react-three/fiber"

import Fontz from "../../text-data/Kanit.json"

import "./3d-text.scss"

function TextShiz() {
  const ref = useRef()
  const { gl, camera } = useThree()

  const newTexture = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/assets/textures/" }
  )

  useFrame((state, delta) => {
    state.camera.position.x = 0.04 * Math.sin(state.clock.elapsedTime)
  })

  return (
    <>
      <Center scale={[0.9, 1, 1]}>
        <Text3D
          ref={ref}
          size={4.4}
          maxWidth={1}
          font={Fontz}
          height={1}
          lineHeight={0.9}
          letterSpacing={0}
        >
          {`HekaTek`}
          <meshBasicMaterial
            metalness={0.9}
            roughness={0.1}
            color={"#c8ebff"}
            envMap={newTexture}
          />
        </Text3D>
      </Center>
    </>
  )
}

export default function ThreeDeeText() {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, 10], fov: 28 }}>
        <ambientLight intensity={2} position={[0, 0, 10]} />
        <spotLight
          position={[0, 0, 10]}
          intensity={2}
          angle={0.1}
          penumbra={1}
          castShadow
        />
        <directionalLight position={[0, 10, 50]} intensity={1} />
        <pointLight position={[0, 0, 2]} intensity={0.5} />
        <TextShiz />
      </Canvas>
    </div>
  )
}
