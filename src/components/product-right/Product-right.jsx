import React from "react"
// import Deno from "../../assets/icons/deno.svg"
// import J from "../../assets/icons/javascriptColor.svg"
// import ReactIcon from "../../assets/icons/icons8-react-native.svg"
// import Node1 from "../../assets/icons/node1js.svg"
// import Firebase from "../../assets/icons/firebase.svg"
// import Sass from "../../assets/icons/sass.svg"
// import CSS from "../../assets/icons/css.svg"
// import MongoDB from "../../assets/icons/mongodb.svg"
// import Express from "../../assets/icons/express.svg"
// import Typescript from "../../assets/icons/typescript.svg"
// import Angular from "../../assets/icons/angular.svg"
// import dangoDB from "../../assets/images/dangoDB.png"
import "./product-right.scss"

const ProductRight = ({ name, desc, icons, img, info, btn }) => {
  return (
    <>
      <div className="products-container">
        <div className="product-row">
          <div className="product-left">
            <div className="product-left-text">
              <div className="product-name">{name}</div>
              <div className="product-desc">{desc}</div>
            </div>
            <div className="product-tech-row">
              {icons.map((icon, index) => (
                <div key={index} className="product-icon">
                  <img src={icon.src} alt={alt} />
                  {/* {<icon.component />} */}
                </div>
              ))}
            </div>
          </div>
          <div className="product-right">
            <div className="product-card">
              <div className="product-image-glass">
                <div className="product-image">
                  <img src={img.src} alt={img.alt} />
                </div>
              </div>
              <div className="product-card-text">
                <div className="spacer"></div>
                <div className="product-text">
                  <div className="product-info">{info}</div>
                  <button className="product-btn">{btn}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductRight
