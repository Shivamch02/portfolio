"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/context/ThemeContext";

export default function Contributions() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center p-6 bg-white dark:bg-black">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <GitHubCalendar 
          username="shivamch02" 
          colorScheme={theme}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          style={{
            color: theme === 'dark' ? '#ffffff' : '#000000',
          }}
        />
      </div>
    </div>
  );
}
