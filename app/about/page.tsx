// "use client";
// import Image from "next/image";
// import { motion } from "motion/react";

// export default function AboutPage() {
//   return (
//     <div>
//       <motion.h1
//         className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: false }}
//       >
//         ABOUT ME
//       </motion.h1>
//       <motion.span
//         className="block w-16 h-1 bg-red-950 mx-auto mt-3"
//         initial={{ scaleX: 0 }}
//         whileInView={{ scaleX: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: false }}
//       ></motion.span>

//       <div className="flex p-4 ">
//         {/* About Content */}
//         <motion.div
//           className="flex flex-col justify-center"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false }}
//         >
//           <h2 className="text-xl sm:text-2xl font-bold mb-4">Who I Am</h2>
//           <p className="text-justify">
//             I&apos;m <strong>Talha Jamil</strong>, a passionate{" "}
//             <span className="text-red-900 font-semibold">
//               Frontend Developer
//             </span>{" "}
//             and{" "}
//             <span className="text-red-900 font-semibold">UI/UX Designer</span>
//             dedicated to building fast, beautiful, and user-friendly web
//             experiences. I specialize in turning creative ideas into fully
//             functional, responsive, and engaging digital products that people
//             love to use. <br />
//             My focus is on delivering{" "}
//             <strong>
//               clean design, smooth performance, and intuitive interfaces
//             </strong>
//             that provide real value to users while aligning with business goals.
//           </p>

//           {/* Highlights */}
//           <div className="flex mt-10 gap-8">
//             <h1 className="w-1/4 bg-red-900 rounded-xl text-white p-2 flex items-center justify-center text-center">
//               Modern UI/UX
//             </h1>
//             <p className="w-3/4 text-justify">
//               I craft modern, accessible, and visually appealing interfaces that
//               put user experience at the center.
//             </p>
//           </div>
//           <div className="flex mt-10 gap-8">
//             <h1 className="w-1/4 bg-red-900 rounded-xl text-white p-2 flex items-center justify-center text-center">
//               Responsive Design
//             </h1>
//             <p className="w-3/4 text-justify">
//               Every project I build adapts seamlessly across devices, ensuring a
//               smooth experience on desktop, tablet, and mobile.
//             </p>
//           </div>
//           <div className="flex mt-10 gap-8">
//             <h1 className="w-1/4 bg-red-900 rounded-xl text-white p-2 flex items-center justify-center text-center">
//               Performance
//             </h1>
//             <p className="w-3/4 text-justify">
//               I optimize code and assets to deliver fast-loading, scalable, and
//               efficient applications that enhance user satisfaction.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import AboutMe from "@/components/AboutMe";
import Image from "next/image";

function About() {
  return (
    <div className="h-screen">
      <div className="container pt-6">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center flex-col mb-8 ">
            <h3 className="text-3xl font-bold mb-2 text-blue-600">About Me</h3>
            <p>What I do</p>
          </div>
          <div className="flex justify-center items-center gap-x-[75px]">
            <div className="w-[85%] flex flex-col justify-center">
              <div>
                <p className="text-justify">
                  I&apos;m Talha Jamil, a passionate Frontend Developer, UI/UX
                  Designer, and Mobile App Developer with a growing expertise in
                  Backend Development. I specialize in creating modern,
                  responsive, and user-friendly web and mobile applications that
                  deliver seamless digital experiences. <br />
                  <br />
                  With strong skills in React, Next.js, TailwindCSS, and React
                  Native, I build fast and visually engaging interfaces for web
                  and mobile. On the backend, I work with Node.js, Supabase, and
                  modern APIs to ensure secure, scalable, and reliable
                  functionality. <br />
                  <br /> My approach combines design thinking, clean code, and
                  performance optimization to deliver products that look great,
                  work smoothly, and provide real value. Whether it&apos;s a web
                  platform, a mobile app, or a full-stack project, I love
                  turning ideas into reality with precision and creativity.{" "}
                  <br />
                  <br />
                  If you&apos;re looking for a developer who can handle
                  frontend, backend, and mobile while keeping the user
                  experience at the core, I&apos;d be excited to collaborate and
                  help bring your vision to life.
                  <br />
                  <br />
                  Best Regards, <br />
                  <br />
                </p>
                <Image
                  src="/images/sign.png"
                  alt="signature"
                  width={350}
                  height={400}
                />
              </div>
            </div>
          </div>
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default About;
