"use client";
import React, { useEffect, useRef, useState } from "react";

interface ResumeTabItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

interface ResumeTabsProps {
  items: ResumeTabItem[];
}

function ResumeTabs({ items }: ResumeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    firstBtnRef.current?.focus();
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8 mb-10">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex justify-center items-center gap-x-1 font-medium text-sm py-3 rounded-3xl cursor-pointer duration-[0.3s]  ${
                activeTab === index ? "py-3 px-4 bg-blue-600 text-white" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-[75px]">
          {items.map((item, index) => (
            <div
              className={`${activeTab === index ? "" : "hidden"}`}
              key={index}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeTabs;
