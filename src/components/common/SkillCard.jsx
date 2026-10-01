import { motion } from "framer-motion";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl py-5 px-5 text-center hover:border-slate-300 dark:hover:border-zinc-700 transition-colors duration-200 shadow-sm"
    >
      <Icon
        size={32}
        className={`${skill.color} mx-auto mb-3 transition-transform duration-200 group-hover:scale-110`}
      />

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
        {skill.name}
      </h3>

      <p className="text-slate-500 dark:text-zinc-400 text-xs mt-1">
        {skill.category}
      </p>
    </motion.div>
  );
}

export default SkillCard;