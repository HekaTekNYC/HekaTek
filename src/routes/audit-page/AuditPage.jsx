import Button from "../../components/button/Button"
import BackgroundShape from "../../assets/images/pricing-shape.svg?react"
import AuditForm from "../../components/audit-form/AuditForm"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

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
                start. Want to skip straight to a free 30-minute consult? Just
                click the Book a Consult button to schedule time with our team.
              </p>
            </div>
            <div className="audit-btn">
              <Button
                text={"Book a Consult"}
                onClick={openCalendlyPopup}
                btnType={"solid"}
                width={"short"}
              />
            </div>
          </div>
        </div>

        <div className="audit-sign-up">
          <AuditForm />
        </div>
      </div>
    </div>
  )
}

export default AuditPage
