import React from "react"

import "./banner.scss"

const Banner = () => {
  const bannerItems = [
    {text: "WEBSITE DEVELOPMENT"},
    {text: "HOSTING"},
    {text: "RESPONSIVE DESIGN"},
    {text: "SOFTWARE DEVELOPMENT"},
    {text: "DEBUGGING"},
  ]

  return (
    <div className="banner-container">
      {bannerItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className={`ellipse ellipse-${index}`}></div>
          <p className={`banner-text banner-${index}`}>{item.text}</p>
        </React.Fragment>
      ))}
      <div className="ellipse ellipse-6"></div>
    </div>
  )
}

export default Banner
