import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";
import internships from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white py-24 px-6 relative transition-colors duration-200 overflow-hidden"
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
          Internships & <span className="text-cyan-600 dark:text-cyan-400">Experience</span>
        </motion.h2>

        <p className="text-slate-600 dark:text-zinc-400 text-center mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          Hands-on technical internships spanning AI/ML, Full-Stack Web Development, and IT systems engineering.
        </p>

        {/* Timeline Grid */}
        <div className="mt-16 space-y-8 max-w-4xl mx-auto relative">
          {/* Vertical Timeline Bar for Desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-zinc-800" />

          {internships.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-20 group"
            >
              {/* Timeline Icon Badge */}
              <div className="hidden md:flex absolute left-3 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 text-cyan-600 dark:text-cyan-400 items-center justify-center z-10 shadow-sm">
                <FaBriefcase className="text-sm" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 shadow-sm transition-colors duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-zinc-800">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-1">
                      <FaAward className="text-amber-500" /> {item.type}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base sm:text-lg mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0 text-xs sm:text-sm">
                    <span className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 font-medium">
                      <FaCalendarAlt className="text-cyan-600 dark:text-cyan-400 text-xs" />
                      {item.period}
                    </span>
                    <span className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-medium">
                      <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400 text-xs" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="mt-5 space-y-3">
                  {item.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                      <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 text-base shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
