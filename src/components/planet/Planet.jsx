import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import PlanetSpace from "../../assets/images/hero_planet.jpeg"
import { OrbitControls } from "@react-three/drei"

const Sphere = ({ scaleFactor }) => {
  const planetRef = useRef()
  const texture = useLoader(TextureLoader, PlanetSpace)

  useFrame(() => {
    planetRef.current.rotation.y += 0.002
  })

  return (
    <>
      <ambientLight intensity={2} color={"0xffffff"} />
      <pointLight decay={2} color={"#0xffffff"} intensity={2} position={[0, 2, 2]} />
      <directionalLight intensity={2} />

      <mesh ref={planetRef} renderOrder={-1} scale={[scaleFactor, scaleFactor, scaleFactor]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.6} />
      </mesh>
    </>
  )
}

const PlanetSphere = () => {
  const [scaleFactor, setScaleFactor] = useState(1)

  useEffect(() => {
    const updateScaleFactor = () => {
      const width = window.innerWidth

      if (width >= 1200) {
        setScaleFactor(1) // Default scale
      } else if (width >= 992) {
        setScaleFactor(0.9) // Adjust scale for 992px to 1200px
      } else if (width >= 768) {
        setScaleFactor(0.8) // Adjust scale for 768px to 992px
      } else {
        setScaleFactor(0.6) // Adjust scale for below 768px
      }
    }

    updateScaleFactor() // Call the function initially
    window.addEventListener("resize", updateScaleFactor) // Add event listener for window resize
    return () => {
      window.removeEventListener("resize", updateScaleFactor) // Remove event listener on component unmount
    }
  }, [])

  return (
    <Canvas linear flat camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 0, 8] }}>
      <ambientLight args={[2]} />
      <pointLight args={[0xffffff, 2]} position={[2, 3, 4]} />
      <directionalLight position={[0, 0, 0]} />
      <Sphere scaleFactor={scaleFactor} />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}

export default PlanetSphere
