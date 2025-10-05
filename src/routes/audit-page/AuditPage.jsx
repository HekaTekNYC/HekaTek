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

        <h2 className="audit-header">FREE WEBSITE REVIEW</h2>
        <div className="audit-info-container">
          <div className="audit-info">
            <div className="audit-text">
              <h2 className="h2-heading">FIND WHAT'S NOT WORKING</h2>
              <p>
                GGet a focused analysis that reveals the specific design, UX,
                and performance issues holding your website back. We combine
                technical analysis with user experience insights to pinpoint 2-3
                of your most critical opportunities for improvement, delivered
                in a clear, actionable report. This review is your first step
                toward a faster, more engaging, and higher-converting site.
                Submit the form below to get your free review delivered straight
                to your inbox.
              </p>
            </div>
          </div>
        </div>
        <div className="audit-sign-up-container">
          <div className="audit-image">
            <picture>
              <source
                srcSet={LaptopWebp}
                type="image/webp"
                media="(min-width: 300px)"
              />
              <source
                srcSet={LaptopPng}
                type="image/png"
                media="(min-width: 300px)"
              />
              <img
                src={LaptopPng}
                alt="mockup devices with desktop laptop tablet and phone"
                loading="lazy"
                width="700"
                height="1050"
                sizes="(max-width: 700px) 100vw, 700px"
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
