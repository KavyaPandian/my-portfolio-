import { motion } from "framer-motion";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="group bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl py-5 px-5 text-center hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 shadow-sm dark:shadow-none"
    >
      <Icon
        size={34}
        className={`${skill.color} mx-auto mb-3 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1`}
      />

      <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mt-1">
        {skill.name}
      </h3>

      <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
        {skill.category}
      </p>
    </motion.div>
  );
}

export default SkillCard;