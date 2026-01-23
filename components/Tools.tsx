"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiGithub,
    SiDocker,
    SiHtml5,
    SiCss3,
    SiRedux,
    SiFigma,
    SiVercel,
    SiPrisma,
} from "react-icons/si";

interface Tool {
    name: string;
    icon: React.ReactNode;
    color: string;
}

export const Tools = () => {
    const [isPaused, setIsPaused] = useState(false);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const [row1Width, setRow1Width] = useState(0);
    const [row2Width, setRow2Width] = useState(0);

    const toolsRow1: Tool[] = [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "currentColor" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "currentColor" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ];

    const toolsRow2: Tool[] = [
        { name: "Prisma", icon: <SiPrisma />, color: "#5A67D8" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "currentColor" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Vercel", icon: <SiVercel />, color: "currentColor" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ];

    useEffect(() => {
        if (row1Ref.current) {
            setRow1Width(row1Ref.current.scrollWidth / 2);
        }
        if (row2Ref.current) {
            setRow2Width(row2Ref.current.scrollWidth / 2);
        }
    }, []);

    const ToolCard = ({ tool }: { tool: Tool }) => (
        <div
            className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-gray-200/80 dark:border-white/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-default shrink-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Glow effect on hover */}
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none blur-sm"
                style={{ backgroundColor: tool.color }}
            />

            {/* Icon */}
            <div
                className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110 relative z-10"
                style={{ color: tool.color }}
            >
                {tool.icon}
            </div>

            {/* Name */}
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap relative z-10">
                {tool.name}
            </span>
        </div>
    );

    return (
        <section className="relative py-24 bg-white dark:bg-black selection:bg-blue-500/30" id="tools">
            {/* Background pattern */}
            <div className="absolute inset-0 dark:bg-grid-white/[0.02] bg-grid-black/[0.02] pointer-events-none" />

            <div className="main-container relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
                        >
                            Tech Stack
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                        >
                            Tools & <span className="italic font-serif">Technologies</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed"
                        >
                            The technologies I work with daily to build fast, scalable, and beautiful applications.
                        </motion.p>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="relative mt-8 space-y-4 overflow-hidden rounded-2xl">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

                    {/* Row 1 - Left to Right */}
                    <div className="overflow-hidden">
                        <motion.div
                            ref={row1Ref}
                            className="flex gap-3 sm:gap-4 w-fit"
                            animate={{
                                x: isPaused ? undefined : [0, -row1Width],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* Render twice for seamless loop - but animation ensures only one set visible */}
                            {[...toolsRow1, ...toolsRow1].map((tool, index) => (
                                <ToolCard key={`row1-${index}`} tool={tool} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 - Right to Left */}
                    <div className="overflow-hidden">
                        <motion.div
                            ref={row2Ref}
                            className="flex gap-3 sm:gap-4 w-fit"
                            animate={{
                                x: isPaused ? undefined : [-row2Width, 0],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* Render twice for seamless loop - but animation ensures only one set visible */}
                            {[...toolsRow2, ...toolsRow2].map((tool, index) => (
                                <ToolCard key={`row2-${index}`} tool={tool} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
