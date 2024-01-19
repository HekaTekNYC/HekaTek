import React from "react"
import { Canvas } from "@react-three/fiber"
import { Sparkles, Stars } from "@react-three/drei"

const SparkleSky = () => {
  return (
    <>
      <Sparkles
        count={300}
        size={3}
        fade
        speed={0.19}
        opacity={1}
        scale={10}
        color="#3ddbff"
        noise={3}
      />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={1}
        fade
        speed={1}
        color="#ff3dd5"
      />
    </>
  )
}

const SparklesOverlay = () => {
  return (
    <Canvas frameloop="demand">
      <mesh>
        <SparkleSky />
      </mesh>
    </Canvas>
  )
}

export default SparklesOverlay

// import React, { useRef, Suspense } from "react"
// import { Canvas, useThree } from "@react-three/fiber"
// import { Physics } from "@react-three/cannon"
// import {
//   Text3D,
//   OrbitControls,
//   Center,
//   Stars,
//   Float,
//   Sparkles,
//   useMatcapTexture,
// } from "@react-three/drei"
// import "./hero.scss"

// function HeroContent() {
//   const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9")
//   const ref = useRef()

//   const { width: w, height: h } = useThree((state) => state.viewport)

//   return (
//     <Center scale={[0.9, 1, 1]}>
//       <Physics gravity={10}>
//         <Float speed={1}>
//           <Text3D
//             position={[0, 0, -10]}
//             scale={[-1, 1, 1]}
//             ref={ref}
//             size={w / 9}
//             maxWidth={[-w / 5, -h * 2, 3]}
//             font={"/gt.json"}
//             curveSegments={24}
//             bevelSegments={1}
//             bevelEnabled
//             bevelSize={0.08}
//             bevelThickness={0.03}
//             height={1}
//             lineHeight={0.9}
//             letterSpacing={0.3}
//           >
//             <meshMatcapMaterial color="white" matcap={matcapTexture} />
//           </Text3D>
//         </Float>
//       </Physics>
//     </Center>
//   )
// }

// const Hero = () => {
//   return (
//     <div className="scene">
//       <Canvas camera={{ position: [0, 0, -10], fov: 60 }}>
//         <OrbitControls
//           enableZoom={true}
//           autoRotate={true}
//           autoRotateSpeed={-0.1}
//           enablePan={true}
//           azimuth={[-Math.PI / 4, Math.PI / 4]}
//           zoomSpeed={0.15}
//           dampingFactor={0.05}
//         />

//         <Suspense fallback={"Loading"}>
//           <Stars
//             radius={100}
//             depth={100}
//             count={4000}
//             factor={4}
//             saturation={0}
//             fade
//             speed={0.2}
//           />
//           <Sparkles
//             count={300}
//             size={3}
//             speed={0.02}
//             opacity={1}
//             scale={10}
//             color="#fff3b0"
//           />
//           <HeroContent />
//         </Suspense>
//         <ambientLight intensity={0.6} color={"#dee2ff"} />
//       </Canvas>
//     </div>
//   )
// }

// export default Hero
