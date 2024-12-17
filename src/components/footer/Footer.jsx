import GitHubFooter from "../../assets/icons/github.svg"
import EmailIcon from "../../assets/icons/email.svg"

import "./footer.scss"

const Footer = () => {
  return (
    <>
      <div className="footer-format">
        <footer className="footer-container">
          <h3 className="footer-logo">HEKATEK</h3>
          <div className="copyright">
            <p>&copy; 2024 Hekatek | All rights reserved.</p>
          </div>
          <div className="footer-icons">
            <a href="mailto:hekatek@hekateknyc.com" className="email-icon">
              <img src={EmailIcon} alt="Email icon" />
            </a>
            <a
              href="https://github.com/HekaTekNYC"
              target="_blank"
              className="github-icon"
            >
              <img src={GitHubFooter} alt="Github icon" />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
