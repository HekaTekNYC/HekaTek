import React, {useState, useEffect} from "react"
import Modal from "../../components/calendly-modal/Modal"
import HeroBkrnd from "../../assets/images/hero-bkrnd.webp"
import Button from "../../components/button/Button"
import "./hero.scss"

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const checkCookies = () => {
      document.cookie = "testcookie"
      if (!document.cookie.includes("testcookie")) {
        setModalOpen(true)
      }
    }

    checkCookies()
  }, [])

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalConfirm = () => {
    window.location.href = "https://calendly.com/hekateknyc"
  }

  const bannerItems = [
    {text: "WEBSITE DEVELOPMENT"},
    {text: "HOSTING"},
    {text: "RESPONSIVE DESIGN"},
    {text: "SOFTWARE DEVELOPMENT"},
    {text: "DEBUGGING"},
  ]

  const openCalendlyPopup = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/hekatek-hekateknyc/30min",
    })
    return false
  }
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
      <div
        className="background-image-container"
        style={{backgroundImage: `url(${HeroBkrnd})`}}
      ></div>
      <div className="hero-container">
        <header className="hero-header">
          <h1>HEKATEk</h1>

          {/* Software developers with a passion for bringing your visions to
            life. */}
          <h4 className="hero-subheader">
            {" "}
            Web Design & Development tailored for small businesses.{" "}
          </h4>
          <h4 className="hero-text">
            No Wordpress, no page builders, just hand-coded websites with
            exceptional results from $175/month.
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
  )
}

export default Hero
