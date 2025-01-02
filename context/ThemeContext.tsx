// components/context/ThemeContext.ts
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Create the context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Define the ThemeProvider
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
