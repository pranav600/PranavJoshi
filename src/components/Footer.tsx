import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] py-8 px-4 backdrop-blur bg-[#181818]/90">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Tagline */}
        <p className="text-gray-300 text-sm font-mono">
          Built by <span className="text-green-500">Pranav Joshi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
