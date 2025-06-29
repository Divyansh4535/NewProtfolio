import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Full-Stack Developer (MERN)",
    company: "Softfix Technologies Pvt Ltd",
    location: "Lucknow, India",
    description:
      "Building and maintaining scalable web applications using the MERN stack. Developed dynamic UIs with React & Next.js, built secure RESTful APIs with Node.js & Express, and managed databases with MongoDB. Improved page performance, optimized backend response times, and delivered multiple production-grade features in Agile sprints.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 – Present",
    companyLogo: "/logos/tech-innovations.png",
  },
] as const;


export const projectsData = [
  {
    title: "EzLogistic",
    description:
      "A logistics platform for real-time shipment tracking and route optimization, enhancing delivery efficiency and transparency.",
    tags: ["React", "Next.js", "Ola Maps API", "REST API", "Tailwind"],
    imageUrl: "/projects/ezlogistic.png", // Replace with actual path or image import
  },
  {
    title: "Kardify - E-commerce for Auto Parts",
    description:
      "An e-commerce platform for car and auto parts, with secure authentication, cart management, and seamless checkout experience.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Payment Gateway"],
    imageUrl: "/projects/kardify.png",
  },
  {
    title: "Ultraradai.com",
    description:
      "A radiology service platform offering appointment bookings, payment integration, and responsive design for medical services.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Razorpay", "Responsive Design"],
    imageUrl: "/projects/ultraradai.png",
  },
  {
    title: "Gigsam.com",
    description:
      "A freelance service marketplace supporting real-time messaging, service listing, and interactive UI for clients and freelancers.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS", "Responsive UI"],
    imageUrl: "/projects/gigsam.png",
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
  "Git",
  "Tailwind",
  "Bootstrap",
  // "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  // "PostgreSQL",
  // "React Native",
  "Framer Motion",
  "GSAP",
  "React Reanimated",
  "WebSockets",
  // "Figma",
  // "Chrome Developer Tools",
] as const;

