"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaRProject } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>My Projects</SectionHeading>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
          <FaRProject className="text-blue-500 text-lg" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Technical Arsenal
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          A collection of projects showcasing my skills in modern web
          development and problem-solving capabilities
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-2 mt-8"
        >
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: dot * 0.2 }}
              className="w-2 h-2 bg-blue-500 rounded-full opacity-60"
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
        variants={containerVariants}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
}
