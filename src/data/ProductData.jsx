import Deno from "../assets/icons/deno.svg"
import J from "../assets/icons/javascriptColor.svg"
import ReactIcon from "../assets/icons/icons8-react-native.svg"
import Node1 from "../assets/icons/node1js.svg"
import Firebase from "../assets/icons/firebase.svg"
import Sass from "../assets/icons/sass.svg"
import CSSLogo from "../assets/icons/CSSLogo.svg"
import MongoDB from "../assets/icons/mongodb.svg"
import Express from "../assets/icons/express.svg"
import Typescript from "../assets/icons/typescript.svg"
import dangoDBI from "../assets/images/dangoDB.png"
import D3 from "../assets/icons/d3js-icon.svg"
import Tailwind from "../assets/icons/tailwindcss.svg"
import Electron from "../assets/icons/electronjs.svg"

export const plantHaus = {
  name: "Plant Haus",
  desc: "Full stack E-commerce plant shop.",
  icons: [
    {
      src: Sass,
      alt: "Sass logo",
    },
    {
      src: ReactIcon,
      alt: "React logo",
    },
    {
      src: J,
      alt: "Javascript logo",
    },
    {
      src: Firebase,
      alt: "Firebase logo",
    },
    {
      src: Node1,
      alt: "Node logo",
    },
  ],
  img: {
    src: "https://i.ibb.co/KXfxRCT/Screenshot-2024-01-14-at-8-04-58-PM.png",
    alt: "Plant Haus Preview",
  },
  info: "A dynamic ecommerce platform specializing in indoor plants, offering a secure and user-friendly shopping experience. This platform combines OAuth authentication with React and Firebase, ensuring a seamless experience for plant enthusiasts to explore and purchase.",
  btn: "View More",
  aLink: "https://planthaus.netlify.app/",
  isCurrentWork: false,
}

export const interviewIQ = {
  name: "InteviewIQ",
  desc: "Full stack flashcard application.",
  icons: [
    {
      src: CSSLogo,
      alt: "CSS logo",
    },
    {
      src: ReactIcon,
      alt: "React logo",
    },
    {
      src: J,
      alt: "Javascript logo",
    },
    {
      src: Node1,
      alt: "Node logo",
    },
    {
      src: MongoDB,
      alt: "Mongodb logo",
    },
    {
      src: Express,
      alt: "Express logo",
    },
  ],
  img: {
    src: "https://i.ibb.co/KXfxRCT/Screenshot-2024-01-14-at-8-04-58-PM.png",
    alt: "InterviewIQ Preview",
  },
  info: "An application based on acing coding interview questions. Created utilizing MongoDb backend with React frontend and an OAuth login.",
  btn: "View More",
  aLink: "",
  isCurrentWork: true,
}

export const dangoDB = {
  name: "dangoDb",
  desc: "Object Document Mapper (ODM) built for Deno.",
  icons: [
    {
      src: Deno,
      alt: "Deno Logo",
    },
    {
      src: Typescript,
      alt: "Typescript Logo",
    },
    {
      src: Sass,
      alt: "Sass Logo",
    },

    {
      src: ReactIcon,
      alt: "React Logo",
    },
    {
      src: Node1,
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
  desc: "Data visualizations utilizing the power of D3.js",
  icons: [
    {
      src: Tailwind,
      alt: "Tailwind Logo",
    },
    {
      src: ReactIcon,
      alt: "React Logo",
    },
    {
      src: D3,
      alt: "D3 Logo",
    },
    {
      src: Electron,
      alt: "Electron Logo",
    },
  ],
  img: {
    src: "https://i.ibb.co/KXfxRCT/Screenshot-2024-01-14-at-8-04-58-PM.png",
    alt: "Ad3lie Preview",
  },
  info: "An open-source application for crafting stunning and responsive data visualizations using React and D3. Tailor-made charts to amplify your data storytelling.",
  btn: "View More",
  aLink: "https://github.com/oslabs-beta/ad3lie",
  isCurrentWork: false,
}
