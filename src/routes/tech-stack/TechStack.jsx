import React from "react"
import HexagonIcon from "../../components/hexagon-icon/HexagonIcon"
import CSSLogo from "../../assets/icons/css-96.svg"
import Express from "../../assets/icons/express.svg"
import AngularLogo from "../../assets/icons/Angular.svg"
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
import Webpack from "../../assets/icons/webpack.svg"
import Postgresql from "../../assets/icons/postgresql.svg"
import HTML5Icon from "../../assets/icons/html5.svg"
import RORIcon from "../../assets/icons/Ruby-on-Rails.svg"
import "./tech-stack.scss"

const TechStack = () => {
  const firstRowIcons = [
    { src: Typescript, alt: "Typescript Logo", name: "Typescript" },
    { src: Deno, alt: "Deno Logo", name: "Deno" },
    { src: Electron, alt: "Electron Logo", name: "Electron" },
    { src: JSIcon, alt: "JavaScript Logo", name: "JavaScript" },
    { src: ReactIcon, alt: "React Logo", name: "React" },
    { src: Tailwind, alt: "Tailwind Logo", name: "Tailwind" },
    { src: Redux, alt: "Redux Logo", name: "Redux" },
    { src: Sass, alt: "Sass Logo", name: "Sass" },
    { src: RORIcon, alt: "Ruby on Rails Logo", name: "RoR" },
    { src: HTML5Icon, alt: "HTML5 Logo", name: "HTML5" },
  ]

  const secondRowIcons = [
    { src: Mongo, alt: "Mongo Logo", name: "MongoDB" },
    { src: Github, alt: "Github Logo", name: "Github" },
    { src: Firebase, alt: "Firebase Logo", name: "Firebase" },
    { src: AngularLogo, alt: "Angular Logo", name: "Angular" },
    { src: Express, alt: "Express Logo", name: "Express" },
    { src: CSSLogo, alt: "CSS Logo", name: "CSS3" },
    { src: Bootstrap, alt: "Bootstrap Logo", name: "Bootstrap" },
    { src: Node, alt: "Node Logo", name: "Node.js" },
    { src: Webpack, alt: "Webpack Logo", name: "Webpack" },
    { src: Postgresql, alt: "Postgresql Logo", name: "PSQL" },
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
      <div className="tech-row-container row-1">
        <div className="scrolling-row">
          <div className="scrolling-icons">{renderIcons(firstRowIcons)}</div>
        </div>
      </div>
      <div className="tech-row-container row-2">
        <div className="scrolling-row">
          <div className="scrolling-icons">{renderIcons(secondRowIcons)}</div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
