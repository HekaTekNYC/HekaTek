import "./audit-page.scss"

const AuditPage = () => {
  return (
    <div id="audit" className="audit-page">
      <div className="audit-page-container">
        <div className="audit-page-background">
          <BackgroundShape />
        </div>

        <h2 className="audit-header">audit</h2>
        <div className="audit-build-container">
          <div className="audit-build-info">
            <div className="audit-build-text">
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
            <div className="audit-build-btn">
              <Button
                text={"Contact Us"}
                to="/contact"
                btnType={"solid"}
                width={"short"}
              />
            </div>
          </div>
          <div
            className="audit-build-cards-container"
            onMouseLeave={handleMouseLeave}
          >
            {auditCards.map(card => (
              <auditCard
                key={card.id}
                {...card}
                isActive={activeCard === card.id}
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={handleMouseLeave}
                btnType={activeCard === card.id ? "solid" : "outline"}
              />
            ))}
          </div>
        </div>
        <div className="add-on-container">
          <div className="add-on-info">
            <div className="add-on-text-container">
              <h2 className="h2-heading">ADD-ON SERVICES</h2>
              <p>
                Enhance your plan with our customizable add-ons, designed to
                support your unique business needs. From ongoing support to
                additional features, we can help you build the perfect package
                for your website.
              </p>
            </div>
          </div>
          <div className="add-on-cards-container">
            {addOnCards.map(card => (
              <div key={card.id}>
                <AddOnCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditPage
