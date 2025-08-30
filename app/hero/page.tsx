"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen container mx-auto ">
      {/* Left Sidebar */}
      <aside className="w-80 p-4 flex flex-col justify-between pt-18 border-r border-gray-800 ">
        <div>
          {/* User Info */}
          <div className="flex flex-col items-center mb-2">
            <Image
              src="/images/avatar.jpg"
              alt="User"
              className="w-30 h-30 rounded-full mb-8"
            />
            <span className="text-2xl mb-2">Talha Jamil</span>
            <span className="font-light text-gray-500 text-sm">
              @talhajamil
            </span>
          </div>

          {/* Language & Theme */}
          <div className="flex items-center justify-between p-4 pb-6">
            <button className=" mb-2 p-2 bg-gray-700 rounded hover:bg-gray-600">
              Language
            </button>
            <ThemeToggle />
            <button className=" mb-2 p-2 bg-gray-700 rounded hover:bg-gray-600">
              Music
            </button>
          </div>
          <hr className="mb-4" />
          {/* Navigation Buttons */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              return (
                <button
                  key={link.label}
                  className={`p-2 rounded ${
                    activePage === link.label
                      ? "bg-gray-600"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setActivePage(link.label)}
                >
                  <p>{link.label}</p>
                </button>
              );
            })}
            <button
              className={`p-2 rounded ${
                activePage === "dashboard" ? "bg-gray-600" : "hover:bg-gray-700"
              }`}
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </button>
          </nav>
        </div>
        <div className="text-center text-sm text-gray-400">
          <hr className="mb-4" />© 2025 Your Company
        </div>
      </aside>

      {/* Right Content */}
      <main className="flex-1  p-6 overflow-auto">
        {activePage === "dashboard" && <div>Dashboard Content</div>}
        {activePage === "chatroom" && <div>Profile Content</div>}
        {activePage === "settings" && <div>Settings Content</div>}
      </main>
    </div>
  );
}
