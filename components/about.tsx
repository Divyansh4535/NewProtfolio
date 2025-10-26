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
  FaRocket,
} from "react-icons/fa";
import { FiCpu, FiAward } from "react-icons/fi";
import { TbBrandReactNative, TbHeart } from "react-icons/tb";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiJavascript,
} from "react-icons/si";

export default function About() {
  const { ref } = useSectionInView("About");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div> */}



      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg mb-8 group hover:shadow-xl transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          >
            <FaRocket className="text-blue-500 text-lg" />
          </motion.div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Passionate Developer
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate full-stack developer crafting digital experiences with
          modern technologies and innovative solutions
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Story Card */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaGraduationCap className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              With a background in{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                business and accounting
              </span>
              , I discovered my passion for technology and transitioned into
              software development. I've since built expertise in{" "}
              <span className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                full-stack JavaScript development
              </span>{" "}
              through intensive self-study and hands-on projects.
            </p>
          </motion.div>

          {/* Tech Passion Card */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaCode className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="italic font-semibold text-gray-900 dark:text-white">
                What excites me most
              </span>{" "}
              is creating efficient, user-friendly applications that solve real
              problems. My core stack includes{" "}
              <span className="font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                React, Next.js, Node.js, MongoDB
              </span>
              . I'm particularly interested in{" "}
              <span className="font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                performance optimization
              </span>{" "}
              and building accessible web applications.
            </p>
          </motion.div>

          {/* Learning Card */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FiCpu className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Currently focused on expanding my knowledge in{" "}
              <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                advanced React patterns
              </span>{" "}
              and{" "}
              <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                server-side rendering techniques
              </span>
              . Open to opportunities where I can contribute my{" "}
              <span className="font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                problem-solving skills
              </span>{" "}
              and{" "}
              <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                business acumen
              </span>{" "}
              to meaningful projects.
            </p>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaGamepad className="h-6 w-6 text-white" />
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="italic font-semibold text-gray-900 dark:text-white">
                When not coding
              </span>
              , I enjoy exploring new technologies, contributing to open-source
              projects, and learning about{" "}
              <span className="font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                UX design principles
              </span>
              . I'm also passionate about{" "}
              <span className="font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                music production
              </span>{" "}
              and the intersection of technology and creativity.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <FiAward className="text-blue-500" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                {
                  name: "React",
                  icon: <SiReact className="h-5 w-5" />,
                  color: "text-blue-500",
                },
                {
                  name: "Next.js",
                  icon: <SiNextdotjs className="h-5 w-5" />,
                  color: "text-black dark:text-white",
                },
                {
                  name: "TypeScript",
                  icon: <SiTypescript className="h-5 w-5" />,
                  color: "text-blue-600",
                },
                {
                  name: "JavaScript",
                  icon: <SiJavascript className="h-5 w-5 text-yellow-500" />,
                  color: "text-yellow-500",
                },
                {
                  name: "Node.js",
                  icon: <SiNodedotjs className="h-5 w-5" />,
                  color: "text-green-500",
                },
                {
                  name: "MongoDB",
                  icon: <SiMongodb className="h-5 w-5" />,
                  color: "text-green-600",
                },
                {
                  name: "Tailwind",
                  icon: <SiTailwindcss className="h-5 w-5" />,
                  color: "text-cyan-400",
                },
                {
                  name: "Git",
                  icon: <SiGit className="h-5 w-5" />,
                  color: "text-orange-600",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-3 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center gap-2 hover:shadow-xl transition-all duration-300 backdrop-blur-sm group"
                >
                  <div
                    className={`${tech.color} group-hover:scale-110 transition-transform`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          {/* Main Image Container */}
          <div className="relative">
            <div className="relative w-full h-[32rem] rounded-3xl overflow-hidden border-4 border-white/20 dark:border-gray-700/30 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Developer at work"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 left-8 bg-white/90 dark:bg-gray-800/90 p-4 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <TbHeart className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-sm">Passionate</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 right-8 bg-white/90 dark:bg-gray-800/90 p-4 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <FaRocket className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold text-sm">Innovative</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 flex gap-4"
            >
              <div className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 dark:border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <SiReact className="h-7 w-7 text-blue-500" />
                <span className="font-bold text-sm">React</span>
              </div>
              <div className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 dark:border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <SiNextdotjs className="h-7 w-7 text-black dark:text-white" />
                <span className="font-bold text-sm">Next.js</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 bg-white/90 dark:bg-gray-800/90 p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 dark:border-gray-700/50 backdrop-blur-sm"
            >
              <TbBrandReactNative className="h-7 w-7 text-blue-500" />
              <span className="font-bold text-sm">React Native</span>
            </motion.div>
          </div>

          {/* Background Decoration */}
          <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
