import FAQ from "../../components/faq/Faq"

import WhyPNG from "../../assets/images/why-us-img.png"
import WhyWebp from "../../assets/images/why-us-img.webp"

import "./faq-page.scss"

const FaqPage = () => {
  console.log({WhyPNG, WhyWebp})
  return (
    <div id="faq" className="faqs-page">
      <div className="faqs-bkrnd">
        <picture>
          <source srcSet={WhyWebp} type="image/webp" />
          <source srcSet={WhyPNG} type="image/png" />
          <img
            loading="lazy"
            decoding="async"
            src={WhyPNG}
            alt="abstract rainbow wheel"
            height="636"
            width="473"
            aria-hidden="true"
            // crossOrigin="anonymous"
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
