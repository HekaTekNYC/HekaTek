import React from "react"
import "./lava-lamp.scss"

const LavaLamp = () => {
  return (
    <div className="lava-lamp-404">
      <div className="lava-lamp">
        <div className="lamp-top"></div>
        <div className="lamp-body">
          <div className="lamp-bubbles">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
          </div>
        </div>
        <div className="lamp-base"></div>
      </div>
      <h1 className="error-code">404</h1>
      <p className="error-message">Take a deep long breath...</p>
      <button
        className="back-button"
        onClick={() => (window.location.href = "/")}
      >
        Back to home
      </button>
    </div>
  )
}

export default LavaLamp
