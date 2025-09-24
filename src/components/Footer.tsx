import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] py-8 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Tagline */}
        <p className="text-gray-300 text-sm font-mono">
          Built by <span className="text-green-500">Pranav Joshi</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:pranavjoshitkd@gmail.com"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <FaEnvelope className="text-xl" />
          </a>
          <a
            href="https://github.com/pranav600"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshipranav3322/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
