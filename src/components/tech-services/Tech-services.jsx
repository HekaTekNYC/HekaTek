import React, { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useCubeTexture } from "@react-three/drei"
import { TextureLoader } from "three/src/loaders/TextureLoader"
// import firebaseIcon from "../../assets/images/arrggg.png"
// import * as THREE from "three"

import { useControls } from "leva"
import "./tech-services.scss"

const icons = [
  {
    texturePath: "assets/icons_png/firebase.png",
    position: [1, 0, 0], // Right of the planet
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.5,
  },
  {
    texturePath: "assets/icons/icons8-react-native.svg",
    position: [2, 0, 0], // Left of the planet
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.5,
  },
  {
    texturePath: "assets/icons_png/node1js.png",
    position: [0, 2, 0], // Above the planet
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.5,
  },
  {
    texturePath: "assets/icons_png/CSSLogo.png",
    position: [0, -2, 0], // Below the planet
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.5,
  },
  {
    texturePath: "assets/icons_png/javascriptColor.png",
    position: [0, 0, 2], // In front of the planet
    size: 0.9,
    orbitRadius: 2,
    orbitSpeed: 0.5,
  },
  {
    texturePath: "assets/icons_png/mongodb.png",
    position: [2, 2, 0], // Diagonally right-above the planet
    size: 0.9,
    orbitRadius: 2.8, // Slightly larger orbit radius
    orbitSpeed: 0.4, // Slightly slower orbit speed
  },
  {
    texturePath: "assets/icons_png/github.png",
    position: [-2, -2, 0], // Diagonally left-below the planet
    size: 0.9,
    orbitRadius: 2.8, // Slightly larger orbit radius
    orbitSpeed: 0.4, // Slightly slower orbit speed
  },
]

const TechStack = ({
  texturePath,
  position,
  size,
  orbitRadius,
  orbitSpeed,
}) => {
  const techRef = useRef()

  // useFrame((_, delta) => {
  //   techRef.current.rotation.y += delta * 0.3
  //   techRef.current.rotation.x += delta * 0.3
  // })
  useFrame(({ clock }) => {
    if (techRef.current) {
      const elapsedTime = clock.getElapsedTime()
      techRef.current.position.x =
        position[0] + Math.cos(elapsedTime * orbitSpeed) * orbitRadius
      techRef.current.position.y = position[1]
      techRef.current.position.z =
        position[2] + Math.sin(elapsedTime * orbitSpeed) * orbitRadius
    }
  })
  const texture = useLoader(TextureLoader, texturePath)

  console.log("texture inside TechSTack", texture)
  // const positionArray = new Float32Array(techIconsAmount * 3)
  return (
    <points ref={techRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={1}
          itemSize={3}
          array={new Float32Array(position)}
        />
      </bufferGeometry>
      <pointsMaterial size={size} map={texture} transparent />
    </points>
  )
}

const Planet = ({ icons }) => {
  const planetRef = useRef()
  const texture = useLoader(
    TextureLoader,
    "https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg"
  )
  useFrame(() => {
    planetRef.current.rotation.y += 0.01
  })
  return (
    <>
      <mesh ref={planetRef} renderOrder={-1}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  )
}

const TechServices = () => {
  return (
    <>
      <Canvas linear flat camera={[0, 0, 3]}>
        {/* <ambientLight args={[0.5]} /> */}
        {/* <pointLight args={[0xffffff, 0.5]} position={[2, 3, 4]} /> */}
        {/* <directionalLight position={[0, 1, 10]} /> */}
        <Planet>
          {icons.map((icon, index) => (
            <TechStack
              key={index}
              position={icon.position}
              texturePath={icon.texturePath}
              size={icon.size}
              orbitRadius={icon.orbitRadius}
              orbitSpeed={icon.orbitSpeed}
            />
          ))}
        </Planet>

        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
      </Canvas>
    </>
  )
}

export default TechServices

// const techRef = useRef()
// const texture = useLoader(TextureLoader, iconSrc)

// useFrame(() => {
//   let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset
//   techRef.current.position.set(
//     Math.cos(date) * 2 + position[0], //X
//     Math.sin(date) * 1 + position[0], //Y
//     Math.sin(date) * 3 + position[0] //Z
//   )
// })
// const textures = useLoader(
//   TextureLoader,
//   icons.map((icon) => icon.src)
// )
// console.log("textures on the useLoader ", textures)
// const techRefs = useRef(textures.map(() => React.createRef()))
// console.log("techRefs on the useLoader ", techRefs)
// useFrame((_, delta) => {
//   techRefs.current.forEach((ref, index) => {
//     ref.current.rotation.y += delta * 0.1
//     ref.current.rotation.x += delta * 0.1
//   })
// })
// useFrame((_, delta) => {
//   particles.current.rotation.y += delta * 0.1
//   particles.current.rotation.x += delta * 0.1
// })
// {
/* {textures.map((texture, index) => (
        <points
          key={index}
          ref={techRefs.current[index]}
          position={
            new THREE.Vector3(
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10
            )
          }
        >
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              // count={positionArray.length}
              itemSize={3}
              // array={positionArray}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.06}
            alphaMap={texture}
            transparent
            depthTest={false}
          />
        </points>
      ))} */
// }

///////// Teck Stack OG
// const texturefirebase = useLoader(TextureLoader, "assets/icons/firebase.svg")
// console.log("firebaseMap ", texturefirebase)
// const techRef = useRef()
// const [firebaseMap, reactMap, nodeMap, CSSMap, jsMap] = useLoader(
//   TextureLoader,
//   [
//     "assets/icons_png/firebase.png",
//     "assets/icons/icons8-react-native.svg",
//     "assets/icons_png/node1js.png",
//     "assets/icons_png/CSSLogo.png",
//     "assets/icons_png/javascriptColor.png",
//   ]
// )
// useFrame((_, delta) => {
//   techRef.current.rotation.y += delta * 0.5
//   techRef.current.rotation.x += delta * 0.5
// })

// const fixedPositions = [
//   { x: 1, y: 2, z: -1 }, // Position for the first icon
//   // { x: -1, y: 1, z: 2 }, // Position for the second icon
//   // ... more positions for each icon
// ]

// const techIconsAmount = fixedPositions.length
// const positionArray = new Float32Array(techIconsAmount * 3)

// // Assign each fixed position to the positionArray
// fixedPositions.forEach((pos, index) => {
//   positionArray[index * 3] = pos.x
//   positionArray[index * 3 + 1] = pos.y
//   positionArray[index * 3 + 2] = pos.z
// })

// for (let i = 0; i < techIconsAmount * 3; i++) {
//   positionArray[i] = Math.random() - 0.5 * 6
// }

// console.log("positionsArray length", positionArray.length)

// for (let i = 0; i < techIconsAmount; i++) {
//   positionArray[i * 3] = Math.random() - 0.1 // X
//   positionArray[i * 3 + 1] = Math.random() - 0.1 // Y
//   positionArray[i * 3 + 2] = Math.random() - 0.1 //Z
// }

// return (
//   <>
//     <points ref={techRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={positionArray.length / 3}
//           // count={20}
//           itemSize={3}
//           array={positionArray}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.9}
//         map={nodeMap}
//         transparent
//         depthWrite={false}
//         // depthTest={false}
//       />
//       {/* <pointsMaterial size={0.06} map={reactMap} /> */}
//     </points>
//   </>
// )
