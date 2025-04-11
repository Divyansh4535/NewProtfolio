"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="z-[999] relative w-full">
      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 h-14 bg-gray-800/90 backdrop-blur-md border w-8xl border-gray-700 rounded-full shadow-lg px-6 items-center justify-between gap-8"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        {/* Left Links */}
        <div className="flex gap-5">
          {links.slice(0, 3).map((link) => (
            <NavItem
              key={link.hash}
              link={link}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              setTimeOfLastClick={setTimeOfLastClick}
            />
          ))}
        </div>

        {/* Logo */}
        <motion.div className="flex items-center border-0 whitespace-nowrap justify-center mx-2">
          <h2 className="text-orange-500 font-bold text-xl">Suraj Kumar</h2>
        </motion.div>

        {/* Right Links */}
        <div className="flex gap-5">
          {links.slice(3).map((link) => (
            <NavItem
              key={link.hash}
              link={link}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              setTimeOfLastClick={setTimeOfLastClick}
            />
          ))}
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex fixed top-0 left-0 right-0 justify-between items-center px-6 py-4 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h2 className="text-orange-500 font-bold text-xl">Suraj Kumar</h2>
        </motion.div>

        {/* Hamburger Menu */}
        <motion.button
          onClick={toggleMenu}
          className="text-orange-500 focus:outline-none z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 pt-20"
          >
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className={clsx(
                  "text-2xl font-medium transition-all duration-300",
                  {
                    "text-orange-500": activeSection === link.name,
                    "text-gray-300 hover:text-orange-400":
                      activeSection !== link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  link,
  activeSection,
  setActiveSection,
  setTimeOfLastClick,
}: {
  link: { name: string; hash: string };
  activeSection: any;
  setActiveSection: any;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <motion.div
      className="h-full flex items-center justify-center relative"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        className={clsx(
          "flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300",
          {
            "text-orange-500": activeSection === link.name,
            "text-gray-400 hover:text-orange-400": activeSection !== link.name,
          }
        )}
        href={link.hash}
        onClick={() => {
          setActiveSection(link.name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {link.name}
        {activeSection === link.name && (
          <motion.span
            className="bg-gray-700 rounded-full absolute inset-0 -z-10"
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </Link>
    </motion.div>
  );
}
