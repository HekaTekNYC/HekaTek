import dangoDBP from "../assets/images/dangoCode.webp"
import Ad3lie from "../assets/images/ad3liecode.webp"
import IIQcover from "../assets/images/InterviewIQ.webp"
import PHcover from "../assets/images/PlantHaus.webp"

export const plantHaus = {
  id: 1,
  name: "Plant Haus",
  desc: "Full Stack E-commerce Plant Shop",

  img: {
    src: PHcover,
    alt: "Plant Haus Preview",
  },
  info: "A dynamic e-commerce platform specializing in indoor plants, offering secure and user-friendly shopping. This app combines OAuth authentication with React, ensuring a seamless experience for plant lovers to explore and purchase.",
  btn: "View More",
  aLink: "https://planthaus.netlify.app/",
  isCurrentWork: false,
  preview: "Preview",
}

export const interviewIQ = {
  id: 2,
  name: "InteviewIQ",
  desc: "Full Stack Flashcard Application",

  img: {
    src: IIQcover,
    alt: "InterviewIQ Preview",
  },
  info: "An application based on acing coding interview questions. Created utilizing MongoDb backend with React frontend and an OAuth login. Users have ability to create, save and edit their own cards as well as accessing the basic cards.",
  btn: "Coming Soon",

  isCurrentWork: true,
  preview: "Preview",
}

export const dangoDB = {
  id: 3,
  name: "dangoDb",
  desc: "Deno Object Document Mapper (ODM)",
  img: {
    src: dangoDBP,
    alt: "Dango Preview",
  },
  info: "A light-weight Object Document Mapping (ODM) library built around Deno providing the core functionality and familiar look and feel of established Node-based libraries.",
  btn: "View GitHub",
  aLink: "https://github.com/oslabs-beta/dangoDB",
  isCurrentWork: false,
  preview: "Preview",
}

export const ad3lie = {
  id: 4,
  name: "Ad3lie",
  desc: "D3.js Data Visualizations",

  img: {
    src: Ad3lie,
    alt: "Ad3lie Preview",
  },
  info: "An open-source application for crafting stunning and responsive data visualizations using React and D3. Tailor-made charts to amplify your data storytelling.",
  btn: "View Github",
  aLink: "https://github.com/oslabs-beta/ad3lie",
  isCurrentWork: false,
  preview: "Preview",
}
