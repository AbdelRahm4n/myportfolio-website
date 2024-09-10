import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1Img from "@/public/project1.png";
import flappygImg from "@/public/flappyg.png";
import emotionImgImg from "@/public/emotionImg.png";
import unfinishedImg from "@/public/unfinished.png";
import predictorImg from "@/public/predictor.png";
import taskManagerImg from "@/public/task-manager.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started studying at Université de Montréal",
    location: "Montréal, QC",
    description:
      "Began my studies in mathematics and computer science at Université de Montréal. Expected graduation in 2026.",
    icon: React.createElement(LuGraduationCap),
    date: "January 2023",
  },
  {
    title: "Searching for an internship",
    location: "Montréal, QC",
    description:
      "Currently searching for an internship in software development. I am looking for an internship or a research opportunity.",
    icon: React.createElement(CgWorkAlt),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Timetable Manager",
    description:
      "Application designed to help students manage their schedules efficiently. The app provides features for adding, modifying, and viewing courses, including lectures, labs, and exams.",
    tags: ["Java"],
    imageUrl: project1Img,
    link : "https://github.com/AbdelRahm4n/timetable-manager",
  },
  {
    title: "Emotion Detection ML",
    description:
      "A real-time webcam emotion detection system implemented using Python, OpenCV, and a pre-trained deep learning model.",
    tags: ["Python", "OpenCV", "TensorFlow", "Keras"],
    imageUrl: emotionImgImg,
    link : "https://github.com/AbdelRahm4n/emotionDetectorML",
  },
  {
    title: "EPL Predictor Project",
    description:
      "PL match predictor using web scraping, data cleaning and a machine learning model with error measuring and prediciton improvment.",
    tags: ["Python", "Jupyter", "Pandas", "SciKit-Learn"],
    imageUrl: predictorImg,
    link : "https://github.com/AbdelRahm4n/PythonEPL",
  },
  {
    title: " MERN Task Manager",
    description:
      "A tile-based, MERN task manager with authentication and CRUD functionality.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: taskManagerImg,
    link : "https://github.com/AbdelRahm4n/task-manager",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Python",
  "Pytorch",
  "TensorFlow",
  "SciKit-Learn",
  "Framer Motion",
  "R",
  "Java",
  "Assembly",
  "SQL",
  "MongoDB",
  "Git",
  "Jupyter",
  "Pandas",
  "PHP",
  "Haskell",
  "LaTeX",
  "C++",
  "Java", 
  "Lisp",
] as const;