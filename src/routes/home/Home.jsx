import Hero from "../hero/Hero"
import Banner from "../../components/banner/Banner"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <Hero />
      </div>
      <Banner />
    </>
  )
}

export default Home
