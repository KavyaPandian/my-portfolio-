import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-zinc-800 py-12 px-6 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#home" className="text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-cyan-600 dark:text-cyan-400">K</span>P
          </a>
          <span className="text-slate-300 dark:text-zinc-700">|</span>
          <p className="text-slate-600 dark:text-zinc-400 font-medium text-sm">Kavya Pandian Portfolio</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600 dark:text-zinc-400 font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-semibold hover:border-slate-300 dark:hover:border-zinc-700 transition cursor-pointer shadow-sm"
        >
          <span>Back to top</span>
          <FaArrowUp className="text-cyan-600 dark:text-cyan-400 text-xs" />
        </button>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-500 font-normal">
        <p>© {new Date().getFullYear()} Kavya Pandian. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
