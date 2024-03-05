import React, {useState} from "react"

import ProductCard from "../../components/product-cards/ProductCard"
import { plantHaus, interviewIQ, dangoDB, ad3lie } from "../../data/ProductData"
import "./products.scss"

const Products = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  // const [activeCard, setActiveCard] = useState(null);

  // const handlePlayToggle = (id) => {
  //   setPlayingVideoId(prevId => prevId === id ? null : id);
  //   // This toggles the video play state. If the same ID is clicked again, it stops the video.
  // };

  const handlePlayToggle = (id) => {
     console.log('Toggle Play:', id);
    setPlayingVideoId((prevId) => {
    const newId = prevId === id ? null : id;
 console.log('New Playing Video ID:', newId);
  return newId;
 });
 };

  // // Checking if the current card is active
  // const handleCardTouch = (id) => {
  //   console.log('Toggle Active Card:', id);
  //   setActiveCard((prevId) => {
  //     const newId = prevId === id ? null : id;
  //     console.log('New Active Card ID:', newId);
  //     return newId;
  //   });
  // };


  // If the card is not active, stop the video and set the active card to null
  // const handleCardTouchEnd = () => {
  //   console.log('Touch End');
  //   // Check if activeCard has changed and reset state accordingly
  //   if (activeCard !== null) {
  //     setActiveCard(null);
  //     console.log('checking ActiveCard STate', activeCard);
  //     setPlayingVideoId(null); // Stop the video
  //     console.log('checking Playing Video State', playingVideoId);
  //   }
  // };


  return (
    <div className="products-container">
      <h2>OUR WORK</h2>
      <div className="product-row">
        {[plantHaus, interviewIQ, dangoDB, ad3lie].map((product) => (
          <div className="product-container" key={product.id}>
            <ProductCard
              {...product}
        
              onPlayToggle={() => handlePlayToggle(product.id)}
              isPlaying={playingVideoId === product.id}

              // isTouched={activeCard === product.id}
              // onTouchStart={() => handleCardTouch(product.id)}
              // onTouchCancel={() => handleCardTouchEnd()} 
              />
              
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products


// const ProductCard = ({ product, isActive, onSelect }) => {
//   const handleTouch = () => {
//     onSelect(product.id);
//   };

//   return (
//     <div className={`card ${isActive ? 'active' : ''}`} onTouchStart={handleTouch}>
//       {isActive ? (
//         // Render video/gif
//         <video /* video props */ />
//       ) : (
//         // Render image with overlay
//         <div className="overlay">PREVIEW</div>
//       )}
//       <img src={product.img} alt={product.name} className={`product-img ${isActive ? 'hidden' : ''}`} />
//       {/* Other card content */}
//     </div>
//   );
// };