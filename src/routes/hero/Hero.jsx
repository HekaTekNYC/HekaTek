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
        // style={{backgroundImage: `url(${HeroBkrnd})`}}
        style={
          {
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721245293/hero-bkrnd_rhmhf5.webp')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721243739/glass1_ehmcnv.png')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721245566/AdobeStock_659550154_Preview_apkfws.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721245721/AdobeStock_840576758_Preview_rmgs1x.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721245866/AdobeStock_571278490_Preview_yfurwc.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721245879/AdobeStock_861858498_Preview_ktxblo.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246195/AdobeStock_627768064_Preview_z2lpuc.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721245946/AdobeStock_858414520_Preview_fev6tv.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246366/AdobeStock_765488503_Preview_wpwkgl.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246366/AdobeStock_853512033_Preview_rmzqtw.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246668/AdobeStock_800623628_Preview_fyfiyu.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246669/AdobeStock_848749451_Preview_bzsfsx.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246922/AdobeStock_856226206_Preview_ourvd8.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246914/AdobeStock_611828090_Preview_dtdki0.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721246922/AdobeStock_856226206_Preview_ourvd8.jpg')`,
            // backgroundImage: `url('')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721251040/AdobeStock_747934197_Preview_paezhl.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721248583/AdobeStock_611828092_Preview_yfvhnk.jpg')`,
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721248159/AdobeStock_861858554_Preview_1_iyemuc.jpg')`,
            // LIKE THIS ONE
            // backgroundImage: `url('https://res.cloudinary.com/daecnx7ih/image/upload/v1721247811/AdobeStock_766620441_Preview_g1awqz.jpg')`,
          }
        }
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
            exceptional results from $150/month.
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
