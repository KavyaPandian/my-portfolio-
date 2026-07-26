import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[2px] shadow-[0_0_15px_rgba(34,211,238,0.45)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-lg text-cyan-400">
              K
            </div>
          </div>
          <span className="text-xl font-bold tracking-wide text-slate-900 dark:text-white">
            Kavya<span className="text-cyan-500 dark:text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Menu & Theme Switcher */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-slate-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2.5 rounded-full bg-slate-800/80 dark:bg-white/5 border border-slate-700 dark:border-white/10 text-amber-400 dark:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg text-indigo-400" />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-full bg-slate-800/80 dark:bg-white/5 border border-slate-700 dark:border-white/10 text-amber-400 dark:text-cyan-300 transition cursor-pointer"
          >
            {isDark ? <FaSun className="text-base" /> : <FaMoon className="text-base text-indigo-400" />}
          </button>

          <button
            className="text-2xl text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-gray-800 px-6 py-5 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block py-2.5 text-gray-300 hover:text-cyan-400 transition font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;