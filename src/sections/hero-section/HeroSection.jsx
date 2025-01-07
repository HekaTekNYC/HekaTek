import {lazy, Suspense} from "react"

import Button from "../../components/button/Button"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import "./hero-section.scss"

const VideoComponent = lazy(() => import("../../components/video/Video"))

const HeroSection = () => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <>
      <div className="hero-format">
        <div className="hero-container">
          <div className="hero-top">
            <h1 className="hero-section-header">
              ENVISION
              <br />
              INNOVATE
              <br />
              TRANSFORM
            </h1>
            <p className="hero-subheader">
              Unleash the full potential of your online presence with a
              custom-coded website, tailored exclusively for your business.
            </p>
            <Button
              text={"Schedule a Meeting"}
              onClick={openCalendlyPopup}
              btnType={"solid"}
              width={"short"}
            />
          </div>
          <div className="hero-under">
            <div className="hero-video-container">
              <Suspense fallback={<div>Loading...</div>}>
                <VideoComponent
                  src={
                    "https://ik.imagekit.io/snjtzh7cg/Hekatek/abstract-hero-og.mp4?updatedAt=1723124823587"
                  }
                  alt={"abstract purple design"}
                  width="1920"
                  height="1080"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
