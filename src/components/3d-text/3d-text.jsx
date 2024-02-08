import React, { useRef, Suspense } from "react"
import {
  Text3D,
  OrbitControls,
  Center,
  Float,
  useCubeTexture,
} from "@react-three/drei"
import { Canvas, useThree, useFrame } from "@react-three/fiber"

import { TextureLoader } from "three/src/loaders/TextureLoader"

// import Fontz from "../../text-data/Inlanders_Bold.json"
// import Fontz from "../../text-data/Inter_Bold.json"
import Fontz from "../../text-data/Kanit.json"
import { FrontSide } from "three"
import "./3d-text.scss"

function TextShiz() {
  const ref = useRef()
  const { gl, camera } = useThree()

  // const { width: w, height: h } = useThree((state) => state.viewport)
  // const texture = useLoader(TextureLoader, "/assets/rockt.png")
  // const texture = new TextureLoader().load('/assets/textures/myTexture.png');

  const newTexture = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/assets/textures/" }
  )

  useFrame((state, delta) => {

    state.camera.position.x = 0.04 * Math.sin(state.clock.elapsedTime)

    // state.camera.position.y = -0.9 * Math.sin(state.clock.elapsedTime)
    // state.camera.position.z = 9 * Math.sin(state.clock.elapsedTime)
  })

  return (
    <>
      <Center scale={[0.9, 1, 1]}>
        {/* <Float speed={0.5} floatIntensity={0.01}>  */}

        <Text3D
          // position={[-1, 5, 10]}
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
            // color={"#F79489"}
            // color={"#F8AFA6"}

            // color={"#918efb"}

            color={"#c8ebff"}

            // color={"##5AC69F"}
            envMap={newTexture}
            // map={texture}
          />
          {/* <meshNormalMaterial metalness={0.9} roughness={0.1} /> */}
        </Text3D>
        {/* </Float> */}
      </Center>
    </>
  )
}

export default function ThreeDeeText() {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, 10], fov: 28 }}>
        {/* <ambientLight intensity={0.5} position={[0, 0, 2]} /> */}
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
        {/* <axesHelper args={[5]} />
        <gridHelper /> */}
      </Canvas>
    </div>
  )
}
// export default function ThreeDeeText() {
//   return (
//     <div className="scene" style={{ width: "500px", height: "500px" }}>
//       {" "}
//       {/* Adjusted height */}
//       <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
//         <ambientLight args={[0.5]} />
//         <pointLight args={[0xffffff, 0.5]} position={[2, 3, 4]} />
//         <directionalLight position={[0, 1, 10]} />
//         <Suspense fallback={null}>
//           <TextShiz />
//         </Suspense>
//         <axesHelper args={[5]} />
//         <gridHelper />
//         <OrbitControls /> {/* Moved here */}
//       </Canvas>
//     </div>
//   )
// }
