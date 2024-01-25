import React, { useRef } from "react"
import { Text3D, OrbitControls, Center } from "@react-three/drei"
import { Canvas, useThree, useLoader } from "@react-three/fiber"
import { useFaceControls } from "leva"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import Cosmo from "../../assets/images/cosmo.png"

// import Fontz from "../../text-data/Inlanders_Bold.json"
// import Fontz from "../../text-data/Inter_Bold.json"
import Fontz from "../../text-data/Kanit.json"
import { FrontSide } from "three"

function TextShiz() {
  const ref = useRef()
  const { width: w, height: h } = useThree((state) => state.viewport)
  const texture = useLoader(TextureLoader, Cosmo)

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[1, 4, 20]} />
      <Center scale={[0.9, 1, 1]}>
        <Text3D
          position={[-13, -2, 0]}
          ref={ref}
          size={w / 9}
          maxWidth={[-w / 5, -h * 2, 3]}
          font={Fontz}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          // bevelSize={1}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
        >
          {"HekaTek"}
          <meshPhongMaterial
            map={texture}
            metalness={1}
            roughness={0.1}
            position={FrontSide}
          />
        </Text3D>
      </Center>

      <OrbitControls />
      {/* </Center> */}
    </>
  )
}

export default function ThreeDeeText() {
  return (
    <div style={{ width: "500px", height: "100px" }}>
      <Canvas>
        <TextShiz />

        <axesHelper args={[5]} />
        <gridHelper />
      </Canvas>
    </div>
  )
}

// import React, { useRef } from "react"
// import { Text3D, OrbitControls, Center, Float, Html } from "@react-three/drei"
// import { Canvas } from "@react-three/fiber"

// import Fontz from "../../text-data/Inlanders_Bold.json"

// function TextShiz() {
//   return (
//     <>
//       {/* <Center>
//         <Float speed={5} floatIntensity={4}>
//           <Text3D
//             font={Fontz}
//             height={1}
//             size={1.1}
//             letterSpacing={-0.1}
//             bevelEnabled
//             bevelSegments={20}
//           >
//             HekaTek
//             <meshNormalMaterial />
//           </Text3D>
//         </Float>
//       </Center> */}

//       <Text3D
//         font={Fontz}
//         height={1}
//         size={1.1}
//         letterSpacing={-0.1}
//         bevelEnabled
//         bevelSegments={20}
//       >
//         HekaTek
//         <meshNormalMaterial />
//       </Text3D>
//     </>
//   )
// }

// export default function ThreeDeeText() {
//   return (
//     <div className="scene">

//       <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
//         <OrbitControls
//           //   camera={MyCamera}
//           enableZoom={true}
//           autoRotate={true}
//           autoRotateSpeed={-0.1}
//           enablePan={true}
//           // azimuth={[-Math.PI / 4, Math.PI / 4]}
//           zoomSpeed={0.15}
//           dampingFactor={0.05}
//         />
//         <TextShiz />
//       </Canvas>
//     </div>
//   )
// }
