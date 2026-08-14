import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaGraduationCap,
  FaEnvelope,
  FaPhoneAlt,
  FaStar,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";

import Background from "../common/Background";
import profile from "../../assets/images/kavya.jpeg";
import socials from "../../data/socials";
import personal from "../../data/personal";

function Hero() {
  const [showEducationModal, setShowEducationModal] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white overflow-hidden pt-28 pb-16 flex items-center transition-colors duration-300"
    >
      {/* Dynamic Animated Ambient Background */}
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for Full-Time Roles 
          </motion.div>

          <p className="text-cyan-600 dark:text-cyan-400 text-lg font-medium tracking-wide mb-2">
            Hello, I'm
          </p>

          {/* Mobile Profile Avatar (In Middle on Mobile) */}
          <div className="lg:hidden my-6 flex justify-center">
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 rounded-full p-1 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-xl overflow-hidden">
              <img
                src={profile}
                alt="Kavya Pandian"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Animated Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-slate-900 dark:text-white">
              Kavya
            </span>{" "}
            <span className="text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 font-extrabold">
              Pandian
            </span>
          </h1>

          {/* Typing Role Animation Container */}
          <div className="min-h-[48px] flex items-center mt-5">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2200,
                "MERN Stack Developer",
                2200,
                "React Developer",
                2200,
                "Python & AI Enthusiast",
                2200,
                "Problem Solver",
                2200,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="h2"
              className="text-xl sm:text-2xl md:text-3xl text-cyan-700 dark:text-cyan-300 font-extrabold tracking-wide"
            />
          </div>

          <p className="text-slate-700 dark:text-gray-300 mt-5 leading-relaxed max-w-xl text-base md:text-lg">
            Passionate Full Stack Developer who enjoys building modern,
            responsive, and scalable web applications using React, Node.js,
            Express, MongoDB, and Python.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300"
            >
              <span>View My Work</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-black/90 dark:bg-zinc-900/80 border border-slate-700 dark:border-white/20 text-white font-semibold text-base hover:bg-slate-800 dark:hover:bg-white/10 hover:border-slate-500 transition-all duration-300 backdrop-blur-md shadow-sm"
            >
              <span>Download CV</span>
              <FaDownload className="text-xs" />
            </a>
          </div>

          {/* Contact Direct Info */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-gray-300 text-xs sm:text-sm font-medium hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/50 transition duration-300 backdrop-blur-md"
            >
              <FaEnvelope className="text-cyan-600 dark:text-cyan-400" />
              {personal.email}
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-gray-300 text-xs sm:text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400/50 transition duration-300 backdrop-blur-md"
            >
              <FaPhoneAlt className="text-emerald-600 dark:text-emerald-400" />
              {personal.phone}
            </a>
          </div>

          {/* Social & Coding Platform Links */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8 text-2xl">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className="p-3 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
            >
              <SiLeetcode />
            </a>

            <a
              href={socials.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              title="HackerRank"
              className="p-3 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
            >
              <SiHackerrank />
            </a>

            <a
              href={socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              title="CodeChef"
              className="p-3 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300"
            >
              <SiCodechef />
            </a>
          </div>

          {/* Specialization & Education Highlights */}
          <div className="mt-9 space-y-3">
            {/* Specialization Pills */}
            <div className="flex flex-wrap gap-2.5">
              {personal.specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-4 py-2 rounded-full bg-slate-200 dark:bg-zinc-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-cyan-300 text-xs sm:text-sm font-semibold backdrop-blur-md hover:border-cyan-500 transition duration-300 shadow-sm dark:shadow-none"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Interactive Academic Credential Button */}
            <div className="relative pt-1">
              <button
                onClick={() => setShowEducationModal(!showEducationModal)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-200 dark:bg-cyan-500/10 border border-slate-300 dark:border-cyan-400/40 text-slate-900 dark:text-cyan-300 text-xs sm:text-sm font-bold backdrop-blur-md hover:border-cyan-500 transition-all duration-300 cursor-pointer group shadow-sm dark:shadow-none"
              >
                <FaGraduationCap className="text-cyan-600 dark:text-cyan-400 text-base group-hover:scale-110 transition" />
                <span>{personal.education.degree}</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-600 text-white dark:bg-cyan-400/20 dark:text-cyan-200 border border-cyan-700 dark:border-cyan-400/30 flex items-center gap-1 font-bold">
                  Info {showEducationModal ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
                </span>
              </button>

              {/* Expandable Academic Info Card */}
              <AnimatePresence>
                {showEducationModal && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 p-5 rounded-2xl bg-white dark:bg-black/95 border border-slate-300 dark:border-cyan-400/40 backdrop-blur-xl shadow-xl dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)] max-w-md relative z-30"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold text-sm sm:text-base">
                        <FaGraduationCap className="text-lg" /> Academic Credentials
                      </div>
                      <button
                        onClick={() => setShowEducationModal(false)}
                        className="text-gray-500 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition cursor-pointer"
                      >
                        <FaTimes />
                      </button>
                    </div>

                    <div className="mt-3.5 space-y-3 text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-800 dark:text-gray-200">
                        <span className="text-slate-500 dark:text-gray-400 font-medium">Degree:</span>
                        <span className="font-semibold text-cyan-700 dark:text-cyan-300">{personal.education.degree}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-800 dark:text-gray-200">
                        <span className="text-slate-500 dark:text-gray-400 font-medium">Institution:</span>
                        <span className="font-semibold text-indigo-700 dark:text-indigo-300 text-right">{personal.education.college}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-800 dark:text-gray-200">
                        <span className="text-slate-500 dark:text-gray-400 font-medium">Grade / Performance:</span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-400/50 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                          <FaStar className="text-amber-500 dark:text-amber-400 text-xs" /> {personal.education.grade}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Right Avatar Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] rounded-full p-1 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/20 shadow-2xl overflow-hidden">
            <img
              src={profile}
              alt="Kavya Pandian"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;