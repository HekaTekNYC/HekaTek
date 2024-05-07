import React, { useState, useEffect } from "react";
import Modal from '../../components/calendly-modal/Modal'
import HeroBkrnd from "../../assets/images/hero-bkrnd.webp";
import Button from "../../components/button/Button";
import "./hero.scss";

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const checkCookies = () => {
      document.cookie = "testcookie";
      if (!document.cookie.includes("testcookie")) {
        setModalOpen(true); // Show modal if cookies are disabled
      }
    };

    checkCookies();
  }, []);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalConfirm = () => {
    window.location.href = "https://calendly.com/hekateknyc"; // Redirect user to Calendly
  };

  const bannerItems = [
    { text: "WEBSITE DEVELOPMENT" },
    { text: "HOSTING" },
    { text: "RESPONSIVE DESIGN" },
    { text: "SOFTWARE DEVELOPMENT" },
    { text: "DEBUGGING" },
  ];

const openCalendlyPopup = () => {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/hekateknyc'
  });
   return false;
    }
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} onConfirm={handleModalConfirm} />
      <div
        className="background-image-container"
        style={{ backgroundImage: `url(${HeroBkrnd})` }}
      ></div>
      <div className="hero-container">
        <header className="hero-header">
          <h1>HEkATEk</h1>
          <h4 className="hero-text">
            Software developers with a passion for bringing your visions to life.
          </h4>
          <Button
            text={"Schedule A Meeting"}
            onClick={openCalendlyPopup}
            btnType={"solid"}
            width={"short"}
          />
        </header>
      </div>

      <div className="banner-container">
        {bannerItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className={`ellipse ellipse-${index}`}></div>
            <h4 className={`banner-text banner-${index}`}>{item.text}</h4>
          </React.Fragment>
        ))}
        <div className="ellipse ellipse-6"></div>
      </div>
    </>
  );
};

export default Hero;


// import React from "react"

// import HeroBkrnd from "../../assets/images/hero-bkrnd.webp"
// import Button from "../../components/button/Button"
// import "./hero.scss"

// const Hero = () => {
//   const bannerItems = [
//     { text: "WEBSITE DEVELOPMENT" },
//     { text: "HOSTING" },
//     { text: "RESPONSIVE DESIGN" },
//     { text: "SOFTWARE DEVELOPMENT" },
//     { text: "DEBUGGING" },
//   ]
//   // Function to open Calendly popup
//   const openCalendlyPopup = () => {
//     if (window.Calendly) {
//       console.log("Calendly script loaded, opening popup.");
//       Calendly.initPopupWidget({ url: 'https://calendly.com/hekateknyc' });
//     } else {
//       console.log("Calendly script not loaded yet.");
//     }
//   };

//   // const openCalendlyPopup = () => {
//   //   console.log("Button clicked, attempting to open Calendly popup");
//   //   Calendly.initPopupWidget({ url: 'https://calendly.com/hekateknyc' });
//   // };

//   // const openCalendlyPopup = () => {
//   //   Calendly.initPopupWidget({
//   //     url: 'https://calendly.com/hekateknyc'
//   //   });
//   //   return false;
//   // }
//   return (
//     <>
//       <div
//         className="background-image-container"
//         style={{
//           backgroundImage: `url(${HeroBkrnd})`,
//         }}
//       ></div>
//       <div className="hero-container">
//         <header className="hero-header">
//           <h1>HEkATEk</h1>
//           <h4 className="hero-text">
//             Software developers with a passion for bringing your visions to
//             life.
//           </h4>
//           <Button
//             text={"Schedule A Meeting"}
//             // scrollToId={"contact"}
//             onClick={openCalendlyPopup}
//             btnType={"solid"}
//             width={"short"}
//           />
//         </header>
//       </div>

//       <div className="banner-container">
//         {bannerItems.map((item, index) => (
//           <React.Fragment key={index}>
//             <div className={`ellipse ellipse-${index}`}></div>
//             <h4 className={`banner-text banner-${index}`}>{item.text}</h4>
//           </React.Fragment>
//         ))}
//         <div className="ellipse ellipse-6"></div>
//       </div>
//     </>
//   )
// }

// export default Hero
