"use client";

import { Hero } from "./Hero";
import { motion } from "framer-motion";

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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold">Scroll</span>
        <div className="w-[22px] h-[36px] rounded-full border-2 border-gray-300 dark:border-white/20 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-gray-400 dark:bg-white/40"
          />
        </div>
      </motion.div>
    </div>
  );
};
