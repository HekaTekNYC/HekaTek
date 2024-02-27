import React from "react"
import HexagonIcon from "../../components/hexagon-icon/HexagonIcon"
import CSSLogo from "../../assets/icons/CSSLogo.svg"
import Express from "../../assets/icons/express.svg"
import AngularLogo from "../../assets/icons/Angular.svg"
import D3 from "../../assets/icons/d3js-icon.svg"
import Firebase from "../../assets/icons/firebase.svg"
import Github from "../../assets/icons/github-icon.svg"
import Mongo from "../../assets/icons/mongodb.svg"
import Tailwind from "../../assets/icons/tailwindcss.svg"
import ReactIcon from "../../assets/icons/react3.svg"
import JSIcon from "../../assets/icons/javascriptColor.svg"
import Electron from "../../assets/icons/electronjs.svg"
import Deno from "../../assets/icons/deno.svg"
import Typescript from "../../assets/icons/typescript.svg"
import Bootstrap from "../../assets/icons/Bootstrap-128.svg"
import Redux from "../../assets/icons/Redux-48.svg"
import Sass from "../../assets/icons/sass.svg"
import Node from "../../assets/icons/node1js.svg"
import MongoIcon from "../../assets/icons/mongodb.svg"
import Webpack from "../../assets/icons/webpack-144.svg"
import Postgresql from "../../assets/icons/postgresql.svg"
import HTML5Icon from "../../assets/icons/html5.svg"
import RORIcon from "../../assets/icons/Ruby-on-Rails.svg"
import "./tech-stack.scss"

const TechStack = () => {
  const firstRowIcons = [
    { src: Typescript, alt: "Typescript Logo" },
    { src: Deno, alt: "Deno Logo" },
    { src: Electron, alt: "Electron Logo" },
    { src: JSIcon, alt: "JavaScript Logo" },
    { src: ReactIcon, alt: "React Logo" },
    { src: Tailwind, alt: "Tailwind Logo" },
    { src: Redux, alt: "Redux Logo" },
    { src: Sass, alt: "Sass Logo" },
    { src: RORIcon, alt: "Ruby on Rails Logo" },
    { src: HTML5Icon, alt: "HTML5 Logo" },
  ]

  const secondRowIcons = [
    { src: Mongo, alt: "Mongo Logo" },
    { src: Github, alt: "Github Logo" },
    { src: Firebase, alt: "Firebase Logo" },
    { src: AngularLogo, alt: "Angular Logo" },
    { src: Express, alt: "Express Logo" },
    { src: CSSLogo, alt: "CSS Logo" },
    { src: Bootstrap, alt: "Bootstrap Logo" },
    { src: Node, alt: "Node Logo" },
    { src: Webpack, alt: "Webpack Logo" },
    { src: Postgresql, alt: "Postgresql Logo" },
  ]

  const renderIcons = (icons) => (
    <>
      {icons.map((icon, index) => (
        <HexagonIcon
          icon={icon}
          key={`icon-${index}`}
          loading="lazy"
          decoding="async"
        />
      ))}
      {icons.map((icon, index) => (
        <HexagonIcon
          icon={icon}
          key={`icon-dup-${index}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </>
  )

  return (
    <div className="tech-stack-container">
      <div className="row-container row-1">
        <div className="scrolling-row">
          <div className="scrolling-icons">{renderIcons(firstRowIcons)}</div>
        </div>
      </div>
      <div className="row-container row-2">
        <div className="scrolling-row">
          <div className="scrolling-icons">{renderIcons(secondRowIcons)}</div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
