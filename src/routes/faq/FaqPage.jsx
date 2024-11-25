import FAQ from "../../components/faq/Faq"
import "./faq-page.scss"

const FaqPage = () => {
  return (
    <div className="faqs-page">
      <div className="faq-page-container">
        <div className="faq-page-header">
          <h2 className="h2-heading">Frequently Asked Questions</h2>
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
