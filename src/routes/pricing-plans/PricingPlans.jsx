import React from 'react'
import './pricing-plans.scss'

const PricingPlans = () => {
    return (
        <div>
            <div className="pricing-container">
                <div className="pricing-header">
                    <div className="pricing-text">
                        <h2>Pricing Plans</h2>
                    </div>
                    <div className="pricing-text">
                        <p>
                            We offer a monthly subscription, lump sum, and e-commerce pricing. Please contact us for price inuqiries on our E-Comm models.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pricing-cards-container">
                <div className="pricing-card">
                    <div className="pricing-sub-title">
                        <p>SUBSCRIPTION</p>
                    </div>
                    <div className="pricing-sub-amount">
                        <p>$175/month </p>
                    </div>
                    <div className="pricing-sub-design-amount">
                        <p>$350 </p>
                    </div>
                    <div className="pricing-sub-design-text">
                        <p>One time design fee</p>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-lump-title">
                        <p>LUMP SUM</p>
                    </div>
                    <div className="pricing-lump-amount">
                        <p>$1800</p>
                    </div>

                </div>
                <div className="pricing-card">
                    <div className="pricing-ecomm-title">
                        <p>ECOMM MODEL</p>
                    </div>
                    <div className="pricing-ecomm-amount">
                        <p>INQUIRE BELOW</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlans
