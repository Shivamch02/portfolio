// components/ThemeToggle.tsx
"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="py-3 px-3 rounded-full focus:outline-none border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white bg-transparent backdrop-blur-sm"
    >
      {theme === "light" ? <CgDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
};

export default ThemeToggle;
