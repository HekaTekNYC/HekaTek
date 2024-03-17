import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-email">
            <p>hekateknyc@gmail.com</p>
          </div>
          <div className="service-footer-section">
            <div className="services-footer">Website Development</div>
            <div className="services-footer">Website Hosting</div>
            <div className="services-footer">Software Development</div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 HekaTek | All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
