"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TimeWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group/card relative bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-xl rounded-[2rem] p-4 sm:p-5 shadow-xl dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] border border-gray-200 dark:border-white/10 w-full max-w-[260px] sm:max-w-[280px]"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-gray-900 dark:text-gray-200 text-sm font-medium tracking-tight">
                    Available for work
                </span>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-xs font-mono tracking-tight">
                {formatDateTime(time)}
            </div>
        </motion.div>
    );
};
