"use client";

import { useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="music/relaxing.mp3" loop />
      <button
        onClick={togglePlay}
        className="flex gap-1 items-end h-6 w-6 cursor-pointer"
        aria-label="Toggle Sound"
      >
        {[0, 1, 2, 3].map((bar) => (
          <div
            key={bar}
            className="relative w-1 h-full bg-gray-700 rounded-sm overflow-hidden"
          >
            <span
              className={`
              absolute bottom-0 left-0 w-full bg-green-300
              ${isPlaying ? "animate-soundbar" : ""}
            `}
              style={{
                animationDelay: `${bar * 0.15}s`,
                height: isPlaying ? "100%" : "30%",
              }}
            ></span>
          </div>
        ))}
      </button>
    </div>
  );
}
