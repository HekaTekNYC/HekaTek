import Hero from "../hero/Hero"
import Banner from "../../components/banner/Banner"
import "./home.scss"
import About from "../about/About"
import Services from "../services/Services"
import Products from "../products/Products"
import ContactPage from "../contact/ContactPage"
import WhyUs from "../why-us/WhyUs"
import PricingPlans from "../pricing-plans/PricingPlans"

const Home = ({refs}) => {
  return (
    <>
      <section className="hero-section">
        <Hero />
      </section>
      <Banner />
      <section ref={refs.aboutRef} id="about" className="about-section">
        <About />
      </section>
      <section
        ref={refs.servicesRef}
        id="services"
        className="services-section"
      >
        <Services />
      </section>
      <section ref={refs.productsRef} id="our-work" className="product-section">
        <Products />
      </section>
      <section id="why-us" className="why-us-section">
        <WhyUs />
      </section>
      <section id="pricing-plans" className="pricing-section">
        <PricingPlans />
      </section>
      <section id="contact" className="contact-section">
        <ContactPage />
      </section>
    </>
  )
}

export default Home
