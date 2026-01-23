"use client";

import { Hero } from "./Hero";
import { TimeWidget } from "./TimeWidget";
import { FloatingDockDemo } from "./FloatingDockDemo";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black" id="home">
      {/* Main content */}
      <div className="relative z-10 main-container min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-20">
          {/* Left - Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Hero />
          </div>

          {/* Right - Time Widget */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <TimeWidget />
          </div>
        </div>
      </div>

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-auto">
        <ThemeProvider>
          <div className="flex items-center gap-3">
            <FloatingDockDemo />
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};
