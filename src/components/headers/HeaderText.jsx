import React from "react"
import { Canvas } from "@react-three/fiber"
import { Text3D } from "@react-three/drei"

const HeaderText = ({ text, position }) => {
  return (
    <Canvas>
      <Text3D
        position={position}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
        anchorZ="middle"
        textAlign="center"
        font="https://fonts.googleapis.com/css2?family=Roboto"
        // font="../../text-data/Inlanders_Bold.json"
        depthWrite={false}
        depthTest={false}
      >
        {text}
      </Text3D>
    </Canvas>
  )
}

export default HeaderText

// Then once we are in the component/page we want to import we can use the component like so:
// <div className="about-seciton">
// <Canvas style={{height: '200px', width: 'etc. etc.'}}
// <HeaderText text="Contact Us" position={[0, 0, 0]} />
// </Canvas>
// </div>
