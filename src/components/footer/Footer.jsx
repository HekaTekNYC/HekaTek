import React from "react"
import LinkedIn from "../../assets/icons/linked-in.svg"
import EmailIcon from "../../assets/icons/email.svg"
import GitHubFooter from "../../assets/icons/github.svg"
import FooterClr from "../../assets/images/footer-1.svg"

import "./footer.scss"

const Footer = () => {
  return (
    <>
      {/* <div className="footer-blob-container">
        {" "}
        <div className="footer-image">
          <img src={FooterClr} alt="" />
        </div>
      </div> */}
      <footer className="footer-container">
        <h3 className="footer-logo">HEKATEK</h3>

        <div className="copyright">
          <p>&copy; 2024 HekaTek | All rights reserved.</p>
        </div>
        <div className="footer-icons">
          <div className="linkedin-icon">
            <img src={LinkedIn} alt="Linkedin icon" />
          </div>
          <div className="email-icon">
            <img src={EmailIcon} alt="Email icon" />
          </div>
          <div className="github-icon">
            <img src={GitHubFooter} alt="Github icon" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
