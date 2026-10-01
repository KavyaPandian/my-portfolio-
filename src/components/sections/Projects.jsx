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
      className="bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white py-24 px-6 relative overflow-hidden transition-colors duration-200"
    >
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

        <p className="text-slate-600 dark:text-zinc-400 text-center mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          A collection of projects that showcase my skills in full-stack
          development, UI/UX, and AI/ML.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-zinc-700 transition-colors duration-200 flex flex-col shadow-sm"
              >
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 text-xs font-semibold inline-block">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {project.shortDescription || project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {(project.cardTechnologies || project.technologies).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-semibold transition cursor-pointer"
                    >
                      <FaInfoCircle /> Details
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View GitHub Repository"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                      >
                        <FaGithub />
                      </a>

                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Preview"
                        className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-5 sm:p-8"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-700 transition cursor-pointer"
              >
                <FaTimes />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 text-xs font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1 font-medium">
                  <FaCodeBranch /> Featured Project
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
                {selectedProject.title}
              </h3>

              <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mt-5 font-normal">
                {selectedProject.modalDescription || selectedProject.description}
              </p>

              {/* Key Highlights */}
              <div className="mt-6">
                <h4 className="text-base font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                  Key Highlights & Achievements
                </h4>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-medium">
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
                <h4 className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-2.5">
                  Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedProject.modalTechnologies || selectedProject.technologies).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="flex items-center gap-4 mt-8 pt-5 border-t border-slate-200 dark:border-zinc-800">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold hover:bg-slate-200 dark:hover:bg-zinc-700 transition"
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
