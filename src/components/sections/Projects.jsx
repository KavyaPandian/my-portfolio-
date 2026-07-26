import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
  FaCheckCircle,
  FaCodeBranch,
} from "react-icons/fa";
import { projects } from "../../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-24 px-6 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white"
        >
          Featured <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
        </motion.h2>

        <p className="text-slate-600 dark:text-gray-400 text-center mt-5 max-w-2xl mx-auto text-base sm:text-lg">
          A collection of projects that showcase my skills in full-stack
          development, UI/UX, and AI/ML.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500 dark:hover:border-cyan-400/60 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300 flex flex-col shadow-sm dark:shadow-none"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition cursor-pointer"
                    >
                      <FaInfoCircle /> Details
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View GitHub Repository"
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition"
                      >
                        <FaGithub />
                      </a>

                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Preview"
                        className="p-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-gray-950 transition"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-cyan-400/50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl dark:shadow-[0_0_50px_rgba(34,211,238,0.3)] relative p-5 sm:p-8"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition cursor-pointer"
              >
                <FaTimes />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400/40 text-xs font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                  <FaCodeBranch /> Featured Project
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
                {selectedProject.title}
              </h3>

              {/* Project Modal Banner */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 h-56 sm:h-64 bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-5 font-medium">
                {selectedProject.description}
              </p>

              {/* Key Highlights */}
              <div className="mt-6">
                <h4 className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                  Key Highlights & Achievements
                </h4>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-gray-300 font-medium">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 text-base mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-600 dark:text-gray-400 uppercase tracking-wider mb-2.5">
                  Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-cyan-500/10 border border-slate-300 dark:border-cyan-400/30 text-slate-800 dark:text-cyan-300 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="flex items-center gap-4 mt-8 pt-5 border-t border-slate-200 dark:border-white/10">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg transition"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-gray-300 font-bold hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                >
                  <FaGithub className="text-sm" /> Code
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
