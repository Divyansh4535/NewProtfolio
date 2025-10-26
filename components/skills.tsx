"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiDjango,
  SiCplusplus
} from "react-icons/si";
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaTools,
  FaRocket,
  FaStar
} from "react-icons/fa";

const skillsData = [
  // Frontend
  { name: "React", icon: SiReact, level: 95, color: "#61DAFB", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#000000", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6", category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, level: 92, color: "#F7DF1E", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#06B6D4", category: "frontend" },
  { name: "Redux", icon: SiRedux, level: 80, color: "#764ABC", category: "frontend" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, level: 88, color: "#339933", category: "backend" },
  { name: "Express", icon: SiExpress, level: 85, color: "#000000", category: "backend" },
  { name: "Python", icon: SiPython, level: 60, color: "#3776AB", category: "backend" },
  { name: "C++", icon: SiCplusplus, level: 75, color: "#3776AB", category: "backend" },
  { name: "Django", icon: SiDjango, level: 60, color: "#092E20", category: "backend" },
  { name: "GraphQL", icon: SiGraphql, level: 78, color: "#E10098", category: "backend" },

  // Database
  { name: "MongoDB", icon: SiMongodb, level: 82, color: "#47A248", category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 75, color: "#4169E1", category: "database" },

  // Tools
  { name: "Git", icon: SiGit, level: 90, color: "#F05032", category: "tools" },
];

const categories = [
  { name: "Frontend", icon: FaCode, color: "blue", count: 6 },
  { name: "Backend", icon: FaServer, color: "green", count: 5 },
  { name: "Database", icon: FaDatabase, color: "purple", count: 2 },
  { name: "Tools", icon: FaTools, color: "orange", count: 1 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5
    }
  })
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      ref={ref}
      id="skills"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <FaRocket className="text-blue-500 text-lg" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technical Arsenal</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies I use to craft exceptional digital experiences with focus on performance, 
            scalability, and beautiful user interfaces.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className={`p-3 rounded-xl bg-${category.color}-500/10 border border-${category.color}-500/20 group-hover:scale-110 transition-transform`}>
                <category.icon className={`text-${category.color}-500 text-xl`} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.count} skills</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="group relative p-6 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="p-3 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon 
                    className="text-2xl" 
                    style={{ color: skill.color }} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg truncate">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(skill.level / 20) 
                            ? "text-yellow-400" 
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Proficiency
                  </span>
                  <span className="text-sm font-bold" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200/80 dark:bg-gray-700/80 rounded-full overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={progressVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ backgroundColor: skill.color }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <FaRocket className="text-lg" />
            <span className="font-semibold text-lg">Ready to Build Something Amazing?</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>
      </div>
    </section>
  );
}