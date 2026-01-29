"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/context/ThemeContext";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useState } from "react";

export default function Contributions() {
  const { theme } = useTheme();
  const [total, setTotal] = useState<number | null>(null);

  const transformData = (data: any[]) => {
    const sum = data.reduce((acc, day) => acc + day.count, 0);
    setTotal(sum);
    return data;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-background text-foreground section-container">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Activity <span className="italic font-serif">Graph</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A visual representation of my open-source journey and consistency.
          </p>
        </div>

        {/* Calendar Card */}
        <div className="relative">
          <div className="relative bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-4 md:p-5 shadow-xl dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)] overflow-hidden">
            <div className="flex justify-center overflow-x-auto no-scrollbar pb-2">
              <GitHubCalendar
                username="shivamch02"
                transformData={transformData}
                theme={{
                  light: ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
                  dark: ["#2d333b", "#0E4429", "#006D32", "#26A641", "#39D353"],
                }}
                fontSize={12}
                blockSize={12}
                blockMargin={3}
                hideColorLegend
                hideTotalCount
                renderBlock={(block, activity) => (
                  <rect
                    {...block.props}
                    data-tooltip-id="contribution-tooltip"
                    data-tooltip-content={`${activity.count} contribution${activity.count !== 1 ? "s" : ""
                      } on ${formatDate(activity.date)}`}
                    rx={3}
                    ry={3}
                  />
                )}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>

            {/* Legend / Status */}
            <div className="mt-8 flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/5 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>
                  {total !== null
                    ? `${total} contributions in the last year`
                    : "Loading activity..."}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-[2px]"
                      style={{
                        backgroundColor:
                          theme === "dark"
                            ? ["#2d333b", "#0E4429", "#006D32", "#26A641", "#39D353"][i]
                            : ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"][i],
                      }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tooltip Configuration */}
        <ReactTooltip
          id="contribution-tooltip"
          className="!bg-gray-900 dark:!bg-white !text-white dark:!text-gray-900 !text-xs !px-3 !py-2 !rounded-xl !shadow-2xl !opacity-100 !z-50 !backdrop-blur-md"
          place="top"
        />
      </div>
    </div>
  );
}
