import Button from "../../components/button/Button"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import CodeWideWebp from "../../assets/images/wide-code.webp"
import CodeWidePng from "../../assets/images/wide-code.png"
import CodeVertWebp from "../../assets/images/vert-code.webp"
import CodeVertPng from "../../assets/images/vert-code.png"
import CodeRegWebp from "../../assets/images/reg-code.webp"
import CodeRegPng from "../../assets/images/reg-code.png"
import CoralCheckIcon from "../../assets/icons/coral-check.svg"

import "./redefine-section.scss"

const RedefineSection = () => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <div className="choose-us-container">
      <div className="choose-us">
        {/* Left Column */}
        <div className="choose-us-info">
          <h2 className="h2-heading">Redefine Your Digital Presence</h2>
          <p>
            At Hektek, we create fully custom websites tailored to your
            business's unique needs. Built from the ground up, our sites
            prioritize speed, functionality, and a seamless user experience that
            reflects your brand’s identity. We also provide ongoing hosting and
            maintenance to keep your site secure and up-to-date. Whether you’re
            starting fresh or need a redesign, we’re here to help your business
            succeed online.
          </p>

          {/* Benefits List */}
          <ul className="choose-us-benefits">
            <li>
              <img
                src={CoralCheckIcon}
                alt="Checkmark"
                className="check-icon"
              />
              Custom-coded websites built without page builders for top
              performance.
            </li>
            <li>
              <img
                src={CoralCheckIcon}
                alt="Checkmark"
                className="check-icon"
              />
              Designed with SEO best practices to enhance visibility.
            </li>
            <li>
              <img
                src={CoralCheckIcon}
                alt="Checkmark"
                className="check-icon"
              />
              Clear, transparent pricing—no hidden costs.
            </li>
          </ul>
          <Button
            text={"Schedule a Meeting"}
            onClick={openCalendlyPopup}
            btnType={"solid"}
            width={"short"}
          />
        </div>

        {/* Right Column */}
        <div className="choose-us-right">
          <div className="choose-us-image">
            <picture>
              {/* Mobile Image */}
              <source
                srcSet={CodeRegWebp}
                type="image/webp"
                media="(max-width: 767px)"
              />
              <source
                srcSet={CodeRegPng}
                type="image/png"
                media="(max-width: 767px)"
              />
              {/* Tablet Image */}
              <source
                srcSet={CodeWideWebp}
                type="image/webp"
                media="(min-width: 768px) and (max-width: 992px)"
              />
              <source
                srcSet={CodeWidePng}
                type="image/png"
                media="(min-width: 768px) and (max-width: 992px)"
              />
              {/* Desktop Image */}
              <source
                srcSet={CodeVertWebp}
                type="image/webp"
                media="(min-width: 993px)"
              />
              <source
                srcSet={CodeVertPng}
                type="image/png"
                media="(min-width: 993px)"
              />
              <img
                loading="lazy"
                decoding="async"
                src={CodeRegPng}
                alt="desk with laptop with code on the screen"
                width="1400"
                height="932"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedefineSection
