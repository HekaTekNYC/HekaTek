import React from "react"
import Hero from "../hero/Hero"
import About from "../about/About"
import Products from "../products/Products"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import WhyUs from "../why-us/WhyUs"
import PricingPlans from "../pricing-plans/PricingPlans"
import Banner from "../../components/banner/Banner"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="hero-section" id="home">
        <div className="left-container">
          {/* <img
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721679951/AdobeStock_670174501_Preview_dyipkg.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721679862/AdobeStock_586277951_Preview_rzj5pe.png"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721342070/AdobeStock_572671892_Preview_djncuw.png"
            src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721679756/AdobeStock_636245453_Preview_swndrg.png"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721679317/AdobeStock_488213044_Preview_hixaxe.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721247811/AdobeStock_766620441_Preview_g1awqz.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721408100/glass-violet_ungwkn.webp"
            alt=""
          /> */}
          <div className="right-container">
            <video
              // style={{
              //   // width: "1400px",
              //   height: "100%",
              //   objectFit: "cover",
              //   objectAlign: " center center",
              // }}
              loop
              autoPlay
              muted
            >
              <source
                src="https://res.cloudinary.com/daecnx7ih/video/upload/v1721748930/AdobeStock_602341088_Video_4K_Preview_huen0u.mp4"
                // Taffy Purple OG
                // src="https://res.cloudinary.com/daecnx7ih/video/upload/v1721747878/AdobeStock_646812436_Video_HD_Preview_gu1h3l.mp4"
                // Taffy teal with peach
                // src="https://res.cloudinary.com/daecnx7ih/video/upload/v1721749086/AdobeStock_631053005_Video_HD_Preview_yxoa9d.mp4"
                // src="https://res.cloudinary.com/daecnx7ih/video/upload/v1721749846/AdobeStock_617504363_Video_HD_Preview_qtotbv.mp4"
                // src="https://res.cloudinary.com/daecnx7ih/video/upload/v1721750103/AdobeStock_580350011_Video_4K_Preview_cddcux.mp4"
                // large rainbow wave
                // src="https://res.cloudinary.com/daecnx7ih/video/upload/v1721689508/AdobeStock_637475878_Video_HD_Preview_zq7jcl.mp4"
                // skinny
                // rainbo
                // wave
                // src="https://res.cloudinary.com/daecnx7ih/video/upload/v1721686250/AdobeStock_636905902_Video_HD_Preview_xfftqn.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <Hero />
      </div>
      <Banner />
      <div className="about-section" id="about">
        <About />
      </div>
      <div className="services-section" id="services">
        <Services />
      </div>
      <div className="product-section" id="our-work">
        <Products />
      </div>
      <div className="why-us-section" id="why-us">
        <WhyUs />
      </div>
      <div className="pricing-section" id="pricing">
        <PricingPlans />
      </div>
      <div className="contact-section" id="contact">
        <Contact />
      </div>
    </>
  )
}

export default Home
