import React, { useRef } from "react"
import {
  Text3D,
  OrbitControls,
  Center,
  Float,
  useCubeTexture,
} from "@react-three/drei"
import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber"
import { useFaceControls } from "leva"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import Cosmo from "../../assets/images/cosmo.png"

// import Fontz from "../../text-data/Inlanders_Bold.json"
// import Fontz from "../../text-data/Inter_Bold.json"
import Fontz from "../../text-data/Kanit.json"
import { FrontSide } from "three"
import "./3d-text.scss"

function TextShiz({ text }) {
  // const ref = useRef()
  const { width: w, height: h } = useThree((state) => state.viewport)
  const texture = useLoader(TextureLoader, Cosmo)
  const fuckinTexture = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "assets/textures/" }
  )

  const ref = useRef()
  // const speed = 0.09 // Adjust as needed
  // const amplitude = 10 / 2 // Adjust as needed
  // // Set the initial y position of the text to the middle of the floating range
  // const initialYPosition = 2

  // useFrame(({ clock }) => {
  //   if (ref.current) {
  //     ref.current.position.y =
  //       amplitude * Math.sin(clock.getElapsedTime() * speed)
  //   }
  // })

  return (
    <>
      <Center scale={[0.9, 1, 1]}>
        {/* <Float speed={1} floatIntensity={0.02}> */}

        <Text3D
          position={[0, 5, 0]}
          ref={ref}
          size={3}
          maxWidth={1}
          font={Fontz}
          height={1}
          lineHeight={0.9}
          letterSpacing={-0.2}
        >
          {text}
          <meshNormalMaterial metalness={0.9} roughness={0.1} />
        </Text3D>
      </Center>

      <OrbitControls />
    </>
  )
}

export default function ThreeDeeText({ text }) {
  return (
    <div className="scene" style={{ width: "500px", height: "100px" }}>
      <Canvas camera={{ position: [0.5, 0, 7], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <TextShiz text={text} />

        {/* <axesHelper args={[5]} />
        <gridHelper /> */}
      </Canvas>
    </div>
  )
}
