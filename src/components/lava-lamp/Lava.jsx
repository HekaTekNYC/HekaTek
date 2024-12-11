import React from "react"
import "./lava.scss"

const Lava = () => {
  return (
    <div>
      <div className="lava-container">
        <div className="glow"></div>
        <div className="frame">
          <div className="top"></div>
          <div className="body-lamp">
            <div className="gooey">
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              {/* <div className="blob"></div>
              <div className="blob"></div> */}
            </div>
          </div>
          <div className="base-lamp"></div>
          <div className="base"></div>
        </div>
      </div>
    </div>
  )
}

export default Lava
