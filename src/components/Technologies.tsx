import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
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

// Custom SVG Claude Logo
const ClaudeLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212z" />
  </svg>
);

// Technology stack data array grouped by category: Frontend, Backend, and Tools
const technologies = [
  {
    // Frontend frameworks and styling libraries
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
    // Backend runtimes, frameworks, and databases
    title: "Backend",
    items: [
      { name: "Node.js", logo: <FaNodeJs /> },
      { name: "Express.js", logo: <FaNodeJs /> },
      { name: "MongoDB", logo: <FaDatabase /> },
      { name: "Python", logo: <FaPython /> },
    ],
  },
  {
    // Developer tools, AI assistants, and deployment platforms
    title: "Tools",
    items: [
      { name: "Claude", logo: <ClaudeLogo /> },
      { name: "GitHub", logo: <FaGithub /> },
      { name: "Antigravity", logo: <FaRocket /> },
      { name: "Cursor AI", logo: <FaBrain /> },
      { name: "Vercel", logo: <FaOctopusDeploy /> },
      { name: "Windsurf", logo: <FaWind /> },
    ],
  },
];

/**
 * Technologies - Displays the full tech stack in an animated 3-column grid.
 * Each column represents a category (Frontend, Backend, Tools) with
 * staggered framer-motion animations on scroll.
 */
// Main Technologies Section Component
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
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
            Technologies
          </h2>
          <div className="h-1 w-20 bg-green-500 rounded-full mx-auto" />
        </motion.div>

        {/* Animated 3-column tech grid — staggered by category index */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group">
      
              <div className="w-full h-full min-w-[300px] min-h-[600px] relative overflow-hidden border-4 border-zinc-300 dark:border-zinc-800 bg-[#f8f9fa] dark:bg-[#121214] rounded-[25px] shadow-2xl">
                {/* Dotted whiteboard grid pattern (Light Mode) */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e4e7_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-80 dark:hidden"></div>
                {/* Dotted blackboard/darkboard grid pattern (Dark Mode) */}
                <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(#27272a_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-80"></div>
                
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
                    <h3 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 whitespace-nowrap tracking-wide font-sans">
                      {col.title}
                    </h3>
                  </div>

                  <div className="flex-1 flex items-center justify-center w-full relative z-10">
                    <ul className="flex flex-wrap gap-x-6 gap-y-8 justify-center w-full px-2">
                      {col.items.map((tech, index) => (
                        <motion.li
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-[#1c1c1f] border-2 border-zinc-800 dark:border-zinc-700 rounded-2xl shadow-[4px_4px_0px_0px_rgba(24,24,27,0.85)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
                            index % 6 === 0 ? "rotate-[-4deg] -translate-x-3 translate-y-2" :
                            index % 6 === 1 ? "rotate-[3deg] translate-x-4 -translate-y-3" :
                            index % 6 === 2 ? "rotate-[-2.5deg] -translate-x-1.5 -translate-y-4" :
                            index % 6 === 3 ? "rotate-[4deg] translate-x-3.5 translate-y-3" :
                            index % 6 === 4 ? "rotate-[-3deg] -translate-x-4 -translate-y-2" : "rotate-[2.5deg] translate-x-2.5 translate-y-4"
                          }`}>
                          <span className="text-2xl text-green-600 dark:text-green-400">
                            {tech.logo}
                          </span>
                          <span className="font-mono text-zinc-800 dark:text-zinc-200 font-bold tracking-tight">
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
