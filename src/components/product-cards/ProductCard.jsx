import React, { useState, useRef, useEffect } from "react";
import PlayIcon from '../../assets/icons/PlayCircle.svg';
import Button from "../button/Button";
import "./product-card.scss";

const ProductCard = ({
  name,
  desc,
  img,
  info,
  btn,
  aLink,
  video,
  id,
}) => {
  const videoRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const playbackRate = 3.0; // Assuming you want a specific playback rate, adjust as needed.

  useEffect(() => {
    if (descriptionRef.current) {
      const newMaxHeight = `${descriptionRef.current.scrollHeight + 150}px`;
      setMaxHeight(newMaxHeight);
    }
  }, [info]); // Depend on description to recalculate if it changes

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate; // Set the playback rate on the video element
    }
  }, [playbackRate, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="product-card-container" key={id} onClick={togglePlay}>
      <div className="image-container">
        {!isPlaying && (
          <div className="image-overlay">
            <img src={PlayIcon} alt="Play" className="play-button" style={{ height: '80px', width: '80px' }} />
          </div>
        )}
        {video && (
          <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: isPlaying ? "block" : "none" }}>
            <source src={video} type="video/mp4" />
          </video>
        )}
        <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" style={{ display: isPlaying ? "none" : "block" }} />
      </div>

      <div className="product-info inverted-border" style={{ maxHeight: isPlaying ? maxHeight : "0px", transition: 'max-height 0.3s ease-in-out' }}>
        <h4 className="product-name">{name}</h4>
        <h5 className="short-desc">{desc}</h5>
        <p className="long-desc" ref={descriptionRef}>{info}</p>
        <div className="product-button">
          <Button link={aLink} text={btn} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// ------THIS CODE HAS THE CORRECT ON TOUCH PLAY GIF FUNCTIONALITY
// import React, { useState, useRef, useEffect } from "react"
// import PlayIcon from '../../assets/icons/PlayCircle.svg'
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
//   isPlaying,
//   onPlayToggle,
// }) => {
//   const videoRef = useRef(null);
//   // Assuming isExpanded is part of your component's state or comes from props
//   const [isExpanded, setIsExpanded] = useState(false);
//   const playbackRate = 1.0; // Set default playback rate here or manage it through props

//   const handleCardClick = () => {
//     // Implement card click functionality
//   };

//   const handlePlayClick = (event) => {
//     event.stopPropagation(); // Prevent card click when play is clicked
//     onPlayToggle(!isPlaying);
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate;
//       if (!isPlaying) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   };

//   return (
//     <div className="product-card-container" key={id} onClick={handleCardClick}>
//       <div className="image-container">
//         {!isPlaying && (
//           <div className="image-overlay" onClick={handlePlayClick}>
//             {/* Ensure PlayIcon is correctly imported or defined */}
//             <img src={PlayIcon} alt="Play" className="play-button" style={{ height: '80px', width: '80px' }} />
//           </div>
//         )}
//         {video && (
//           <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: isPlaying ? "block" : "none" }}>
//             <source src={video} type="video/mp4" />
//           </video>
//         )}
//         <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" style={{ display: isPlaying ? "none" : "block" }} />
//       </div>
      
//       {/* isExpanded should be managed within your component's state or props */}
//       <div className="product-info inverted-border" style={{ maxHeight: isExpanded ? '1000px' : '0px', transition: 'max-height 0.3s ease-in-out' }}>
//         <h4 className="product-name">{name}</h4>
//         <h5 className="short-desc">{desc}</h5>
//         <p className="long-desc">{info}</p>
//         <div className="product-button">
//           <Button link={aLink} text={btn} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// import Button from "../button/Button"
// import "./product-card.scss"
// const ProductCard = ({
//   name,
//   desc,
//   img,
//   info,
//   btn,
//   aLink,
//   video,
//   id,
//   isPlaying,
//   onPlayToggle,
//   playbackRate = 1.0, // Assuming you want to control playback speed
// })

// return (
//   <div className="product-card-container" key={id} onClick={handleCardClick}>
//     <div className="image-container">
//       {!isPlaying && (
//         <div className="image-overlay" onClick={handlePlayClick}>
//           <img src={PlayIcon} alt="Play" className="play-button" style={{height: '80px', width: '80px'}}/>
//         </div>
//       )}
//       {video && (
//         <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: isPlaying ? "block" : "none" }}>
//           <source src={video} type="video/mp4" />
//         </video>
//       )}
//       <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" style={{ display: isPlaying ? "none" : "block" }} />
//     </div>
//     <div className="product-info inverted-border" style={{ maxHeight: isExpanded ? '1000px' : '0px', transition: 'max-height 0.3s ease-in-out' }}>
//       <h4 className="product-name">{name}</h4>
//       <h5 className="short-desc">{desc}</h5>
//       <p className="long-desc">{info}</p> {/* Ensure you have this for additional info */}
//       <div className="product-button">
//         <Button link={aLink} text={btn} />
//       </div>
//     </div>
//   </div>
// );
// };

// export default ProductCard;

// import React, { useState, useRef, useEffect } from "react"

// import Button from "../button/Button"
// import "./product-card.scss"

//   // // Modify the useEffect for playing state to also consider isActive
//   // useEffect(() => {
//   //   if (!isActive && isTouched) {
//   //     setIsTouched(false); // Reset touch state when the card is no longer active
//   //   }
//   //   // Other existing code
//   // }, [isActive, isTouched]);
  
//   // // Adjust event handlers to use isActive and onTouchEnd
//   // const handleTouchStart = (e) => {
//   //   e.stopPropagation();
//   //   setIsTouched(true);
//   //   onPlayToggle(id); // Assuming this also sets the card as active in the parent
//   // };

//   // const handleTouchEnd = (e) => {
//   //   e.stopPropagation();
//   //   onTouchEnd(); // Call parent handler to reset active card state
//   // };



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
//   // isPlaying,
//   // isActive,
//   // onPlayToggle,
//   // onTouchStart,
//   // onTouchEnd,
// }) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isTouched, setIsTouched] = useState(false)
//   const descriptionRef = useRef(null)
//   const videoRef = useRef(null)
//   const [maxHeight, setMaxHeight] = useState("0px")
//   const [playingVideoId, setPlayingVideoId] = useState(null);
//   const [activeCard, setActiveCard] = useState(null);

//   const handlePlayToggle = (id) => {
//     setPlayingVideoId(prevId => prevId === id ? null : id);
//     // This toggles the video play state. If the same ID is clicked again, it stops the video.
//   };

//   // const handlePlayToggle = (id) => {
//   //   console.log('Toggle Play:', id);
//   //   setPlayingVideoId((prevId) => {
//   //     const newId = prevId === id ? null : id;
//   //     console.log('New Playing Video ID:', newId);
//   //     return newId;
//   //   });
//   // };

//   // Checking if the current card is active
//   const handleCardTouch = (id) => {
//     console.log('Toggle Active Card:', id);
//     setActiveCard((prevId) => {
//       const newId = prevId === id ? null : id;
//       console.log('New Active Card ID:', newId);
//       return newId;
//     });
//   };

//   useEffect(() => {
//     console.log(`[Card] useEffect - description updated for title: ${name}`)
//     if (descriptionRef.current) {
//       const newMaxHeight = `${descriptionRef.current.scrollHeight + 150}px`
//       console.log(`[Card] New maxHeight for ${name}: ${newMaxHeight}`)
//       setMaxHeight(newMaxHeight)
//     }
//   }, [info, name]) // Depend on description and title to recalculate if it changes

//   // Handle touch or click interactions
//   const handleInteraction = (e) => {
   
//     e.stopPropagation(e);
//     onPlayToggle(id); // Notify parent to toggle the playing state
//   };
// //what is e.prevent.default
//   const handlePlayClick = (e) => {

//     e.stopPropagation(e); // Prevent event bubbling to card container
//     onPlayToggle(id); // This should toggle the isPlaying state in the parent component
//   };

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate;
//       videoRef.current.muted = true; // Ensure the video is muted
//       if (isPlaying) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.load(); // This stops the video and resets it to the beginning
//       }
//     }
//   }, [isPlaying, playbackRate]);
  
//   // useEffect(() => {
//   //   if (videoRef.current) {
//   //     videoRef.current.playbackRate = playbackRate // Set the playback rate on the video element
//   //   }
//   // }, [playbackRate])
//   // console.log(`[Card] Rendered - ${name}, isHovered: ${isHovered}`)

//   // const handleTouchStart = (e) => {
//   //   setIsHovered(false); 
//   //   setIsTouched(true);

//   // }

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
//       // onTouchStart={() => {
//       //   setIsTouched(true)
//       //   console.log( 'Touching started')
//       // }}
//       // onTouchCancel={() => {
//       //   setIsTouched(false)
//       // }}
//       onClick={handleInteraction}
//       onTouchStart={() => {
//         setIsTouched(true);
//         console.log( 'Touching started')
//         handleInteraction(); // Optionally trigger interaction here
//       }}
//       onTouchEnd={() => {
//         setIsTouched(false);
//         console.log( 'Touching ended')
//       }}
  
//     >
//       <div className="image-container ">
//         {!isPlaying && (
//           <div className="image-overlay">
//             <h1
//               style={{
//                 backgroundImage: `url(${img.src})`,
//                 backgroundPosition: "center ",
//                 backgroundRepeat: "repeat",
//                 backgroundSize: "cover",
//               }}
//             >
//               PREVIEW
//             </h1>
//           </div>
//         )}
//   {!isPlaying && (
//         <img
//           src={img.src}
//           alt={img.alt}
//           className="product-img"
//           loading="lazy"
//           decoding="async"
//           style={{ display: isPlaying ? 'none' : 'block', opacity: isHovered && video ? "0" : "1" }}
//         />       )}
//         {video && (
//           <video
//             ref={videoRef}
//             width="100%"
//             height="100%"
//             autoPlay
//             loop
//             muted
//             style={{ display: isHovered || isPlaying ? "block" : "none" }}
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

// import React, { useRef, useEffect, useState } from "react";
// import PlayIcon from '../../assets/icons/PlayCircle.svg'; 
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
//   isPlaying,
//   onPlayToggle,
//   playbackRate = 1.0, // Assuming you want to control playback speed
// }) => {
//   const videoRef = useRef(null);
//   const [isExpanded, setIsExpanded] = useState(false); // State to control expansion

//   // Effect for handling playback based on isPlaying prop
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate;
//       if (isPlaying) {
//         videoRef.current.play();
//         setIsExpanded(true); // Ensure info expands when video starts playing
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isPlaying, playbackRate]);

//   // This function toggles the play state and expansion
//   const handlePlayClick = (e) => {
//     e.stopPropagation(); // Prevent event bubbling to card container
//     onPlayToggle(id); // This should toggle the isPlaying state in the parent component
//   };

//   // Toggle expansion without affecting video playback
//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="product-card-container" key={id} onClick={handleCardClick}>
//       <div className="image-container">
//         {!isPlaying && (
//           <div className="image-overlay" onClick={handlePlayClick}>
//             <img src={PlayIcon} alt="Play" className="play-button" style={{height: '80px', width: '80px'}}/>
//           </div>
//         )}
//         {video && (
//           <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: isPlaying ? "block" : "none" }}>
//             <source src={video} type="video/mp4" />
//           </video>
//         )}
//         <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" style={{ display: isPlaying ? "none" : "block" }} />
//       </div>
//       <div className="product-info inverted-border" style={{ maxHeight: isExpanded ? '1000px' : '0px', transition: 'max-height 0.3s ease-in-out' }}>
//         <h4 className="product-name">{name}</h4>
//         <h5 className="short-desc">{desc}</h5>
//         <p className="long-desc">{info}</p> {/* Ensure you have this for additional info */}
//         <div className="product-button">
//           <Button link={aLink} text={btn} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// VERSION 1 ---------

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
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const videoRef = useRef(null);
//   const descriptionRef = useRef(null);
  
//   // Function to handle the touch on the card
//   const handleCardTouch = () => {
//     // Toggle the expanded view and video playing state
//     setIsExpanded(!isExpanded);

//     // Play or pause video based on the expanded state
//     if (videoRef.current) {
//       if (isExpanded) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//     }
//   };

//   // Set maxHeight based on the content of descriptionRef
//   useEffect(() => {
//     if (descriptionRef.current) {
//       // Your logic to calculate maxHeight
//       // ...
//     }
//   }, [info]); // Assuming 'info' is the content that might affect the size

//   // Set playback rate for the video
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate;
//     }
//   }, [playbackRate]);

//   return (
//     <div className="product-card-container" key={id} onClick={handleCardTouch}>
//       <div className="image-container">
//         {video && (
//           <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: "block" }}>
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}

        

//         <img
//           src={img.src}
//           alt={img.alt}
//           className="product-img"
//           loading="lazy"
//           decoding="async"
//           style={{ display: isExpanded ? "none" : "block" }} // Hide the image when expanded
//         />
//       </div>
//       <div className="product-info inverted-border">
//         <h4 className="product-name">{name}</h4>
//         <h5 className="short-desc">{desc}</h5>
//       </div>
//       <div
//         className="card-overlay"
//         ref={descriptionRef}
//         style={{ maxHeight: isExpanded ? '1000px' : '0px' }} // Use your dynamic maxHeight here
//         >
//         <p className="long-desc">{info}</p>
//         <div className="product-button">
//           <Button link={aLink} text={btn} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// VERSION 2 -----------

// import React, { useState, useRef, useEffect } from "react";
// import PlayIcon from '../../assets/icons/PlayCircle.svg'
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
//   isPlaying,
//   onPlayToggle,
// }) => {
//   const videoRef = useRef(null);
//   const handlePlayVideo = (event) => {
//     // Stop the event from bubbling up to parent elements
//     event.stopPropagation();
  
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
  

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate;
//       if (isPlaying) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [playbackRate, isPlaying]);

//   return (
//     <div className="product-card-container" key={id} onClick={onPlayToggle}> {/* Use onPlayToggle here */}
//       <div className="image-container">
//   {!isPlaying && (
//     <div className="image-overlay" onClick={handlePlayVideo}>
//             <img src={PlayIcon} alt="Play" className="play-button" style={{ height: '90px', width: '90px' }} />
            
//     </div>
//   )}
//   {video && (
//     <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: isPlaying ? "block" : "none" }}>
//       <source src={video} type="video/mp4" />
//     </video>
//   )}
//   <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" style={{ opacity: isPlaying ? "0" : "1" }} />
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

// import React, { useRef, useEffect, useState } from "react";
// import PlayIcon from '../../assets/icons/PlayCircle.svg'; 
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
//   isPlaying,
//   onPlayToggle,
//   playbackRate = 1.0, // Assuming you want to control playback speed
// }) => {
//   const videoRef = useRef(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   // Effect for handling playback based on isPlaying prop
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = playbackRate;
//       if (isPlaying) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isPlaying, playbackRate]);

//   const handlePlayClick = (e) => {
//     e.stopPropagation(); // Prevent event bubbling to card container
//     onPlayToggle(id);
//     setIsExpanded(true); // Expand card when play button is clicked
//   };

//   //toggle expansion
//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="product-card-container" key={id} onClick={() => setIsExpanded(!isExpanded)}>
//       <div className="image-container" onClick={() => onPlayToggle(id)}>
//         {!isPlaying && (
//           <div className="image-overlay">
//             <img src={PlayIcon} alt="Play" className="play-button" style={{height: '80px', width: '80px'}}/>
//           </div>
//         )}
//         {video && (
//           <video ref={videoRef} width="100%" height="100%" loop muted style={{ display: isPlaying ? "block" : "none" }}>
//             <source src={video} type="video/mp4" />
//           </video>
//         )}
//         <img src={img.src} alt={img.alt} className="product-img" loading="lazy" decoding="async" style={{ display: isPlaying ? "none" : "block" }} />
//       </div>
//       <div className="product-info inverted-border">
//         <h4 className="product-name">{name}</h4>
//         <h5 className="short-desc">{desc}</h5>
//         <div className="product-button">
//           <Button link={aLink} text={btn} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


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



