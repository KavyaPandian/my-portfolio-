import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      desc: "I enjoy writing clean, maintainable and scalable code.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack",
      desc: "Building responsive frontend and powerful backend applications.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      desc: "I enjoy solving real-world problems through technology.",
    },
    {
      icon: <FaUsers />,
      title: "Team Player",
      desc: "I enjoy collaborating and learning with others.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white py-24 px-6 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white"
        >
          About <span className="text-cyan-600 dark:text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-3xl font-semibold mb-6 text-slate-900 dark:text-white">
              Passionate Full Stack Developer
            </h3>

            <p className="text-slate-600 dark:text-zinc-400 leading-8 mb-6">
              I'm a B.Tech Computer Science & Engineering graduate from SRM
              Institute of Science and Technology (8.74 CGPA), passionate about
              building modern web applications using React, Node.js, Express,
              MongoDB, and Python.
            </p>

            <p className="text-slate-600 dark:text-zinc-400 leading-8">
              I enjoy learning new technologies, solving real-world
              problems and continuously improving my development skills.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >

            {highlights.map((item) => (

              <div
                key={item.title}
                className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-zinc-700 transition duration-200 hover:-translate-y-1 shadow-sm"
              >

                <div className="text-cyan-600 dark:text-cyan-400 text-3xl mb-4">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;