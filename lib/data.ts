import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1Img from "@/public/project1.png";
import flappygImg from "@/public/flappyg.png";
import unfinishedImg from "@/public/unfinished.png";

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
      "Currently searching for an internship in software development. I am looking for an internship that will start in summer 2024.",
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
    title: "Flappy Ghost ML",
    description:
    "Mini-game featuring autonomous gameplay powered by machine learning. The ghost is controlled by a model that makes decisions based on the current game state..",
    tags: ["Java", "JavaFX", "DeepLearning4j"],
    imageUrl: flappygImg,
    link : "https://github.com/AbdelRahm4n/timetable-manager",
  },
  {
    title: "MoodifyTunes",
    description:
      "web application for playlist curation using the Spotify API based on facial expressions analysed using a ML model built with python",
    tags: ["React", "Next.js", "Tailwind", "Framer-Motion", "Python", "Pytorch", "TensorFlow"],
    imageUrl: unfinishedImg,
    link : "https://github.com/AbdelRahm4n/moodify-tunes",
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
] as const;