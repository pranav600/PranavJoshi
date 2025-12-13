"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Technologies", href: "#technologies" },
  { name: "Get In Touch", href: "#contact" },
];

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#181818]/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-0xl mx-auto px-5 py-4 grid grid-cols-3 items-center">
        {/* Left: Hamburger (mobile) */}
        <div className="flex items-center gap-4 justify-self-start">
          <button
            className="md:hidden inline-flex items-center text-gray-200 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Center: Desktop nav links */}
        <div className="hidden md:block justify-self-center">
          <ul className="flex gap-8 text-sm lg:text-lg font-mono text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Socials (desktop) */}
        <div className="hidden md:flex items-center gap-4 justify-self-end">
          <a
            href={process.env.NEXT_PUBLIC_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`}
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
            aria-label="Email me"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#121212]">
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm font-mono text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block w-full py-2 hover:text-green-400"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
