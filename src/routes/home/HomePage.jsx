import HeroSection from "../../sections/hero-section/HeroSection"
import Banner from "../../components/banner/Banner"
import AboutSection from "../../sections/about-section/AboutSection"
import ServicesSection from "../../sections/services-section/ServicesSection"
import ProductsSection from "../../sections/products-section/ProductsSection"
import WhyUsSection from "../../sections/why-us-section/WhyUsSection"
import PricingSection from "../../sections/pricing-section/PricingSection"
import ContactSection from "../../sections/contact-section/ContactSection"
import FAQ from "../../components/faq/Faq"
import "./home-page.scss"

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <HeroSection />
      </section>
      <Banner />
      <section id="about" className="about-section">
        <AboutSection />
      </section>
      <section id="services" className="services-section">
        <ServicesSection />
      </section>
      <section id="our-work" className="products-section">
        <ProductsSection />
      </section>
      <section id="why-us" className="why-us-section">
        <WhyUsSection />
      </section>
      <section id="pricing-plans" className="pricing-section">
        <PricingSection />
      </section>
      <section id="contact" className="contact-section">
        <ContactSection />
      </section>
      <FAQ />
    </>
  )
}

export default HomePage
