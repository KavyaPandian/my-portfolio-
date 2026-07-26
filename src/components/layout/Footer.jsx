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
    <footer className="bg-slate-100 dark:bg-[#02050e] text-slate-900 dark:text-white border-t border-slate-300 dark:border-white/10 py-12 px-6 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#home" className="text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-cyan-600 dark:text-cyan-400">K</span>P
          </a>
          <span className="text-slate-400 dark:text-gray-500">|</span>
          <p className="text-slate-800 dark:text-gray-300 font-semibold text-sm">Kavya Pandian Portfolio</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-800 dark:text-gray-300 font-semibold">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-gray-300 text-xs font-bold hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition cursor-pointer shadow-sm dark:shadow-none"
        >
          <span>Back to top</span>
          <FaArrowUp className="text-cyan-600 dark:text-cyan-400" />
        </button>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-300 dark:border-white/5 flex items-center justify-between text-xs text-slate-700 dark:text-gray-400 font-medium">
        <p>© {new Date().getFullYear()} Kavya Pandian. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
