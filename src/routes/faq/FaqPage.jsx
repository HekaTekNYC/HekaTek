import FAQ from "../../components/faq/Faq"
import WhyPNG from "../../assets/images/why-us-img.png"
import WhyWebp from "../../assets/images/why-us-img.webp"

import "./faq-page.scss"

const FaqPage = () => {
  return (
    <div className="faqs-page">
      <div className="faqs-bkrnd">
        <picture>
          <source srcSet={WhyWebp} type="image/webp" />
          <source srcSet={WhyPNG} type="image/png" />
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
      <div className="faq-page-container">
        <div className="faq-page-header">
          <h2>FAQ</h2>
          <p>
            Got questions? We've got answers! From payment plans to project
            timelines, our FAQs cover all the essential details to help you feel
            confident about partnering with us.
          </p>
        </div>
        <FAQ />
      </div>
    </div>
  )
}
export default FaqPage
