import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo o Nombre */}
        <div className="text-lg font-semibold">
          <span className="text-primary dark:text-blue-400">SoftSkill</span> © {new Date().getFullYear()}
        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="/about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="/contact" className="hover:text-blue-500 transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-blue-500 transition-colors">Privacy</a>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
