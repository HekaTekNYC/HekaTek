import {sections, stats} from "../../data/ProofData"
import User from "../../assets/images/hands.png"

import "./proof-in-number.scss"

const ProofPage = () => {
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
              <img src={User} alt="" />
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

export default ProofPage
