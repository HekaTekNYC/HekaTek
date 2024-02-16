import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import ProductCard from "../../components/product-cards/ProductCard";
import { plantHaus, interviewIQ, dangoDB, ad3lie } from "../../data/ProductData";
import "./products.scss";

const Products = () => {
  const [showHeader, setShowHeader] = useState(true);
  const parallaxRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const parallaxOffsetTop = parallaxRef.current.getBoundingClientRect().top;

  //     setShowHeader(parallaxOffsetTop <= 0);
  //   };

  //   document.addEventListener('scroll', handleScroll);

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="products-container">
      <h2 >OUR WORK</h2>
      <div className="parallax-container" ref={parallaxRef}>
        <Parallax pages={4} className={'parallax-remove-scrollbar'} style={{ height: '110vh'}}>
          {[plantHaus, ad3lie, dangoDB, interviewIQ].map((product, index) => (
            <ParallaxLayer key={index} offset={index} speed={0.05}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "110%'"}}>
                <ProductCard
                  name={product.name}
                  desc={product.desc}
                  icons={product.icons}
                  img={product.img}
                  info={product.info}
                  btn={product.btn}
                  aLink={product.aLink}
                  isCurrentWork={product.isCurrentWork}
                />
              </div>
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
    </div>
  );
};

export default Products;



