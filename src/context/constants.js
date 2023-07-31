

export const RESUMEURL = "#"

import python from "../assets/programmingTechnologies/python.png"
import cSharp from "../assets/programmingTechnologies/C-Sharp.png"
import CSS_HTML from "../assets/programmingTechnologies/CSS-HTML.png"
import Git from "../assets/programmingTechnologies/Git.png"
import graphQL from "../assets/programmingTechnologies/graphQL.png"
import javaScript from "../assets/programmingTechnologies/java-script.png"
import mysql from "../assets/programmingTechnologies/mysql.png"
import nodeJs from "../assets/programmingTechnologies/nodejs.svg"
import express from "../assets/programmingTechnologies/express.png"
import mongoDB from "../assets/programmingTechnologies/mongoDB.png"
import reactQuery from "../assets/programmingTechnologies/reactQuery.png"
import scss from "../assets/programmingTechnologies/scss.png"
import tailwindCss from "../assets/programmingTechnologies/tailwindCss.png"
import typescript from "../assets/programmingTechnologies/typescript.png"
import react from "../assets/programmingTechnologies/react.png"

import P1img1 from "../assets/projectsImg/project1/img1.png";
import P1img2 from "../assets/projectsImg/project1/img2.png";
import P2img1 from "../assets/projectsImg/project2/img1.png";
import P2img2 from "../assets/projectsImg/project2/img2.png";
import P3img1 from "../assets/projectsImg/project3/img1.png";
import P3img2 from "../assets/projectsImg/project3/img2.png";
import P4img1 from "../assets/projectsImg/project4/img1.png";
import P4img2 from "../assets/projectsImg/project4/img2.png";

// import  homeAnimation from "../assets/black-bg-web-dev.json"
// import about from '../assets/animation_lk5ptfo6.json'4

export const programmingTech = [
  {
    name: "React",
    img: react,
    isYellow: true,
  },

  {
    name: "CSS/HTML",
    img: CSS_HTML,
    isYellow: true,
  },
  {
    name: "Tailwind Css",
    img: tailwindCss,
    isYellow: true,
  },
  {
    name: "SASS",
    img: scss,
    isYellow: false,
  },
  {
    name: "GraphQL",
    img: graphQL,
    isYellow: false,
  },
  {
    name: "NodeJs",
    img: nodeJs,
    isYellow: false,
  },
  {
    name: "My SQL",
    img: mysql,
    isYellow: true,
  },
  {
    name: "Express",
    img: express,
    isYellow: true,
  },
  {
    name: "Java Script",
    img: javaScript,
    isYellow: true,
  },
  {
    name: "Type Script",
    img: typescript,
    isYellow: false,
  },
  {
    name: "Mongo DB",
    img: mongoDB,
    isYellow: true,
  },
  {
    name: "React Query",
    img: reactQuery,
    isYellow: false,
  },
  {
    name: "Git",
    img: Git,
    isYellow: false,
  },

  {
    name: "Python",
    img: python,
    isYellow: false,
  },
  {
    name: "CSharp",
    img: cSharp,
    isYellow: false,
  },


]




export const Projects = [
  {
    id: 1,
    name: "Dashboard Builder",
    style: "col-span-2",
    smallDescription: "A user-friendly web platform for effortlessly constructing dashboard interfaces through drag-and-drop actions.",
    bigDescription: ["help the user to create the best dashboard UI for their web application", "user-friendly  UI", "the ability to export the work as HTML and CSS", "integrate with google drive to give users the ability to store their projects", "the back-end handel the user authentication"],
    techUsed: ["React", "JavaScript", "Tailwind Css", "CSS/HTML", "Express", "NodeJs"],
    openSource: {
      isOpen: true,
      link: "https://github.com"
    },
    demoLink: "https://github.com",
    videoLink: "MLpWrANjFbI",
    img1: P1img1,
    img2: P1img2

  },
  {
    id: 2,
    name: "extension ",
    style: "col-span-1",
    smallDescription: "this is the extension project description",
    bigDescription: ["heelol this could be the description of the project ok here is this awesome fischer ", "hello again"],
    techUsed: ["Python", "Git", "HTML/CSS", "React"],
    openSource: {
      isOpen: false,
      link: "https://github.com"
    },
    demoLink: "https://github.com",
    videoLink: "BfvoONHXuQA",
    img1: P2img1,
    img2: P2img2

  },
  {
    id: 3,
    name: "the porpject mane",
    style: "",
    smallDescription: " this is the project description",
    bigDescription: ["heelol this could be the description of the project ok here is this awesome fischer ", "hello again"],
    techUsed: ["Python", "Git", "HTML/CSS", "My"],
    openSource: {
      isOpen: true,
      link: "https://github.com"
    },
    demoLink: "https://github.com",
    videoLink: "MLpWrANjFbI",
    img1: P3img1,
    img2: P3img2

  },
  {
    id: 4,
    name: "the porpject mane",
    style: "col-span-2",
    smallDescription: " this is the project description",
    bigDescription: ["heelol this could be the description of the project ok here is this awesome fischer ", "hello again"],
    techUsed: ["Python", "Git", "HTML/CSS", "My"],
    openSource: {
      isOpen: true,
      link: "https://github.com"
    },
    demoLink: "https://github.com",
    videoLink: "MLpWrANjFbI",
    img1: P4img1,
    img2: P4img2

  }
]

