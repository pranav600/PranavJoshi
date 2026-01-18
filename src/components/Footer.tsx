import React from "react";

/**
 * Footer component - Displays site footer with branding
 */
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#181818]/90 py-8 px-4 backdrop-blur border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-300 text-sm font-mono">
          Built by <span className="text-green-500">prnv.js</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
