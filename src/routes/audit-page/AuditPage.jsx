import "./audit-page.scss"

const AuditPage = () => {
  return (
    <div id="audit" className="audit-page">
      <div className="audit-page-container">
        <div className="audit-page-background">
          <BackgroundShape />
        </div>

        <h2 className="audit-header">audit</h2>
        <div className="audit-info-container">
          <div className="audit-info">
            <div className="audit-text">
              <h2 className="h2-heading">BUILD YOUR PLAN</h2>
              <p>
                Our audit is designed to fit your needs, offering monthly
                subscription and one-time lump sum options, as well as tailored
                audit for e-commerce websites. You can personalize each plan
                with add-ons, like unlimited edits or a blog, to best suit your
                business needs. We pride ourselves on transparent audit with no
                hidden costs, ensuring you have a clear understanding of your
                investment. Contact us to find the best option for your
                business.
              </p>
            </div>
            <div className="audit-btn">
              <Button
                text={"Contact Us"}
                to="/contact"
                btnType={"solid"}
                width={"short"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditPage
