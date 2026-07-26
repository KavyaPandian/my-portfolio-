import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, skills } from "../../data/skills";
import SkillCard from "../common/SkillCard";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-24 px-6 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white"
        >
          My <span className="text-cyan-600 dark:text-cyan-400">Tech Stack</span>
        </motion.h2>

        <p className="text-slate-600 dark:text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          Technologies and tools I use to build modern,
          scalable and responsive web applications.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-12 mb-14">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold border border-cyan-300 shadow-md dark:shadow-[0_0_25px_rgba(34,211,238,0.6)] scale-105"
                    : "bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-gray-300 hover:border-cyan-500 dark:hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 shadow-sm dark:shadow-none"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;