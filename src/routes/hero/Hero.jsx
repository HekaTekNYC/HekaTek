import React, { useEffect, useState } from "react";
import Lava from "../../components/lava/Lava";
import "./hero.scss";

const Hero = () => {
  const LazyLoadedLava = React.lazy(() => import("../../components/lava/Lava.jsx"));

  const [showLavaAnimation, setShowLavaAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("lamp-anim");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth;

      if (isVisible) {
        setShowLavaAnimation(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="lava-container">
          <Lava />
        </div>
        <header className="hero-header">
          <h1>HekaTek</h1>
          <h2 className="hero-text">
            FREELANCE SOFTWARE DEVELOPERS WITH A PASSION FOR BRINGING YOUR
            VISIONS TO LIFE.
          </h2>
        </header>
        {showLavaAnimation && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyLoadedLava />
          </React.Suspense>
        )}
      </div>
    </>
  );
};

export default Hero;
