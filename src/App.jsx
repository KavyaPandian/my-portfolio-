import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
        <Toaster position="top-right" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;