function Background() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-40" />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-10 left-[20%] w-[500px] h-[500px] bg-white/[0.03] blur-[160px] rounded-full animate-orb-1" />
      <div className="absolute bottom-10 right-[20%] w-[500px] h-[500px] bg-white/[0.03] blur-[160px] rounded-full animate-orb-2" />
    </div>
  );
}

export default Background;