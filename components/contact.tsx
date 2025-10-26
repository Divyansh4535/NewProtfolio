"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFileContract, FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      url: "https://linkedin.com/in/divyanshukmr",
      color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "GitHub",
      icon: FaGithubSquare,
      url: "https://github.com/divyansh4535",
      color:
        "hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/20 dark:hover:text-white",
    },
    {
      name: "Twitter",
      icon: BsTwitter,
      url: "https://twitter.com/divyanshukmr",
      color: "hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20",
    },
    {
      name: "WhatsApp",
      icon: BsWhatsapp,
      url: "https://wa.me/919305603604",
      color:
        "hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20",
    },
  ];

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Me",
      content: "mr.divyanshu.kmr@gmail.com",
      link: "mailto:mr.divyanshu.kmr@gmail.com",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: FiPhone,
      title: "Call Me",
      content: "+91 9305603604",
      link: "tel:+919305603604",
      color: "text-green-500 bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: FiMapPin,
      title: "Location",
      content: "Lucknow, India",
      link: "#",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 mb-32 sm:mb-48 scroll-mt-28 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-dashed border-blue-500/10 rounded-full"
        />
      </div> */}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <FaFileContract className="text-blue-500 text-lg" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Technical Arsenal
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create
            something amazing together. I'm always open to new opportunities and
            interesting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Follow My Journey
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success(
                "Message sent successfully! I'll get back to you soon."
              );
            }}
          >
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Let's start a conversation about your project
              </p>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="senderName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="senderName"
                      name="senderName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="senderEmail"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="senderEmail"
                      name="senderEmail"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Hello, I'd like to discuss a project about..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SubmitBtn />
                </motion.div>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
