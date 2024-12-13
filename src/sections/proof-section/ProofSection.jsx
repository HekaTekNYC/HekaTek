import {sections, stats} from "../../data/ProofData"
import WorkingPng from "../../assets/images/working.png"
import WorkingWebp from "../../assets/images/working.webp"

import "./proof-section.scss"

const ProofSection = () => {
  return (
    <>
      <div className="proof-page-container">
        <div className="proof-container">
          <div className="proof-header">
            <h2 className="h2-heading">The proof is in the numbers </h2>
            <p>
              There are a myriad of reasons why you should care about your
              website, as shown below. Page builders provide an elementary
              solution to an otherwise vital asset of your business. On top of
              that, you have to manage it yourself. Here's what we do:
            </p>
          </div>

          <div className="proof-body-container">
            <div className="proof-left">
              <picture>
                <source
                  srcSet={WorkingWebp}
                  type="image/webp"
                  media="(min-width: 400px)"
                />
                <source
                  srcSet={WorkingPng}
                  type="image/png"
                  media="(min-width: 400px)"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={WorkingPng}
                  alt="woman looking standing looking at her website on a laptop"
                  sizes="(max-width: 750px) 100vw, 650px"
                  height="700"
                  width="1000"
                />
              </picture>
            </div>
            <div className="proof-right">
              {sections.map((section, index) => (
                <div key={index} className="proof-section">
                  <h4>
                    <span className="section-number">{section.number}</span>
                    {section.title}
                  </h4>
                  <p>{section.content}</p>
                </div>
              ))}
              <div className="stats-container">
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
      </div>
    </>
  )
}

export default ProofSection
