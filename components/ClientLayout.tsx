"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";
import CustomCursor from "./CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Music from "./Music";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate loading for 1.5s (can be API check, session check, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />
      <div className="flex  max-w-7xl mx-auto h-screen">
        {/* Desktop View */}
        {/* Left Sidebar */}
        <aside className="hidden w-80 p-4  lg:flex flex-col justify-between pt-8 border-r border-gray-800 overflow-y-auto">
          <div>
            {/* User Info */}
            <div className="flex flex-col items-center ">
              <Image
                src="/images/avatar.jpg"
                width={100}
                height={100}
                alt="User"
                className="w-30 h-30 rounded-full mb-4"
              />
              <span className="text-2xl">Talha Jamil</span>
              <span className="font-light text-gray-500 text-sm">
                @talhajamil
              </span>
            </div>

            {/* Language & Theme */}
            <div className="flex items-center justify-between p-4 ">
              <button className=" mb-2 p-2 bg-gray-700 rounded hover:bg-gray-600">
                Language
              </button>
              <ThemeToggle />
              <button className=" mb-2 p-2 bg-gray-700 rounded hover:bg-gray-600">
                Music
              </button>
              <Music />
            </div>
            <hr className="mb-2" />
            {/* Navigation Buttons */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`p-2 rounded ${
                    pathname === link.href ? "bg-gray-600" : "hover:bg-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-center text-sm text-gray-400">
            <hr className="mb-4" />© 2025 Your Company
          </div>
        </aside>

        {/* Mobile Top Navbar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-between z-20">
          {/* Left: Profile */}
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="/images/avatar.jpg" // replace with your image
              alt="Profile"
              className="w-8 h-8 rounded-full border border-white"
            />
            <span className="font-medium">Talha Jamil</span>
          </div>

          {/* Middle: Buttons */}
          <div className="flex space-x-4">
            <button className="px-2 py-1 bg-gray-700 rounded-lg text-sm">
              Lang
            </button>
            <button className="px-2 py-1 bg-gray-700 rounded-lg text-sm">
              Music
            </button>
            <ThemeToggle />
          </div>

          {/* Right: Burger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar (slide-in) */}
        <aside
          className={`fixed top-0 left-0 h-full w-full bg-gray-500 p-4 transform transition-transform duration-300 z-10 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <nav>
            <ul className="space-y-4 mt-16">
              <li className="border-b pb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left"
                >
                  Dashboard
                </button>
              </li>
              <li className="border-b pb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left"
                >
                  Profile
                </button>
              </li>
              <li className="border-b pb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left"
                >
                  Settings
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Right Content */}
        <main className="lg:flex-1  p-6 overflow-auto mt-16 lg:mt-0">
          {children}
        </main>
      </div>
    </>
  );
}
