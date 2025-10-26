import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

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
    id: 1,
    title: "Web Developer Intern",
    company: "Softfix Technologies OPC Pvt. Ltd.",
    location: "Lucknow, India",
    description:
      "Contributed to the development of full-stack web applications using the MERN stack. Implemented responsive, user-friendly interfaces with React and Next.js, and built secure RESTful APIs using Node.js and Express. Managed MongoDB databases, optimized query performance, and reduced API response times by 20%. Collaborated in Agile sprints to deliver production-ready features and enhance overall product performance.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 – Jan 2024",
    companyLogo: "/logo/softfix.png",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Softfix Technologies OPC Pvt. Ltd.",
    location: "Lucknow, India",
    description:
      "Led the frontend development of scalable web platforms using React, Next.js, and TypeScript. Designed modular UI components, improved page load speeds by 35%, and enhanced SEO performance with server-side rendering. Collaborated closely with backend engineers to integrate RESTful APIs and ensure seamless data flow. Mentored interns on best practices in React, version control, and performance optimization, contributing to a stronger and more efficient development team.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 – Sep 2025",
    companyLogo: "/logo/softfix.png",
  },
] as const;


export const projectsData = [
  {
    id:1,
    category: "Personal",
    title: "Personal Portfolio",
    imageUrl: "/projects/portfolio.png",
    link: "https://dk-portfolio-nu.vercel.app/",
    description:
      "A sleek, responsive personal portfolio showcasing my professional journey, skills, and projects. Built with React and Tailwind CSS, featuring dark mode, smooth animations, and SEO optimization for enhanced performance.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vercel"],
  },
  {
    id:2,
    category: "Professional Industry",
    title: "Delivez",
    description:
      "A logistics management platform for real-time shipment tracking, route optimization, and data-driven delivery analytics. Enhanced operational transparency and reduced delivery delays using API-driven automation and live tracking.",
    tags: ["React", "Next.js", "Ola Maps API", "REST API", "Tailwind CSS"],
    imageUrl: "/projects/delivez.png",
    link: "http://40.81.244.167:3002",
  },
  {
    id:3,
    category: "Professional Industry",
    title: "Kardify — E-commerce for Auto Parts",
    description:
      "An e-commerce platform for automobile parts with secure JWT authentication, dynamic cart management, and integrated online payments. Designed to deliver a seamless and responsive shopping experience.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Payment Gateway"],
    imageUrl: "/projects/kardify.png",
    link: "http://kardify.in",
  },
  {
    id:4,
    category: "Professional Industry",
    title: "UltraradAI",
    description:
      "A healthcare service platform for radiology centers, allowing patients to book appointments, make secure payments, and view medical reports online. Implemented Razorpay integration and smooth animations using Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Razorpay", "Responsive Design"],
    imageUrl: "/projects/ultraradai.png",
    link: "http://ultraradai.com",
  },
  {
    id:5,
    category: "Professional Industry",
    title: "Gigsam",
    description:
      "A modern freelance marketplace enabling clients and freelancers to connect through service listings, real-time messaging, and interactive dashboards. Built with a responsive UI and engaging animations for better user experience.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS", "Responsive UI"],
    imageUrl: "/projects/gigsam.png",
    link: "http://gigsam.com",
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
  "React Native",
  "Framer Motion",
  "GSAP",
  "React Reanimated",
  "WebSockets",
  // "Figma",
  // "Chrome Developer Tools",
] as const;

