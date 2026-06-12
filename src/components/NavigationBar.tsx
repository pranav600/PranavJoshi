"use client";

import ThemeToggle from "./ui/ThemeToggle";

// Nav links array — each entry maps a visible label to its anchor section ID.
// Adding a new link here automatically renders it.
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Technologies", href: "#technologies" },
];

/**
 * NavigationBar - Sticky responsive navigation bar with direct nav links
 * and a light/dark theme toggle. No hamburger menu.
 */
export default function NavigationBar() {
  return (
    <nav className="w-full bg-gray-50/90 dark:bg-[#181818]/90 backdrop-blur sticky top-0 z-50 border-b border-gray-200 dark:border-white/5">
      <div className="max-w-0xl mx-auto px-5 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left slot (empty placeholder to center nav links) */}
        <div className="flex items-center gap-4 justify-self-start"></div>

        {/* Navigation links — visible on both mobile and desktop, centered via grid */}
        <div className="justify-self-center">
          <ul className="flex gap-4 md:gap-8 text-xs md:text-sm lg:text-lg font-mono text-gray-700 dark:text-gray-200 whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  type="button"
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
    </nav>
  );
}

