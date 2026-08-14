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
      className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white py-24 px-6 relative transition-colors duration-300 overflow-hidden"
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

        <p className="text-slate-600 dark:text-gray-400 text-center mt-5 max-w-2xl mx-auto text-base sm:text-lg">
          Hands-on technical internships spanning AI/ML, Full-Stack Web Development, and IT systems engineering.
        </p>

        {/* Timeline Grid */}
        <div className="mt-16 space-y-8 max-w-4xl mx-auto relative">
          {/* Vertical Timeline Bar for Desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600 opacity-30" />

          {internships.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-20 group"
            >
              {/* Timeline Icon Badge */}
              <div className="hidden md:flex absolute left-3 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-600 dark:text-cyan-400 items-center justify-center backdrop-blur-md shadow-sm group-hover:scale-110 transition duration-300 z-10">
                <FaBriefcase className="text-sm" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-400/40 shadow-md dark:shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-1">
                      <FaAward className="text-amber-500" /> {item.type}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-indigo-700 dark:text-indigo-300 font-semibold text-base sm:text-lg mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0 text-xs sm:text-sm">
                    <span className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 font-medium">
                      <FaCalendarAlt className="text-cyan-600 dark:text-cyan-400 text-xs" />
                      {item.period}
                    </span>
                    <span className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-400/40 text-emerald-800 dark:text-emerald-300 font-medium">
                      <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400 text-xs" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="mt-5 space-y-3">
                  {item.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 text-base shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-cyan-500/10 border border-slate-200 dark:border-cyan-400/20 text-slate-800 dark:text-cyan-300 text-xs font-semibold"
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
