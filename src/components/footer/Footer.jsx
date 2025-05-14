import LinkedInIcon from "../../assets/icons/linked-in.svg"
import FacebookIcon from "../../assets/icons/facebook.svg"
import EmailIcon from "../../assets/icons/email.svg"

import "./footer.scss"

const Footer = () => {
  return (
    <>
      <div className="footer-format">
        <footer className="footer-container">
          <h3 className="footer-logo">Hekatek</h3>
          <div className="copyright">
            <p>&copy; 2025 Hekatek | All rights reserved.</p>
          </div>
          <div className="footer-icons">
            <a href="mailto:hekatek@hekateknyc.com" className="email-icon">
              <img src={EmailIcon} alt="Email icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574547905066"
              target="_blank"
              className="facebook-icon"
            >
              <img src={FacebookIcon} alt="Facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/hekatek-nyc"
              target="_blank"
              className="linkedin-icon"
            >
              <img src={LinkedInIcon} alt="LinkedIn icon" />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
