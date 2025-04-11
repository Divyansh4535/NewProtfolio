"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import {
  FaCode,
  FaGraduationCap,
  FaGamepad,
  FaMusic,
  FaBookOpen,
} from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        <span className="relative inline-block">
          About me
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
        </span>
      </SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Image with decorative elements */}

        <div>
          <motion.div
            className="space-y-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                <FaGraduationCap className="h-5 w-5" />
              </div>
              <p>
                After graduating with a degree in{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Accounting
                </span>
                , I transitioned to tech through a coding bootcamp, mastering{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  full-stack development
                </span>
                .
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400">
                <FaCode className="h-5 w-5" />
              </div>
              <p>
                <span className="italic text-gray-900 dark:text-white">
                  My passion
                </span>{" "}
                lies in problem-solving. I thrive on the challenge of finding
                elegant solutions. My core stack:{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  <SiReact className="inline mr-1" />
                  React, <SiNextdotjs className="inline mr-1" />
                  Next.js,
                  <SiNodedotjs className="inline mr-1" />
                  Node.js, <SiMongodb className="inline mr-1" />
                  MongoDB
                </span>
                . Also proficient in TypeScript and Prisma.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400">
                <FiCpu className="h-5 w-5" />
              </div>
              <p>
                Currently seeking a{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  full-time developer role
                </span>
                where I can contribute to meaningful projects while continuing
                to grow my skills.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg text-yellow-600 dark:text-yellow-400">
                <FaGamepad className="h-5 w-5" />
              </div>
              <p>
                <span className="italic text-gray-900 dark:text-white">
                  Beyond coding
                </span>
                , I enjoy gaming, movies, and time with my dog. I'm constantly
                learning—currently exploring{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  history, philosophy
                </span>
                , and{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  <FaMusic className="inline mr-1" />
                  guitar
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Tech stack visualization */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              {
                name: "React",
                icon: <SiReact className="h-5 w-5 text-blue-500" />,
              },
              {
                name: "Next.js",
                icon: (
                  <SiNextdotjs className="h-5 w-5 text-black dark:text-white" />
                ),
              },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="h-5 w-5 text-green-500" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="h-5 w-5 text-green-600" />,
              },
              {
                name: "TypeScript",
                icon: <span className="text-sm font-medium">TS</span>,
              },
              {
                name: "Prisma",
                icon: <span className="text-sm font-medium">Prisma</span>,
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2 hover:scale-105 transition-transform"
              >
                {tech.icon}
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative w-full h-[28rem] rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt="Developer at work"
              fill
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Right Column - Content */}

          {/* Floating tech stack badges */}
          <div className="absolute -bottom-6 -right-6 flex gap-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-2 border border-gray-200 dark:border-gray-700">
              <SiReact className="h-6 w-6 text-blue-500" />
              <span className="font-medium text-sm">React</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center gap-2 border border-gray-200 dark:border-gray-700">
              <SiNextdotjs className="h-6 w-6 text-black dark:text-white" />
              <span className="font-medium text-sm">Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
