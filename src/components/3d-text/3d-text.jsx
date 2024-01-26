import React, { useRef, Suspense } from "react"
import { Text3D, OrbitControls, Center } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"

import { TextureLoader } from "three/src/loaders/TextureLoader"

// import Fontz from "../../text-data/Inlanders_Bold.json"
// import Fontz from "../../text-data/Inter_Bold.json"
import Fontz from "../../text-data/Kanit.json"
import { FrontSide } from "three"
import "./3d-text.scss"

function TextShiz() {
  const ref = useRef()
  const { width: w, height: h } = useThree((state) => state.viewport)
  // const texture = useLoader(TextureLoader, )

  // const sunTexture = useLoader(CubeTextureLoader, [
  //   "/assets/textures/px.png",
  //   "/assets/textures/nx.png",
  //   "/assets/textures/py.png",
  //   "/assets/textures/ny.png",
  //   "/assets/textures/pz.png",
  //   "/assets/textures/nz.png",
  // ])

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
          {`HekaTek`}
          <meshBasicMaterial
            metalness={0.9}
            roughness={0.1}
            color={"#9a63ff"}

            //  map={texture}
          />
        </Text3D>
      </Center>

      <OrbitControls />
    </>
  )
}

export default function ThreeDeeText() {
  return (
    <div className="scene" style={{ width: "500px", height: "100px" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
        {/* <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} /> */}
        <TextShiz />
        <axesHelper args={[5]} />
        <gridHelper />
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
