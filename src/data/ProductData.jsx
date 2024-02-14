import dangoDBI from "../assets/images/dangoDB.png"
// import Deno from "../assets/icons/deno.svg"
import DangoDeno from "../assets/icons/DangoDeno.svg"
import DangoSass from "../assets/icons/DangoSass.svg"
import Firebase from "../assets/icons/firebase.svg"
import IQJS from "../assets/icons/IQJS.svg"
import AReact from "../assets/icons/AReact.svg"
import DangoReact from "../assets/icons/DangoReact.svg"
import DangoNode from "../assets/icons/DangoNode.svg"
import IQNode from "../assets/icons/IQNode.svg"
import J from "../assets/icons/javascriptColor.svg"
import PHJS from "../assets/icons/PHJS.svg"
import PHNode1 from "../assets/icons/PHNode.svg"
import PHSass from "../assets/icons/PHSass.svg"
import PHReactIcon from "../assets/icons/PHReactIcon.svg"
import PHFirebase from "../assets/icons/PHFirebase.svg"
import Node1 from "../assets/icons/node1js.svg"
import ReactIcon from "../assets/icons/icons8-react-native.svg"
import IQReact from "../assets/icons/IQReact.svg"
import Sass from "../assets/icons/sass.svg"
import CSSLogo from "../assets/icons/CSSLogo.svg"
import IQCSS from "../assets/icons/IQCSS.svg"
import MongoDB from "../assets/icons/mongodb.svg"
import IQMongoDB from "../assets/icons/IQMongo.svg"
import Express from "../assets/icons/express.svg"
import Typescript from "../assets/icons/typescript.svg"
import D3 from "../assets/icons/d3js-icon.svg"
import AD3 from "../assets/icons/AD.svg"
import ATailwind from "../assets/icons/ATailwind.svg"
import Tailwind from "../assets/icons/tailwindcss.svg"
import Electron from "../assets/icons/electronjs.svg"
import AElectron from "../assets/icons/AElectron.svg"
import Ad3lie from "../assets/images/Ad3lie.png"
import IIQ from "../assets/images/IIQ.png"
import Topy from '../assets/images/Topy.png'
export const plantHaus = {
  name: "Plant Haus",
  desc: "Full Stack E-commerce Plant Shop.",
  icons: [
    {
      src: PHSass,
      alt: "Sass logo",
    },
    {
      src: PHReactIcon,
      alt: "React logo",
    },
    {
      src: PHJS,
      alt: "Javascript logo",
    },
    {
      src: PHFirebase,
      alt: "Firebase logo",
    },
    {
      src: PHNode1,
      alt: "Node logo",
    },
  ],
  img: {
    src: "./assets/images/PlantHaus.png",
    alt: "Plant Haus Preview",
  },
  info: "A dynamic e-commerce platform specializing in indoor plants, offering a secure and user-friendly shopping experience. This app combines OAuth authentication with React, ensuring a seamless experience for plant enthusiasts to explore and purchase.",
  btn: "View More",
  aLink: "https://planthaus.netlify.app/",
  isCurrentWork: false,
}

export const interviewIQ = {
  name: "InteviewIQ",
  desc: "Full Stack Flashcard Application",
  icons: [
    {
      src: IQCSS,
      alt: "CSS logo",
    },
    {
      src: IQReact,
      alt: "React logo",
    },
    {
      src: IQJS,
      alt: "Javascript logo",
    },
    {
      src: IQNode,
      alt: "Node logo",
    },
    {
      src: IQMongoDB,
      alt: "Mongodb logo",
    },
    {
      src: Express,
      alt: "Express logo",
    },
  ],
  img: {
    src: IIQ,
    alt: "InterviewIQ Preview",
  },
  info: "An application based on acing coding interview questions. Created utilizing MongoDb backend with React frontend and an OAuth login.",
  btn: "Coming Soon",

  isCurrentWork: true,
}

export const dangoDB = {
  name: "dangoDb",
  desc: "Object Document Mapper (ODM) Built for Deno",
  icons: [
    {
      src: DangoDeno,
      alt: "Deno Logo",
    },
    {
      src: Typescript,
      alt: "Typescript Logo",
    },
    {
      src: DangoSass,
      alt: "Sass Logo",
    },

    {
      src: DangoReact,
      alt: "React Logo",
    },
    {
      src: DangoNode,
      alt: "Node Logo",
    },
  ],
  img: {
    src: dangoDBI,
    alt: "Dango Preview",
  },
  info: "A light-weight Object Document Mapping (ODM) library built around Deno providing the core functionality and familiar look and feel of established Node-based libraries.",
  btn: "View More",
  aLink: "https://github.com/oslabs-beta/dangoDB",
  isCurrentWork: false,
}

export const ad3lie = {
  name: "Ad3lie",
  desc: "Data Visualizations Utilizing the Power of D3.js",
  icons: [
    {
      src: ATailwind,
      alt: "Tailwind Logo",
    },
    {
      src: AReact,
      alt: "React Logo",
    },
    {
      src: AD3,
      alt: "D3 Logo",
    },
    {
      src: AElectron,
      alt: "Electron Logo",
    },
  ],
  img: {
    src: Topy,
    alt: "Ad3lie Preview",
  },
  info: "An open-source application for crafting stunning and responsive data visualizations using React and D3. Tailor-made charts to amplify your data storytelling.",
  btn: "View More",
  aLink: "https://github.com/oslabs-beta/ad3lie",
  isCurrentWork: false,
}
