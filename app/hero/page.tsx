import SparklesCore from "@/ui/SparklesCore";
import Typewriter from "@/ui/Typewriter";
import Link from "next/link";
import React from "react";
import {
  FaArrowRightLong,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchat,
  FaTelegram,
  FaWhatsapp,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden dark:bg-black bg-white transition-colors"
    >
      <SparklesCore
        className={`w-full h-full`}
        particleCount={250}
        speed={0.5}
      />
      <div className="relative flex flex-col h-screen items-center justify-center sm:mt-16">
        <h1 className="text-4xl font-bold tracking-tight ">Hi, I&apos;m</h1>
        <h1 className="text-6xl font-bold tracking-tight">Talha Jamil</h1>
        <span className="mt-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Frontend Developer
        </span>
        <Typewriter
          words={[
            "I craft modern web experiences ✨",
            "I design clean and user-friendly interfaces 🎨",
            "I make ideas come alive with code 💻",
            "I turn pixels into responsive designs 📱",
            "I love bringing UX/UI to life 🖌️",
            "I build fast, beautiful, and interactive apps ⚡",
            "Design + Code = My happy place 😍",
            "I create digital products that people love ❤️",
            "Frontend development makes me happier 🌈",
            "I solve problems with creativity & technology 🚀",
          ]}
          speed={80}
          deleteSpeed={80}
          delayBetween={1500}
        />

        <div className="mt-12 relative z-10 flex gap-4 items-center justify-center">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full border-2  dark:border-white border-black flex items-center"
          >
            Hire Me <FaArrowRightLong className="ml-2" />
          </Link>
          <a
            className="px-4 py-2 rounded-full bg-black text-white border-white border-2"
            href="../resume/Talha-Jamil-CV.pdf"
            download
          >
            Download CV
          </a>
        </div>
        <div className="relative z-10 flex flex-wrap gap-4 text-xl justify-center items-center py-8">
          <Link
            href="https://github.com/TJ745"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/talha-jamil-937b3b32"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://instagram.com/t_e_e.j_a_y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://snapchat.com/add/te3_j4y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSnapchat />
          </Link>
          <Link
            href="https://discord.gg/teejay745"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </Link>
          <Link
            href="https://x.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaX />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
