"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black/80 backdrop-blur py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">Talha Jamil</h2>
            <p className="text-sm text-gray-400">Fullstack Developer</p>
          </div>

          {/* Center: Quick Links */}
          <nav className="flex space-x-6 text-sm">
            <Link href="#hero" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Right: Social Links */}
          <div className="flex space-x-4 text-gray-400">
            <a
              href="mailto:your@email.com"
              className="hover:text-white"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Talha Jamil. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500">❤️</span> using{" "}
            <span className="font-semibold text-white">Next.js</span> &{" "}
            <span className="font-semibold text-white">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
