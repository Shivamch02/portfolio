"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiX, SiGmail, SiDiscord, SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi2";

export const LinksCard = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const { theme, toggleTheme } = useTheme();

    const links = [
        {
            id: "github",
            icon: <SiGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
            href: "https://github.com/shivamch02",
            label: "GitHub",
            className: "text-gray-900 dark:text-white",
        },
        {
            id: "x",
            icon: <SiX className="w-5 h-5 sm:w-6 sm:h-6" />,
            href: "https://x.com/shivamch02",
            label: "Twitter",
            className: "text-gray-900 dark:text-white",
        },
        {
            id: "gmail",
            icon: <SiGmail className="w-5 h-5 sm:w-6 sm:h-6" />,
            href: "mailto:your-email@gmail.com",
            label: "Gmail",
            className: "text-[#EA4335]",
        },
        {
            id: "discord",
            icon: <SiDiscord className="w-5 h-5 sm:w-6 sm:h-6" />,
            href: "https://discord.com",
            label: "Discord",
            className: "text-[#5865F2]",
        },
        {
            id: "linkedin",
            icon: <SiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
            href: "https://linkedin.com/in/shivamch02",
            label: "LinkedIn",
            className: "text-[#0A66C2]",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group/card relative bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-xl rounded-[2.5rem] p-4 sm:p-5 shadow-xl dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] border border-gray-200 dark:border-white/10 w-full max-w-[260px] sm:max-w-[280px]"
        >
            <div className="relative grid grid-cols-3 gap-3">
                {/* Theme Toggle Box */}
                <div className="relative">
                    <motion.button
                        onClick={toggleTheme}
                        onHoverStart={() => setHoveredId("theme")}
                        onHoverEnd={() => setHoveredId(null)}
                        whileHover={{ scale: 1.1, y: -2, rotate: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            aspect-square w-full rounded-[1.2rem] flex items-center justify-center
                            bg-gray-50/50 dark:bg-zinc-900/50
                            border border-gray-100 dark:border-white/5
                            transition-all duration-300
                            hover:bg-white dark:hover:bg-zinc-800
                            hover:border-gray-200 dark:hover:border-white/20
                            group/icon relative overflow-hidden
                        `}
                    >
                        {/* Inner highlight */}
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

                        <div className="transition-all duration-300 group-hover/icon:scale-110 text-gray-900 dark:text-white">
                            {theme === "light" ? (
                                <HiMoon className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                                <HiSun className="w-5 h-5 sm:w-6 sm:h-6" />
                            )}
                        </div>
                    </motion.button>

                    <AnimatePresence>
                        {hoveredId === "theme" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: -6, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.8 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] sm:text-xs font-medium rounded-md whitespace-nowrap z-[60] shadow-xl pointer-events-none"
                            >
                                {theme === "light" ? "Dark Mode" : "Light Mode"}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Icons */}
                {links.map((link) => (
                    <div key={link.id} className="relative">
                        <motion.a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onHoverStart={() => setHoveredId(link.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            whileHover={{ scale: 1.1, y: -2, rotate: indexToRotation(link.id) }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                aspect-square rounded-[1.2rem] flex items-center justify-center
                                bg-gray-50/50 dark:bg-zinc-900/50
                                border border-gray-100 dark:border-white/5
                                transition-all duration-300
                                hover:bg-white dark:hover:bg-zinc-800
                                hover:border-gray-200 dark:hover:border-white/20
                                group/icon relative overflow-hidden
                            `}
                        >
                            {/* Inner highlight */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

                            <div className={`transition-all duration-300 group-hover/icon:scale-110 ${link.className}`}>
                                {link.icon}
                            </div>
                        </motion.a>

                        {/* Tooltip */}
                        <AnimatePresence>
                            {hoveredId === link.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: -6, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.8 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] sm:text-xs font-medium rounded-md whitespace-nowrap z-[60] shadow-xl pointer-events-none"
                                >
                                    {link.label}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const indexToRotation = (id: string) => {
    const rotations: Record<string, number> = {
        github: -3,
        x: 3,
        gmail: 4,
        discord: -4,
        linkedin: 2,
    };
    return rotations[id] || 0;
};
