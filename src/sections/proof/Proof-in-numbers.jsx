import React from "react"
import "./proof-in-number.scss"

const ProofPage = () => {
  const sections = [
    {
      number: "01",
      title: "Custom Coded Approach",
      content:
        "At Test Valley Digital, we care too much. Our approach gets around the performance and accessibility issues that are introduced by other platforms. Every line of code results in a beautiful website delivered to your customers and created by a team of world-class developers.",
    },
    {
      number: "02",
      title: "Unlimited Edits",
      content:
        "No more fighting unintuitive interfaces and wasting your valuable time. You've got a business to run! We are just an email or phone call away to do the heavy lifting for you.",
    },
  ]

  const stats = [
    {
      stat: "0.05s",
      description:
        "that's how long people spend forming an opinion about your website.",
    },
    {
      stat: "47%",
      description:
        "of people won't wait longer than 2s for your website to load.",
    },
    {
      stat: "88%",
      description:
        "of people won't return to your site after a bad experience.",
    },
    {
      stat: "54%",
      description: "of web traffic comes from a mobile device.",
    },
  ]
  return (
    <>
      <div className="proof-page-container">
        <div className="proof-container">
          {/* <div className="proof-content"> */}
          <div className="proof-header">
            <h2 className="h2-heading">The proof is in the numbers ...</h2>
            <p>
              There are a myriad of reasons why you should care about your
              website, as shown below. Page builders provide an elementary
              solution to an otherwise vital asset of your business. On top of
              that, you have to manage it yourself. Here's what we do:
            </p>
          </div>
          {/* </div> */}
          {/* </div> */}

          <div className="proof-body-container">
            <div className="proof-left">
              {sections.map((section, index) => (
                <div key={index} className="proof-section">
                  <h4>
                    <span className="section-number">{section.number}</span>
                    {section.title}
                  </h4>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
            <div className="proof-right">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h4>{stat.stat}</h4>
                  <p>{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProofPage
