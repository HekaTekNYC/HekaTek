import React, { useRef, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
// import PlanetSpace from "../../assets/images/planet_wrap.jpeg";
import PlanetSpace from "../../assets/images/hero_planet.webp"
import { useTexture } from "@react-three/drei"

const Sphere = () => {
  const planetRef = useRef()
  const texture = useTexture(TextureLoader, PlanetSpace)
  useTexture.preload("../../assets/images/hero_planet.webp")
  const scalePlanet = () => {
    const width = window.innerWidth
    let scaleFactor

    if (width >= 1200) {
      scaleFactor = 1
    } else if (width >= 992) {
      scaleFactor = 0.9
    } else if (width >= 768) {
      scaleFactor = 0.8
    } else {
      scaleFactor = 0.6
    }

    planetRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)
  }

  function debounce(func, wait) {
    let timeout

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }

      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  useFrame(() => {
    planetRef.current.rotation.y += 0.002
  })

  useEffect(() => {
    scalePlanet()
    const handleResize = () => {
      debounce(scalePlanet, 200)() // Debounce resize event
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty dependency array to run once on mount

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.6} />
      </mesh>
    </>
  )
}

const PlanetSphere = () => {
  return (
    <>
      <Canvas
        linear
        flat
        camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 0, 8] }}
      >
        <ambientLight intensity={2} color="#ffffff" />
        <pointLight
          decay={2}
          color="#ffffff"
          intensity={2}
          position={[0, 2, 2]}
        />
        <directionalLight intensity={2} />
        <Sphere />
      </Canvas>
    </>
  )
}

export default PlanetSphere
