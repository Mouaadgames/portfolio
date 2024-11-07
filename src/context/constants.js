

export const RESUMEURL = "/resume%20fr.pdf"

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
import nextjs from "../assets/programmingTechnologies/next-js.png"
import prisma from "../assets/programmingTechnologies/prisma.png"
import daisyUI from "../assets/programmingTechnologies/daisyUI.png"
import cppArduino from "../assets/programmingTechnologies/cpp-arduino.png"
import unity from "../assets/programmingTechnologies/unity.png"

import P0img1 from "../assets/projectsImg/project0/img1.png";
import P0img2 from "../assets/projectsImg/project0/img2.png";
import P1img1 from "../assets/projectsImg/project1/img1.png";
import P1img2 from "../assets/projectsImg/project1/img2.png";
import P2img1 from "../assets/projectsImg/project2/img1.png";
import P2img2 from "../assets/projectsImg/project2/img2.png";
import P3img1 from "../assets/projectsImg/project3/img1.png";
import P3img2 from "../assets/projectsImg/project3/img2.png";
import P4img1 from "../assets/projectsImg/project4/img1.png";
import P4img2 from "../assets/projectsImg/project4/img2.png";
import P5img1 from "../assets/projectsImg/project5/img1.png";
import P5img2 from "../assets/projectsImg/project5/img2.png";

// import  homeAnimation from "../assets/black-bg-web-dev.json"
// import about from '../assets/animation_lk5ptfo6.json'4

export const programmingTech = [
  {
    name: "Next Js",
    img: nextjs,
    isYellow: true,
  },
  {
    name: "React",
    img: react,
    isYellow: true,
  },
  {
    name: "Tailwind Css",
    img: tailwindCss,
    isYellow: true,
  },
  {
    name: "GraphQL",
    img: graphQL,
    isYellow: true,
  },
  {
    name: "NodeJs",
    img: nodeJs,
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
    isYellow: true,
  },
  {
    name: "React Query",
    img: reactQuery,
    isYellow: true,
  },
  {
    name: "Prisma",
    img: prisma,
    isYellow: true,
  },
  {
    name: "Mongo DB",
    img: mongoDB,
    isYellow: true,
  },
  {
    name: "My SQL",
    img: mysql,
    isYellow: true,
  },
  {
    name: "Git",
    img: Git,
    isYellow: true,
  },
  {
    name: "HTML/CSS",
    img: CSS_HTML,
    isYellow: true,
  },
  {
    name: "Daisy UI",
    img: daisyUI,
    isYellow: true,
  },

  {
    name: "SASS",
    img: scss,
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
  {
    name: "Arduino C++",
    img: cppArduino,
    isYellow: false
  },
  {
    name: "unity",
    img: unity,
    isYellow: false
  }
]




export const Projects = [
  {
    id: 0,
    name: "Mon Souk",
    style: "col-span-3",
    smallDescription: "Platform to create E-commerce store with ease",
    bigDescription: [
      "create a e-commerce store",
      "payment system",
      "whatsApp  integration (receive notification went an order is placed)",
      "integrated analytics",
      "ultra fast load time"],
    techUsed: ["Next Js", "TypeScript", "Express", "Tailwind Css", "daisyUI", "My SQL", "NodeJs", "Prisma"],
    openSource: {
      isOpen: false,
      link: ""
    },
    demoLink: "https://monsouk.shop",
    videoLink: "",
    img1: P0img1,
    img2: P0img2

  },
  {
    id: 1,
    name: "Hexa-sync",
    style: "col-span-2",
    smallDescription: "Collaboration platform for students to share exercise, exams and docs.",
    bigDescription: ["Private platform for students to share their knowledge and help each other in REAL-TIME*.",
      "The front-end handel the authentication without any username and password",
      "The ability to add and remove tasks",
      "The ability to add docs and view them in a list",
      "The schedule is editable via a JSON file",
      "Every single piece is self-hosted from the SQL database, S3 object storage 'using minio', the front-end  and the back-end",
      "The site is still live but it's private and can't share the link"],
    techUsed: ["Next Js", "TypeScript", "Tailwind Css", "daisyUI", "My SQL", "HTML/CSS", "NodeJs", "Prisma"],
    openSource: {
      isOpen: false,
      link: "https://github.com"
    },
    demoLink: "/assets/hexasync_img_prv.png",
    videoLink: "TBdaSIqAddE",
    img1: P1img1,
    img2: P1img2
  },
  {
    id: 2,
    name: "Minecraft Note System",
    style: "",
    smallDescription: "Minecraft theme note app on a website.",
    bigDescription: ["Helped users to organize their ideas in bookshelves and collections", "Enhance user experience with easy to use UI", "Users can share books and collections with only the target username and can both edit and create books", "•	Integrated React Query cashing system to Improve response time", "•	Combining REST API and graph QL for more reliable Client-Server Communication", "you can find link to the backend code on the readme file (no demo available)"],
    techUsed: ["React", "Tailwind Css", "Express", "Type Script", "Mongo DB", "React Query", "GraphQL"],
    openSource: {
      isOpen: true,
      link: "https://github.com/Mouaadgames/Minecraft-note-app"
    },
    demoLink: "#",
    videoLink: "ymGeK50SUcg",
    img1: P2img1,
    img2: P2img2

  },
  {
    id: 3,
    name: "My personal portfolio",
    style: "",
    smallDescription: "the place where I show my work and skills on (you are on it right now)",
    bigDescription: ["As you see in this webPage ", "Dark them color palette", "Responsive design", "Responsive floating model", "skills section that guid user to the corresponding project", "All skills and project are controlled from a single file", "You can watch the demo video to see all the features of a project"],
    techUsed: ["React", "Java Script", "Tailwind Css", "daisyUI", "HTML/CSS"],
    openSource: {
      isOpen: true,
      link: "https://github.com/Mouaadgames/portfolio/tree/master"
    },
    demoLink: "#",
    videoLink: "yvFagiahqa0",
    img1: P3img1,
    img2: P3img2

  },
  {
    id: 4,
    name: "Teacher Site",
    style: "",
    smallDescription: "An arabic philosophy teacher site",
    bigDescription: ["help them host and organize their online courses",
      "contains admin panel to manege the hole site",
      "adding and removing categories and courses",
      "uploading PDF's and images for each course", "linking the explenatory video on the site so that students can watch it"],
    techUsed: ["Next Js", "TypeScript", "Tailwind Css", "daisyUI", "My SQL", "HTML/CSS", "NodeJs", "Prisma"],
    openSource: {
      isOpen: true,
      link: "/assets/philo_img_prv.png"
    },
    demoLink: "#",
    videoLink: "VBhHPPxCwWc",
    img1: P4img1,
    img2: P4img2

  },
  {
    id: 5,
    name: "Excel analyser and PowerPoint generator",
    style: "",
    smallDescription: "A tool to generate powerPoint giving Excel data",
    bigDescription: ["reads excel columns analyses them and put them in a table in power point presentation",],
    techUsed: ["Python"],
    openSource: {
      isOpen: false,
      link: "/assets/philo_img_prv.png"
    },
    demoLink: "#",
    videoLink: "",
    img1: P5img1,
    img2: P5img2

  }
]

