import React, { useRef } from "react"
import { Text3D, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import Fontz from "../../text-data/Inlanders_Bold.json"

function TextShiz() {
  return (
    <>
      {/* <Center> */}
      <ambientLight intensity={1} />
      <directionalLight position={[-2, 4, 26]} />
      {/* <spotLight position={[2, 4, 0]} angle={0.3} penumbra={1} /> */}
      {/* <directionalLight position={[-9, 5, 0]} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}
      <Text3D
        font={Fontz}
        height={1}
        size={1.3}
        letterSpacing={0.1}
        bevelEnabled
        bevelSegments={20}
        position={[-9, 5, 0]}
      >
        HekaTek
        <meshStandardMaterial
          color="blueviolet"
          metalness={1}
          roughness={0.1}
        />
        {/* <meshStandardMaterial color="silver" metalness={1} roughness={0.5} /> */}
        {/* <meshNormalMaterial /> */}
      </Text3D>

      <OrbitControls
        enableZoom={true}
        autoRotate={false}
        autoRotateSpeed={0.1}
        enablePan={true}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
        zoomSpeed={0.15}
        dampingFactor={0.05}
      />
      {/* </Center> */}
    </>
  )
}

export default function ThreeDeeText() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas camera={{ position: [0, 5, 20], fov: 40 }}>
        <TextShiz />
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
