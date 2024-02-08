import React from "react"

import ProductRight from "../../components/product-right/Product-right.jsx"
import ProductLeft from "../../components/product-left/Product-left.jsx"
import {
  plantHaus,
  interviewIQ,
  dangoDB,
  ad3lie,
} from "../../data/ProductData.jsx"

import Spacepink from "../../assets/images/pink_space2.png"

import "./products.scss"

const Products = () => {
  return (
    <>
      <div className="products-container">
        <div className="products-header">OUR WORK</div>
        <ProductRight
          name={plantHaus.name}
          desc={plantHaus.desc}
          icons={plantHaus.icons}
          img={plantHaus.img}
          info={plantHaus.info}
          btn={plantHaus.btn}
          aLink={plantHaus.aLink}
          isCurrentWork={plantHaus.isCurrentWork}
        />
        <div className="space-relative">
          <div className="space3-layer">
            <img src={Spacepink} alt={"space"} className="fuck3" />
          </div>
          <div className="product-layer">
            <ProductLeft
              name={ad3lie.name}
              desc={ad3lie.desc}
              icons={ad3lie.icons}
              img={ad3lie.img}
              info={ad3lie.info}
              btn={ad3lie.btn}
              aLink={ad3lie.aLink}
              isCurrentWork={ad3lie.isCurrentWork}
            />
            <ProductRight
              name={dangoDB.name}
              desc={dangoDB.desc}
              icons={dangoDB.icons}
              img={dangoDB.img}
              info={dangoDB.info}
              btn={dangoDB.btn}
              aLink={dangoDB.aLink}
              isCurrentWork={dangoDB.isCurrentWork}
            />
          </div>
        </div>
        <ProductLeft
          name={interviewIQ.name}
          desc={interviewIQ.desc}
          icons={interviewIQ.icons}
          img={interviewIQ.img}
          info={interviewIQ.info}
          btn={interviewIQ.btn}
          aLink={interviewIQ.aLink}
          isCurrentWork={interviewIQ.isCurrentWork}
        />
      </div>
    </>
  )
}

export default Products
