import TechCircle from "../../components/tech-circle/TechCircle"
import Button from "../../components/button/Button"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import WhyPNG from "../../assets/images/why-us-img.png"
import WhyWebp from "../../assets/images/why-us-img.webp"

import "./why-us-section.scss"

const WhyUsSection = () => {
  const openCalendlyPopup = useCalendlyPopup()

  return (
    <>
      <div className="why-us-container">
        <div className="why-left">
          <div className="why-us-bkrnd">
            <picture>
              <source
                srcSet={WhyWebp}
                type="image/webp"
                media="(min-width: 1200px)"
              />
              <source
                srcSet={WhyPNG}
                type="image/png"
                media="(min-width: 1200px)"
              />
              <img
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                src={WhyPNG}
                alt="abstract rainbow wheel"
                height="636"
                width="473"
              />
            </picture>
          </div>
          <div className="tech-circle">
            <TechCircle />
          </div>
        </div>
        <div className="why-info-container">
          <h2 className="why-header">
            Why <br /> HekaTek
          </h2>
          <div className="why-info-text">
            <h4>Tired of Poor Website Experiences?</h4>
            <p className="why-p">
              Investing in a website can be daunting, especially for small
              businesses. Many invest a significant amount upfront, only to be
              disappointed by slow loading times, overused templates, and
              inconsistent displays. This harms visitor experience and your
              brand reputation.
            </p>
            <h4>You Deserve Better</h4>
            <p className="why-p">
              We’ve seen this frustration firsthand. You deserve a professional,
              hand-coded website that truly represents your brand without
              breaking the bank. That’s why we decided to do things differently.
            </p>
            <h4>Our Solution </h4>
            <p className="why-p">
              Get a high-quality, custom-coded website starting at $150 a month,
              providing confidence in your investment. This gives you a fast,
              unique, and reliable online presence. Prefer a one-time payment?
              We offer a lump sum option as well.
            </p>
          </div>

          <Button
            text={"Schedule a Meeting"}
            onClick={openCalendlyPopup}
            btnType={"solid"}
            width={"short"}
          />
        </div>
      </div>
    </>
  )
}

export default WhyUsSection
