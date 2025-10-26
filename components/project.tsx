"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  id,
  title,
  description,
  tags,
  imageUrl,
  index,
  link,
  category
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + index * 0.05,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        y: yProgress,
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="group mb-6 sm:mb-10 last:mb-0"
    >
      {/* Wrap the entire card in a Link */}
      <Link href={link} target="_blank" rel="noopener noreferrer">
          {/* Category Badge */}
          <div className="absolute -top-1 left-4 z-10">
            <span className={`px-4 py-2 text-sm font-medium rounded-full ${
              category === "Personal" 
                ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30" 
                : "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
            }`}>
              {category}
            </span>
            
          </div>
        <section className="bg-gray-100 max-w-[42rem] border border-black/10 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-150 transition-all duration-300 sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/15 dark:border-white/10 shadow-lg hover:shadow-xl cursor-pointer">
          

          {/* Content Section */}
          <motion.div 
            className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white mb-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="mt-2 leading-relaxed text-gray-600 dark:text-white/80 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            
            <motion.ul 
              className="flex flex-wrap mt-6 gap-2 sm:mt-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tags.map((tag, tagIndex) => (
                <motion.li
                  className="bg-black/80 px-3 py-1.5 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white/20 dark:text-white/90 font-medium shadow-sm hover:shadow-md transition-shadow cursor-default"
                  key={tagIndex}
                  variants={tagVariants}
                  custom={tagIndex}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Fixed Image Positioning */}
          <div className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-64 group-even:right-[initial] group-even:-left-40">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateZ: -1,
                transition: { duration: 0.4 }
              }}
              className="w-full h-full"
            >
              <Image
                src={imageUrl}
                alt={`${title} project screenshot`}
                quality={95}
                fill
                className="rounded-lg shadow-2xl border border-black/10 object-cover
                transition-all duration-500
                group-hover:scale-125
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2"
              />
              
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 blur-md -z-10"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>

          {/* Subtle Background Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-white/5 dark:to-gray-800/5 rounded-xl opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </section>
      </Link>

      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.5,
        }}
        className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
      />
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: index * 0.5 + 1,
        }}
        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
      />
    </motion.div>
  );
}