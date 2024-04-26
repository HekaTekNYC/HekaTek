// import React from "react"
// import "./button.scss"

// const Button = ({ text, href, type, btnType, width }) => {
//   const buttonProps = {}
//   const buttonClass = `btn-${btnType === "solid" ? "solid" : "outline"}`
//   const btnWidth = `btn-${width === "full" ? "full" : "short"}`
//   if (type) {
//     buttonProps.type = type
//   }
//   if (href) {
//     buttonProps.href = href
//   }

//   return (
//     <div className={`${buttonClass} ${btnWidth}`}>
//       <a {...buttonProps} target="_blank">
//         {text}
//       </a>
//     </div>
//   )
// }

// export default Button

import React from "react"
import "./button.scss"
const Button = ({ text, href, type, btnType, width }) => {
  const buttonClass = `btn-${btnType === "solid" ? "solid" : "outline"}`
  const btnWidth = `btn-${width === "full" ? "full" : "short"}`

  if (href) {
    return (
      <div className={`${buttonClass} ${btnWidth}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    )
  } else {
    const buttonType = type || "button"
    return (
      <button
        type={buttonType}
        className={`${buttonClass} ${btnWidth} btn-over`}
      >
        {text}
      </button>
    )
  }
}

export default Button
