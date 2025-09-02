import SparklesCore from "@/ui/SparklesCore";
import React from "react";

function Hero() {
  return (
    <div className="relative  h-screen w-full overflow-hidden dark:bg-black bg-white transition-colors">
      <SparklesCore
        className={`w-full h-full`}
        particleCount={250}
        speed={0.5}
      />
      <div className="relative z-10 flex flex-col h-full items-center justify-center">
        <h1 className="text-2xl font-bold text-black dark:text-white transition-colors">
          Hi, my name is 
        </h1>
        <br />
        <h1 className="text-5xl font-bold text-black dark:text-white transition-colors">Talha Jamil</h1>
      </div>
    </div>
  );
}

export default Hero;
