import Button from "../../components/button/Button"
import BackgroundShape from "../../assets/images/pricing-shape.svg?react"
import AuditForm from "../../components/audit-form/AuditForm"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import LaptopWebp from "../../assets/images/business-laptop.webp"
import LaptopPng from "../../assets/images/business-laptop.png"

import "./audit-page.scss"

const AuditPage = () => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <div id="audit" className="audit-page">
      <div className="audit-page-container">
        <div className="audit-page-background">
          <BackgroundShape />
        </div>

        <h2 className="audit-header">FREE WEBSITE AUDIT</h2>
        <div className="audit-info-container">
          <div className="audit-info">
            <div className="audit-text">
              <h2 className="h2-heading">WEBSITE AUDIT VIDEO</h2>
              <p>
                We’ll record a personalized video audit of your website, walking
                through everything from design and user experience to
                performance, accessibility, and SEO basics. You’ll get clear,
                actionable insights on what’s working and what could be
                improved—no buzzwords, no fluff. Just honest, expert feedback
                you can use right away. Whether you’re planning a full revamp or
                just want a second opinion, this audit is a great place to
                start. Prefer to skip the audit and talk with us directly? Just
                click Get Started to reach out—we’d love to hear about your
                goals.
              </p>
            </div>
            <div className="audit-btn">
              <Button
                text={"Get Started"}
                onClick={openCalendlyPopup}
                btnType={"solid"}
                width={"short"}
              />
            </div>
          </div>
        </div>
        <div className="audit-sign-up-container">
          <div className="audit-image">
            <picture>
              <source
                srcSet={LaptopWebp}
                type="image/webp"
                media="(min-width: 400px)"
              />
              <source
                srcSet={LaptopPng}
                type="image/png"
                media="(min-width: 400px)"
              />
              <img
                src={LaptopPng}
                alt="mockup devices with desktop laptop tablet and phone"
                loading="lazy"
                sizes="(max-width: 750px) 100vw, 650px"
                height="600"
                width="400"
              />
            </picture>
          </div>
          <div className="audit-sign-up">
            <AuditForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditPage
