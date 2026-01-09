"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}>
      <motion.div
        initial={false}
        animate={{
          rotate: resolvedTheme === "dark" ? 0 : 180,
          scale: resolvedTheme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center">
        <FiMoon className="text-xl text-gray-200" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: resolvedTheme === "light" ? 0 : -180,
          scale: resolvedTheme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center">
        <FiSun className="text-xl text-yellow-500" />
      </motion.div>
      {/* Invisible placeholder to maintain button size */}
      <FiSun className="text-xl opacity-0" />
    </motion.button>
  );
}
