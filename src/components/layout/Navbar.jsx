import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-zinc-950/95 border-b border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-zinc-800 text-cyan-500 dark:text-cyan-400 font-bold text-sm tracking-wider flex items-center justify-center border border-slate-200 dark:border-zinc-700">
            KP
          </div>
          <span className="text-xl font-bold tracking-wide text-slate-900 dark:text-white">
            Kavya<span className="text-cyan-600 dark:text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Menu & Theme Switcher */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer"
          >
            {isDark ? <FaSun className="text-base text-amber-500" /> : <FaMoon className="text-base text-indigo-500" />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 transition cursor-pointer"
          >
            {isDark ? <FaSun className="text-base text-amber-500" /> : <FaMoon className="text-base text-indigo-500" />}
          </button>

          <button
            className="p-2 text-2xl text-slate-800 dark:text-zinc-200 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-900 transition cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 px-6 py-4 space-y-1 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block py-2 px-3 rounded-lg text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-zinc-900 transition font-medium text-base"
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