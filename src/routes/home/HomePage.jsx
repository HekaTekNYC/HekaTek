import HeroSection from "../../sections/hero-section/HeroSection"
import Banner from "../../components/banner/Banner"
import AboutSection from "../../sections/about-section/AboutSection"
import ServicesSection from "../../sections/services-section/ServicesSection"
import ProductsSection from "../../sections/products-section/ProductsSection"
import WhyUsSection from "../../sections/why-us-section/WhyUsSection"
import ContactSection from "../../sections/contact-section/ContactSection"

import "./home-page.scss"

const HomePage = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <HeroSection />
      </section>
      <Banner />
      <section className="about-section">
        <AboutSection />
      </section>
      <section className="services-section">
        <ServicesSection />
      </section>
      <section className="products-section">
        <ProductsSection />
      </section>
      <section className="why-us-section">
        <WhyUsSection />
      </section>

      <section className="contact-section">
        <ContactSection />
      </section>
    </>
  )
}

export default HomePage
