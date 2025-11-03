import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center w-full min-h-screen px-4 md:px-8 relative overflow-hidden gap-8 md:gap-16"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-start justify-center gap-6 relative z-10 max-w-2xl"
      >
        <div className="flex flex-col gap-4 justify-center ml-20  items-start">
          <div>
            <h1 className="md:text-7xl font-bold font-mono text-white">
              Pranav <span className="text-green-500">Joshi</span>
            </h1>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-400 font-mono max-w-xl">
              I&apos;m a creative developer who loves turning ideas into clean,
              interactive web experiences. I&apos;m passionate about crafting
              smooth, intuitive interfaces with pixel-perfect design that feel
              as good as they look.
            </p>
          </div>
          <div>
            <a
              href={process.env.NEXT_PUBLIC_RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-mono font-semibold rounded-md shadow transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              My Resume!
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileHover={{ scale: 1.05 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex items-center justify-center relative z-10"
      >
        <div className="relative">
          {/* Multiple glow layers for depth - reduced intensity */}
          <div className="absolute inset-0 bg-green-500/15 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute inset-0 bg-green-500/8 rounded-full blur-[50px]" />
          <div className="absolute inset-0 bg-green-500/4 rounded-full blur-[30px]" />

          {/* Profile image container with enhanced shadow */}
          <div className="relative">
            {/* Outer glow ring - reduced intensity */}
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-full blur-lg" />

            {/* Image container with border and shadow - increased size */}
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <Image
                src="/profile.jpg"
                alt="Profile image"
                width={500}
                height={500}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Animated highlight effect - reduced intensity */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/0 via-green-500/5 to-green-500/0 animate-[spin_12s_linear_infinite]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
