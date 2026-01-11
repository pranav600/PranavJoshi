"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Technologies", href: "#technologies" },
];

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-50/90 dark:bg-[#181818]/90 backdrop-blur sticky top-0 z-50 border-b border-gray-200 dark:border-white/5">
      <div className="max-w-0xl mx-auto px-5 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left: Hamburger (mobile) */}
        <div className="flex items-center gap-4 justify-self-start">
          <button
            className="md:hidden inline-flex items-center text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}>
            {open ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        <div className="hidden md:block justify-self-center">
          <ul className="flex gap-8 text-sm lg:text-lg font-mono text-gray-700 dark:text-gray-200 whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 cursor-pointer">
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex items-center gap-4 justify-self-end">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-[#121212]">
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm font-mono text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => {
                    setOpen(false);
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block w-full text-left py-2 hover:text-green-500 dark:hover:text-green-400">
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
