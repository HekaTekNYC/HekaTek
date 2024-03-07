
// import React, { useState, useRef, useEffect } from "react";
// import Button from "../button/Button";
// import "./product-card.scss";

// const ProductCard = ({
//   name,
//   desc,
//   img,
//   info,
//   btn,
//   aLink,
//   video,
//   id,
//   playbackRate = 3.0,
//   onPlayToggle,
// }) => {
//   const videoRef = useRef(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   // Function to toggle video play state
//   const toggleVideoPlay = () => {
//     if (videoRef.current) {
//       if (isVideoPlaying) {
//         videoRef.current.pause();
//         setIsVideoPlaying(false);
//       } else {
//         videoRef.current.play();
//         setIsVideoPlaying(true);
//       }
//     }
//   };

//   // Set playback rate
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate;
//     }
//   }, [playbackRate]);

//   return (
//     <div className="product-card-container" key={id} onClick={toggleVideoPlay}>
//       <div className="image-container">
//         {video && (
//           <video
//             ref={videoRef}
//             width="100%"
//             height="100%"
//             loop
//             muted
//             style={{ display: isVideoPlaying ? "block" : "none" }}
//           >
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//         {!isVideoPlaying && (
//           <img
//             src={img.src}
//             alt={img.alt}
//             className="product-img"
//             loading="lazy"
//             decoding="async"
//           />
//         )}
//       </div>

//       <div className="product-info inverted-border">
//         <h4 className="product-name">{name}</h4>
//         <h5 className="short-desc">{desc}</h5>
//       </div>

//       <div className="product-button">
//         <Button link={aLink} text={btn}></Button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// import React, { useState, useRef, useEffect } from "react"

// import Button from "../button/Button"
// import "./product-card.scss"

// const ProductCard = ({
//   name,
//   desc,
//   icons,
//   img,
//   info,
//   btn,
//   aLink,
//   isCurrentWork,
//   video,
//   id,
//   playbackRate = 3.0,
// }) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const descriptionRef = useRef(null)
//   const videoRef = useRef(null)
//   const [maxHeight, setMaxHeight] = useState("0px")

//   useEffect(() => {
//     console.log(`[Card] useEffect - description updated for title: ${name}`)
//     if (descriptionRef.current) {
//       const newMaxHeight = `${descriptionRef.current.scrollHeight + 150}px`
//       console.log(`[Card] New maxHeight for ${name}: ${newMaxHeight}`)
//       setMaxHeight(newMaxHeight)
//     }
//   }, [info, name]) // Depend on description and title to recalculate if it changes

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate // Set the playback rate on the video element
//     }
//   }, [playbackRate])
//   console.log(`[Card] Rendered - ${name}, isHovered: ${isHovered}`)

//   return (
//     <div
//       className="product-card-container"
//       key={id}
//       onMouseEnter={() => {
//         setIsHovered(true)
//       }}
//       onMouseLeave={() => {
//         setIsHovered(false)
//       }}
//     >
//       <div className="image-container">
//         <div className="image-overlay">
//           <h1
//             style={{
//               backgroundImage: `url(${img.src})`,
//               backgroundPosition: "center",
//               backgroundRepeat: "repeat",
//               backgroundSize: "cover",
//             }}
//           >
//             PREVIEW
//           </h1>
//         </div>
//         <img
//           src={img.src}
//           alt={img.alt}
//           className="product-img"
//           loading="lazy"
//           decoding="async"
//           style={{ opacity: isHovered && video ? "0" : "1" }}
//         />
//         {video && (
//           <video
//             ref={videoRef}
//             width="100%"
//             height="100%"
//             autoPlay
//             loop
//             muted
//             style={{ display: isHovered ? "block" : "none" }}
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//         )}
//       </div>

//       <div className="product-info inverted-border">
//         <h4 className="product-name">{name}</h4>
//         <h5 className="short-desc">{desc}</h5>
//       </div>

//       <div
//         className="card-overlay"
//         style={{ maxHeight: isHovered ? maxHeight : "0px" }} // Adjust based on hover
//       >
//         <p className="long-desc" ref={descriptionRef}>
//           {info}
//         </p>
//         <div className="product-button">
//           <Button link={aLink} text={btn}></Button>
//         </div>
//       </div>
//     </div>
//     // </div>
//   )
// }

// export default ProductCard




  <div className="image-container">
        {video && (
          <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: "block" }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {!isPlaying && ( // Adjusted to use isPlaying
          <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" />
        )}
</div> 
      
       // This function toggles the play state and expansion
  const handlePlayClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling to card container
    onPlayToggle(id); // This should toggle the isPlaying state in the parent component
  };

  const ProductCard = ({
    name,
    desc,
    img,
    info,
    btn,
    aLink,
    video,
    id,
    isPlaying,
    onPlayToggle,
    playbackRate = 1.0, // Assuming you want to control playback speed
  })

  return (
    <div className="product-card-container" key={id} onClick={handleCardClick}>
      <div className="image-container">
        {!isPlaying && (
          <div className="image-overlay" onClick={handlePlayClick}>
            <img src={PlayIcon} alt="Play" className="play-button" style={{height: '80px', width: '80px'}}/>
          </div>
        )}
        {video && (
          <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: isPlaying ? "block" : "none" }}>
            <source src={video} type="video/mp4" />
          </video>
        )}
        <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" style={{ display: isPlaying ? "none" : "block" }} />
      </div>
      <div className="product-info inverted-border" style={{ maxHeight: isExpanded ? '1000px' : '0px', transition: 'max-height 0.3s ease-in-out' }}>
        <h4 className="product-name">{name}</h4>
        <h5 className="short-desc">{desc}</h5>
        <p className="long-desc">{info}</p> {/* Ensure you have this for additional info */}
        <div className="product-button">
          <Button link={aLink} text={btn} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;