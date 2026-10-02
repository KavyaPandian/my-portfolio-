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

import profile from "../../assets/images/kavya.jpeg";
import socials from "../../data/socials";
import personal from "../../data/personal";
import resume from "../../assets/resume/kavya_resume.pdf";

function Hero() {
  const [showEducationModal, setShowEducationModal] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white overflow-hidden pt-28 pb-16 flex items-center transition-colors duration-200"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >

          <p className="text-cyan-600 dark:text-cyan-400 text-lg font-medium tracking-wide mb-2">
            Hello, I'm
          </p>

          {/* Mobile Profile Avatar (In Middle on Mobile) */}
          <div className="lg:hidden my-6 flex justify-center">
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 rounded-full p-1 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 overflow-hidden">
              <img
                src={profile}
                alt="Kavya Pandian"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Clean Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-slate-900 dark:text-white">
              Kavya
            </span>{" "}
            <span className="text-slate-900 dark:text-white">
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
                "Python & AI Enthusiast",
                2200,
                "Problem Solver",
                2200,
                "UI/UX Designer",
                2200,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="h2"
              className="text-xl sm:text-2xl md:text-3xl text-cyan-700 dark:text-cyan-300 font-bold tracking-tight"
            />
          </div>

          <p className="text-slate-600 dark:text-zinc-400 mt-5 leading-relaxed max-w-xl text-base md:text-lg">
            Passionate Full Stack Developer who enjoys building modern,
            responsive, and scalable web applications using React, Node.js,
            Express, MongoDB, and Python.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-base transition-colors duration-200"
            >
              <span>View My Work</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>

            <a
              href={`${resume}?t=${Date.now()}`}
              download="Kavya_Pandian_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold text-base hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              <span>Download CV</span>
              <FaDownload className="text-xs" />
            </a>
          </div>

          {/* Contact Direct Info */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm font-medium hover:border-slate-400 dark:hover:border-zinc-600 transition-colors"
            >
              <FaEnvelope className="text-cyan-600 dark:text-cyan-400" />
              {personal.email}
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm font-medium hover:border-slate-400 dark:hover:border-zinc-600 transition-colors"
            >
              <FaPhoneAlt className="text-emerald-600 dark:text-emerald-400" />
              {personal.phone}
            </a>
          </div>

          {/* Social & Coding Platform Links */}
          <div className="flex flex-wrap items-center gap-3 mt-7 text-lg">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <SiLeetcode />
            </a>

            <a
              href={socials.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              title="HackerRank"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <SiHackerrank />
            </a>

            <a
              href={socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              title="CodeChef"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <SiCodechef />
            </a>
          </div>

          {/* Specialization & Education Highlights */}
          <div className="mt-8 space-y-3">
            {/* Specialization Pills */}
            <div className="flex flex-wrap gap-2">
              {personal.specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Interactive Academic Credential Button */}
            <div className="relative pt-1">
              <button
                onClick={() => setShowEducationModal(!showEducationModal)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 text-xs sm:text-sm font-medium hover:border-slate-300 dark:hover:border-zinc-700 transition-colors cursor-pointer group"
              >
                <FaGraduationCap className="text-cyan-600 dark:text-cyan-400 text-base" />
                <span>{personal.education.degree}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-600/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 flex items-center gap-1 font-semibold">
                  Info {showEducationModal ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
                </span>
              </button>

              {/* Expandable Academic Info Card */}
              <AnimatePresence>
                {showEducationModal && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="mt-3 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl max-w-md relative z-30"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-zinc-800">
                      <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold text-sm sm:text-base">
                        <FaGraduationCap className="text-lg" /> Academic Credentials
                      </div>
                      <button
                        onClick={() => setShowEducationModal(false)}
                        className="text-gray-500 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
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
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-semibold text-xs">
                          <FaStar className="text-amber-500 text-xs" /> {personal.education.grade}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] rounded-full p-1 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 overflow-hidden">
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