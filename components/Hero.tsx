"use client";

import { HiDocumentText, HiMoon, HiSun } from "react-icons/hi2";
import { SiGithub, SiX, SiGmail, SiLinkedin } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Guts from "../public/guts.jpg";

export const Hero = () => {
    const [time, setTime] = useState(new Date());
    const { theme, toggleTheme } = useTheme();
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const words = ["WebApps", "Frontend", "Backend"];
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        const wordTimer = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);

        return () => {
            clearInterval(timer);
            clearInterval(wordTimer);
        };
    }, []);

    const formatDateTime = (date: Date) => {
        return date.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZone: "Asia/Kolkata",
        });
    };

    const links = [
        {
            id: "github",
            icon: <SiGithub className="w-5 h-5" />,
            href: "https://github.com/shivamch02",
            label: "GitHub",
            className: "text-gray-900 dark:text-white",
        },
        {
            id: "x",
            icon: <SiX className="w-5 h-5" />,
            href: "https://x.com/shivamch02",
            label: "Twitter",
            className: "text-gray-900 dark:text-white",
        },
        {
            id: "gmail",
            icon: <SiGmail className="w-5 h-5" />,
            href: "mailto:shivam.chaurasiya.work@gmail.com",
            label: "Gmail",
            className: "text-[#EA4335]",
        },
        {
            id: "linkedin",
            icon: <SiLinkedin className="w-5 h-5" />,
            href: "https://linkedin.com/in/shivamch02",
            label: "LinkedIn",
            className: "text-[#0A66C2]",
        },
    ];

    const [isNameHovered, setIsNameHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-xl rounded-[2.5rem] p-5 sm:p-8 shadow-2xl dark:shadow-[0_0_80px_-15px_rgba(255,255,255,0.1)] border border-gray-200 dark:border-white/10 relative overflow-hidden group"
        >
            {/* Top Section: Profile & Handle */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                    <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/10 shadow-inner">
                        <Image
                            src={Guts}
                            alt="Shivam Chaurasiya"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div
                        onMouseEnter={() => setIsNameHovered(true)}
                        onMouseLeave={() => setIsNameHovered(false)}
                        className="cursor-default"
                    >
                        <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={isNameHovered ? "Guts" : "Shivam"}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isNameHovered ? "Guts." : "Shivam."}
                                </motion.span>
                            </AnimatePresence>
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-base font-medium">
                            @shivamch02
                        </p>
                    </div>
                </div>

                {/* Theme Toggle Button */}
                <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                    {theme === "light" ? <HiMoon className="w-5 h-5 sm:w-6 sm:h-6" /> : <HiSun className="w-5 h-5 sm:w-6 sm:h-6" />}
                </motion.button>
            </div>

            {/* Middle Section: Big Title & Bio */}
            <div className="space-y-3 mb-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-wrap items-center">
                    I build&nbsp;
                    <span className="relative inline-block min-w-[3ch]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={words[wordIndex]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="italic font-serif inline-block"
                            >
                                {words[wordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </span>.
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-xl leading-relaxed max-w-2xl">
                    A product-focused engineer who ships fast, brings ideas to life, and obsesses over the details that make software truly enjoyable.
                </p>
            </div>

            {/* Content: Social Links Grid */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {links.map((link) => (
                    <div key={link.id} className="relative">
                        <motion.a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onHoverStart={() => setHoveredId(link.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gray-50/80 dark:bg-zinc-900/80 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm"
                        >
                            <div className={`transition-all duration-300 ${link.className}`}>
                                {link.icon}
                            </div>
                        </motion.a>
                        <AnimatePresence>
                            {hoveredId === link.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: -6, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.8 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-medium rounded-md whitespace-nowrap z-[60] shadow-xl pointer-events-none"
                                >
                                    {link.label}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Bottom Row: View CV (Left) and Time/Status (Right) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* Left: View CV Button */}
                <a
                    href="https://drive.google.com/file/d/1qxPGkaBUmXpMqC6QHdtzt17VcB6voIUi/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block w-full sm:w-auto"
                >
                    <button className="w-full px-6 py-3 rounded-2xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-lg active:scale-95">
                        <HiDocumentText className="text-lg" />
                        View CV
                    </button>
                </a>

                {/* Right: Time (above) and Status (below) */}
                <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
                    <div className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs font-mono tracking-tight opacity-70 mb-1">
                        {formatDateTime(time)}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
                        <span className="text-gray-900 dark:text-gray-200 text-xs sm:text-sm font-medium tracking-tight">
                            Available for work
                        </span>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};
