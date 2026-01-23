"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/context/ThemeContext";

export default function Contributions() {
  const { theme } = useTheme();

  return (
    <div className="bg-background text-foreground section-container">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contributions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My GitHub activity and open source contributions
          </p>
        </div>

        {/* Calendar Card */}
        <div className="bg-background border border-gray-200 dark:border-gray-800/50 rounded-2xl p-6 md:p-8 flex justify-center overflow-x-auto shadow-lg dark:shadow-none">
          <GitHubCalendar
            username="shivamch02"
            colorScheme={theme}
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            style={{
              color: theme === 'dark' ? '#94a3b8' : '#475569',
            }}
          />
        </div>
      </div>
    </div>
  );
}
