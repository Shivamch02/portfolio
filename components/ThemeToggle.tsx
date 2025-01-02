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
      className="px-4 rounded-lg focus:outline-none text-black dark:text-white bg-transparent backdrop-blur-sm"
    >
      {theme === "light" ? <MdLightMode size={24} /> : <CgDarkMode size={24} />}
    </button>
  );
};

export default ThemeToggle;
