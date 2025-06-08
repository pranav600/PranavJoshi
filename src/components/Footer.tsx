import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="text-gray-400 max-w-md">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                <FaEnvelope className="text-xl" />
                <span>your.email@example.com</span>
              </a> */}
              <a
                href="mailto:pranavjoshitkd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/pranav600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joshipranav3322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#home"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#case-studies"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Case Studies
              </a>
              <a
                href="#technologies"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Technologies
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Pranav Joshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
