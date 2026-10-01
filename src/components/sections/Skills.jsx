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
          My <span className="text-cyan-600 dark:text-cyan-400">Tech Stack</span>
        </motion.h2>

        <p className="text-slate-600 dark:text-zinc-400 text-center mt-4 max-w-2xl mx-auto">
          Technologies and tools I use to build modern,
          scalable and responsive web applications.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mt-10 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-cyan-600 border-cyan-600 text-white"
                    : "bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700"
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
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
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