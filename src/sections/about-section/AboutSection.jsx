import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"
import Button from "../../components/button/Button"

import AboutBkrd from "../../assets/images/about-bkg.svg"
import Devicewebp from "../../assets/images/allDevices.webp"
import Devicepng from "../../assets/images/allDevices.png"

import "./about-section.scss"

const AboutSection = () => {
  const openCalendlyPopup = useCalendlyPopup()

  return (
    <>
      <div className="about-page-container" id="about">
        <div className="about-blob-container">
          <div className="about-bkrnd-img">
            <img
              loading="lazy"
              decoding="async"
              src={AboutBkrd}
              alt="bright blue and dark blue blurred blob"
            />
          </div>
        </div>
        <div className="about-left">
          <div className="about-img-container">
            <picture>
              <source
                srcSet={Devicewebp}
                type="image/webp"
                media="(min-width: 400px)"
              />
              <source
                srcSet={Devicepng}
                type="image/png"
                media="(min-width: 400px)"
              />
              <img
                loading="lazy"
                decoding="async"
                src={Devicepng}
                alt="mockup devices with desktop laptop tablet and phone"
                sizes="(max-width: 750px) 100vw, 650px"
                height="689"
                width="1097"
              />
            </picture>
          </div>
        </div>
        <div className="about-info-container">
          <h2 className="about-header">
            ABOUT <br /> HEKATEK
          </h2>
          <div className="about-indent">
            <h4 className="about-subheader">
              Empowering Small Businesses Through Expert Web Development
            </h4>
            <p className="about-p">
              At Hekatek, we’re here to change the narrative for small
              businesses stuck with overpriced, poorly designed websites that
              fail to deliver results. Many companies charge a premium for
              subpar solutions, leaving business owners frustrated and
              underserved. As a community-driven, woman-owned business, we’re
              passionate about offering affordable, expertly crafted websites
              that are modern, secure, and built to help your business thrive.
              Let us provide the solution you deserve—one that works and doesn’t
              break the bank!
            </p>
            <Button
              text={"Schedule a Meeting"}
              onClick={openCalendlyPopup}
              btnType={"solid"}
              width={"short"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
