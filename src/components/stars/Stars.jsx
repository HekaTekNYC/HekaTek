import { Canvas, useFrame } from "@react-three/fiber"
import React, { useState } from "react"

import { EffectComposer } from "@react-three/postprocessing"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { Perf } from "r3f-perf"

const COUNT = 300
const XY_BOUNDS = 40
const Z_BOUNDS = 20
// const MAX_SPEED_FACTOR = 1
// const MAX_SCALE_FACTOR = 4

const MyStars = () => {
  const meshRef = useRef()
  const effectsRef = useRef()
  const t = new THREE.Object3D()
  useEffect(() => {
    if (!meshRef.current) return t

    let j = 0
    for (let i = 0; i < COUNT * 3; i += 3) {
      t.position.x = generatePos()
      t.position.y = generatePos()
      t.position.z = (Math.random() - 0.5) * Z_BOUNDS
      t.updateMatrix()
      meshRef.current.setMatrixAt(j++, t.matrix)
    }
  }, [])

  const temp = new THREE.Matrix4()
  const tempPos = new THREE.Vector3()
  const tempObject = new THREE.Object3D()
  const tempColor = new THREE.Color()

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const speed = 0.013

    // const velocity =
    //   1 / Math.pow(state.clock.elapsedTime + 1, state.clock.elapsedTime + 1)

    for (let i = 0; i < COUNT; i++) {
      meshRef.current.getMatrixAt(i, temp)

      // update scale
      tempObject.scale.set(1, 1, Math.max(0.5, 0.5, 0.1))
      // tempObject.scale.set(1, 1, 0.75)
      tempPos.setFromMatrixPosition(temp)
      if (tempPos.z > Z_BOUNDS / 2) {
        tempPos.z = -Z_BOUNDS / 2
      } else {
        tempPos.z += speed
      }
      tempObject.position.set(tempPos.x, tempPos.y, tempPos.z)

      tempObject.updateMatrix()
      meshRef.current.setMatrixAt(i, tempObject.matrix)

      if (tempPos.z > 0) {
        tempColor.r = tempColor.g = tempColor.b = 1
      } else {
        tempColor.r =
          tempColor.g =
          tempColor.b =
            1 - tempPos.z / (-Z_BOUNDS / 2)
      }
      meshRef.current.setColorAt(i, tempColor)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor)
      meshRef.current.instanceColor.needsUpdate = true
  })

  return (
    <>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, COUNT]}
        matrixAutoUpdate
      >
        <sphereGeometry args={[0.01]} />
        <meshBasicMaterial color={[1, 1, 1]} toneMapped={false} />
      </instancedMesh>
      <EffectComposer>
        {/* <Bloom luminanceThreshold={0.2} mipmapBlur /> */}
      </EffectComposer>
    </>
  )
}

const SpaceOverlay = () => {
  const [dpr, setDpr] = useState(1.5)

  return (
    <Canvas
      dpr={dpr}
      camera={{
        fov: 100,
        near: 0.1,
        far: 200,
      }}
      // frameloop="demand"
    >
      {/* <Perf /> */}
      <MyStars />
    </Canvas>
  )
}

export default SpaceOverlay

function generatePos() {
  return (Math.random() - 0.5) * XY_BOUNDS
}
