import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaOctopusDeploy,
  FaPython,
  FaReact,
  FaRocket,
  FaVuejs,
  FaWind,
} from "react-icons/fa";

const technologies = [
  {
    title: "Frontend",
    items: [
      { name: "React", logo: <FaReact /> },
      { name: "Vue.js", logo: <FaVuejs /> },
      { name: "Next.js", logo: <FaReact /> },
      { name: "Tailwind CSS", logo: <FaCss3 /> },
      { name: "HTML / CSS", logo: <FaHtml5 /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", logo: <FaNodeJs /> },
      { name: "Express.js", logo: <FaReact /> },
      { name: "MongoDB", logo: <FaDatabase /> },
      { name: "Python", logo: <FaPython /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", logo: <FaCode /> },
      { name: "GitHub", logo: <FaGithub /> },
      { name: "Antigravity", logo: <FaRocket /> },
      { name: "Cursor AI", logo: <FaBrain /> },
      { name: "Vercel", logo: <FaOctopusDeploy /> },
      { name: "Windsurf", logo: <FaWind /> },
    ],
  },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 px-4 relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies
          </h2>
          <div className="h-1 w-20 bg-green-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group">
              <div className="w-full h-full min-w-[300px] min-h-[600px] relative overflow-hidden border border-[#27272a] rounded-[25px]">
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "3rem",
                  }}>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap group-hover:text-green-500 transition-colors duration-300">
                      {col.title}
                    </h3>
                  </div>

                  <div className="flex-1 flex items-center justify-center w-full">
                    <ul className="grid gap-x-10 gap-y-6 w-full">
                      {col.items.map((tech, index) => (
                        <motion.li
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-3 group/item">
                          <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-[#181818] rounded-full border border-gray-300 dark:border-gray-700 group-hover/item:border-green-500/50 transition-colors duration-300">
                            <span className="text-xl text-green-400 group-hover/item:text-green-500 transition-colors duration-300">
                              {tech.logo}
                            </span>
                          </span>
                          <span className="bg-gray-200 dark:bg-[#111] text-gray-900 dark:text-gray-200 font-mono px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 group-hover/item:border-green-500/50 transition-colors duration-300">
                            {tech.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
