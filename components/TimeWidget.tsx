"use client";

import { useState, useEffect } from "react";

export const TimeWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "Asia/Kolkata",
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            timeZone: "Asia/Kolkata",
        });
    };

    return (
        <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl px-6 py-5 shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800/50">
            {/* Main time display */}
            <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white font-mono tracking-wider">
                    {formatTime(time)}
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {formatDate(time)}
                    </p>
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">IST</span>
                </div>
            </div>
        </div>
    );
};
