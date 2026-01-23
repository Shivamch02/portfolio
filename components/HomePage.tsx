"use client";

import { Hero } from "./Hero";

export const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground dark:bg-grid-white/[0.1] bg-grid-black/[0.1] flex items-center justify-center overflow-hidden" id="home">
      {/* Radial gradient mask for the grid */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Main content */}
      <div className="relative z-10 main-container min-h-screen flex items-center justify-center">
        <div className="w-full flex justify-center py-20">
          <Hero />
        </div>
      </div>
    </div>
  );
};
