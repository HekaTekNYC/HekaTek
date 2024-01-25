import React from "react"
import ContactForm from "../../components/contact-form/ContactForm"
import d3 from "../../assets/icons/d3js-icon.svg"
import Tailwind from "../../assets/icons/tailwindcss.svg"
import Electron from "../../assets/icons/electronjs.svg"
import "./contact.scss"

const Contact = () => {
  return (
    <div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact

/* <div className="contact-container">
<div className="grid">
  <Grid />
</div>
<div className="contact-form">
  <ContactForm />
</div>
</div> */
// If using a Webpack loader or similar tool
// import svgString from './path/to/your/file.svg';
// const svgDataURL = `data:image/svg+xml;base64,${btoa(svgString)}`;

// const convertSVGToImage = (svgUrl) => {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.onerror = reject;
//     img.src = svgUrl;
//   });
// };

//next create a texture from the image:
// import { Texture } from 'three';

// const createTextureFromSVG = async (svgUrl) => {
//   const image = await convertSVGToImage(svgUrl);
//   const texture = new Texture(image);
//   texture.needsUpdate = true; // Important for updating the texture with the image data
//   return texture;
// };

//Then use the Texture in react 3 Fiber:
// import React, { useState, useEffect } from 'react';
// import { useLoader, useThree, useFrame } from '@react-three/fiber';
// import { TextureLoader } from 'three';

// const SVGTextureComponent = ({ svgUrl }) => {
//   const [texture, setTexture] = useState();

//   useEffect(() => {
//     createTextureFromSVG(svgUrl).then(setTexture);
//   }, [svgUrl]);

//   return texture ? (
//     <mesh>
//       <planeBufferGeometry args={[1, 1]} />
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   ) : null;
// };

//Then use the component in your scene:
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import SVGTextureComponent from './SVGTextureComponent';

// const App = () => {
//   return (
//     <Canvas>
//       <SVGTextureComponent svgUrl="path_to_your_svg_icon.svg" />
//       {/* Other 3D objects */}
//     </Canvas>
//   );
// };

// export default App;
