"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden  pt-20 pb-32">
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 shadow-sm"
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Full-Stack Developer
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white">
                Hi, I'm
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Suraj Kumar
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0"
            >
              Crafting exceptional digital experiences with React, Next.js and
              modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-5 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Contact Me <BsArrowRight className="text-lg" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-5 py-3 sm:px-6 sm:py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                Download CV <HiDownload className="text-lg" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-4"
            >
              {[
                {
                  icon: <FaGithub className="text-xl" />,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: <BsLinkedin className="text-xl" />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: <FaTwitter className="text-xl" />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Circular image container with overflow */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden -mt-16 sm:-mt-20">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                alt="Professional portrait"
                fill
                className="object-cover object-top"
                quality={100}
                priority
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_10px_rgba(99,102,241,0.2)] dark:shadow-[inset_0_0_30px_10px_rgba(79,70,229,0.3)] pointer-events-none"></div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl z-[-1]"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-purple-500/10 blur-xl z-[-1]"
            ></motion.div>

            {/* Floating tech badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2"
            >
              <span className="text-sm font-medium">React</span>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2"
            >
              <span className="text-sm font-medium">Next.js</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
