import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] py-8 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Tagline */}
        <p className="text-gray-300 text-sm font-mono">
          Built by <span className="text-green-500">Pranav Joshi</span>
        </p>

        {/* Contact Link */}
        <div className="flex justify-center">
          <a
            href="mailto:pranavjoshitkd@gmail.com"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
