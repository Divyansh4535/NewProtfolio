"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

// Enhanced Timeline Component
const Timeline = ({ experiences }: { experiences: typeof experiencesData }) => {
  return (
    <div className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden lg:block">
        {/* Animated glow effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-pink-500/50 blur-sm"
        />
      </div>

      {/* Timeline Items */}
      <div className="space-y-12 lg:space-y-16">
        {experiences.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

// Enhanced Timeline Item Component
const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <FaBriefcase className="text-blue-500 text-lg" />;
      case "education":
        return <FaGraduationCap className="text-green-500 text-lg" />;
      case "internship":
        return <FaCode className="text-purple-500 text-lg" />;
      default:
        return <FaRocket className="text-orange-500 text-lg" />;
    }
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-8 group`}
    >
      {/* Timeline Dot for Desktop */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-2xl z-20 hidden lg:flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </div>

      {/* Date for Desktop */}
      <div
        className={`hidden lg:flex w-48 ${
          isEven ? "order-1 justify-end" : "order-3 justify-start"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className={`flex items-center gap-3 px-4 py-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg ${
            isEven ? "flex-row-reverse text-right" : "text-left"
          }`}
        >
          <FaCalendarAlt className="text-blue-500 flex-shrink-0" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
            {item.date}
          </span>
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${isEven ? "lg:order-3" : "lg:order-1"} w-full`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-blue-500/30"
        >
          {/* Gradient Border Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 -z-10"
          />

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
            className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.3 + 1,
            }}
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            <div className="flex items-start gap-4 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
              >
                {getIcon(item.type || "work")}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                {item.company && (
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {item.company}
                  </p>
                )}

                {/* Date and Location - Mobile */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 lg:hidden">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-green-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Location - Desktop */}
                <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            {/* Company Logo */}
            {item.companyLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-800 p-2 shadow-lg flex-shrink-0"
              >
                <img
                  src={item.companyLogo}
                  alt={`${item.company} logo`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            )}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
          >
            {item.description}
          </motion.p>

          {/* Technologies */}
          {item.technologies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {item.technologies.map((tech: string, techIndex: number) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.1 + index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-sm font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:shadow-md transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Achievements */}
          {item.achievements && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
              className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FaRocket className="text-green-500" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {item.achievements.map(
                  (achievement: string, achievementIndex: number) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: achievementIndex * 0.1 + index * 0.1 + 0.8,
                      }}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: achievementIndex * 0.5,
                        }}
                        className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      />
                      <span>{achievement}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Experience Component
export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28 mb-28"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-dashed border-blue-500/10 rounded-full"
        />
      </div> */}

      <div className="max-w-7xl mx-auto">
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
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Technical Arsenal
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My path through the tech industry, creating innovative solutions and
            growing as a developer
          </p>
        </motion.div>
        {/* Enhanced Timeline */}
        <Timeline experiences={experiencesData} />

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold"
          >
            <FaRocket className="text-lg" />
            Download Full Resume
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
}
