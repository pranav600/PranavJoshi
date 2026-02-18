import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiFramer, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import TextType from "./ui/TextType";

/**
 * Home - Hero section with profile information and bento grid layout
 */
const Home = () => {
  // Render the persistent home section
  return (
    <section
      id="home"
      className="min-h-screen w-full px-4 md:px-8 py-20 flex items-center justify-center relative overflow-hidden font-mono">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a] -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 rounded-full border border-green-500/30">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-green-600 text-sm font-semibold tracking-wide">
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Hi, I'm a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Full Stack
            </span>
            <br />
            Developer<span className="text-green-500">.</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
            Passionate about merging clean code with thoughtful design.
          </p>

          <motion.a
            href={process.env.NEXT_PUBLIC_RESUME}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Resume <FaArrowRight />
          </motion.a>
        </motion.div>

        {/* Right Column: Bento Grid */}
        <div className="grid grid-cols-2 gap-4 h-full min-h-[500px]">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-100 dark:bg-[#18181b] p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-200 dark:border-white/5 flex flex-col justify-between hover:border-green-500/30 transition-colors group">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-gray-200 dark:bg-white/5 rounded-full group-hover:bg-green-500/20 transition-colors">
                <FaMapMarkerAlt className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-green-400" />
              </div>
              {/* <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                  Remote
                </span> */}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Rajkot, India
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Based in
              </p>
            </div>
          </motion.div>

          {/* Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="row-span-2 relative rounded-3xl overflow-hidden border border-white/5 group">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-medium">Pranav Joshi</span>
            </div>
          </motion.div>

          {/* Tech Stack / Gradient Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-green-900 to-emerald-950 p-6 rounded-3xl flex flex-col justify-center gap-4 border border-white/5 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-white/5 text-9xl">
              <SiReact />
            </div>
            <p className="text-green-200 text-sm font-medium relative z-10">
              Expertise
            </p>
            <div className="flex gap-4 text-3xl text-white relative z-10">
              <SiReact />
              <SiNextdotjs />
              <SiTailwindcss />
              <SiFramer />
            </div>
          </motion.div>

          {/* Social Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col grid md:grid-cols-3 gap-4 md:gap-5">
            {/* GitHub */}
            <a
              href={process.env.NEXT_PUBLIC_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-[#09090b] aspect-square rounded-[2rem] border border-gray-200 dark:border-white/5 flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group shadow-lg">
              <FaGithub className="text-3xl text-gray-700 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-[#09090b] aspect-square rounded-[2rem] border border-gray-200 dark:border-white/5 flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group shadow-lg">
              <FaLinkedin className="text-3xl text-gray-700 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
            </a>

            {/* Email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_EMAIL}&body=Heyy%20Pranav,%0D%0A%0D%0AI%20wanted%20to%20reach%20out%20to%20you%20regarding...`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-[#09090b] aspect-square rounded-[2rem] border border-gray-200 dark:border-white/5 flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group shadow-lg">
              <FaEnvelope className="text-3xl text-gray-700 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
            </a>
          </motion.div>

          {/* Code Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-gray-100 dark:bg-[#18181b] rounded-[2rem] border border-gray-200 dark:border-white/5 flex items-center justify-center hover:border-green-500/30 transition-colors">
            <TextType
              as="span"
              text="&lt; Code is Poetry /&gt;"
              className="text-base md:text-xl font-bold font-mono text-gray-900 dark:text-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
